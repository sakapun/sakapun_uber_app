import axios from 'axios';
import {LocationDetail, LocationStoreMap, StoreDetail} from "../types/uber_type";
import distance from "@turf/distance"
import {point} from "@turf/helpers"
import {CreateStoreInput, CreateStoreMutation, CreateStoreMutationVariables} from "../types/amplify_api";
import { mutationCog } from '../src/lib/amplify-query-helper';
import {createStore} from "../src/graphql/mutations";
const { performance } = require('perf_hooks');


export type UberResponse<DataType> = {
  status: "success" | "failure",
  data: DataType
}
const getAPIpath = (endpoint: string) => `https://www.ubereats.com/api/${endpoint}?localeCode=jp`
const header = {
  "content-type": "application/json",
  "x-csrf-token": "x",
  "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
  "accept-language": "ja,en-US;q=0.9,en;q=0.8,la;q=0.7",
}

async function getStoresIds (addressEncoded: string): Promise<string[]> {
  const res = await axios.post(getAPIpath("getFeedV1"), null, {
    headers: {
      ...header,
      cookie: `uev2.loc=${addressEncoded}`
    }
  })
  const storesMap = res.data.data.storesMap as object
  return Object.keys(storesMap)
}


async function getAddress (landString: string, index: number = 0): Promise<LocationDetail> {
  const autoCompleteRes = await axios.post(getAPIpath("getLocationAutocompleteV1"), {
    query: landString
  }, {headers: header})
  const firstSuggestion = autoCompleteRes.data.data[0]

  const detailRes = await axios.post<UberResponse<LocationDetail>>(getAPIpath("getLocationDetailsV1"), firstSuggestion, {headers: header})
  return detailRes.data.data
}

async function getStore(uuid: string, index: number = 0): Promise<StoreDetail> {
  if (index > 0) {
    await sleep(index * 100);
  }
  console.log(`店舗${index}のサーチ中`)
  const storeRes = await axios.post<UberResponse<StoreDetail>>(getAPIpath("getStoreV1"), {
    storeUuid: uuid,
    sfNuggetCount: 0
  }, {headers: header})
  return storeRes.data.data
}
function sleep(length: number) {
  return new Promise(resolve => setTimeout(resolve, length));
}

async function addLocationStoresMap(landString: string, lsMap: LocationStoreMap, index: number = 0): Promise<LocationStoreMap> {
  if (index > 0) {
    await sleep(index * 100);
  }
  console.log(`住所${index}のサーチ中`)
  const locationDetail = await getAddress(landString)
  const addressEncoded = encodeURI(JSON.stringify(locationDetail))

  const storeIds = await getStoresIds(addressEncoded)

  return lsMap.set(locationDetail, storeIds)
}

async function generateAppsyncStores(storeMaps: Map<string, StoreDetail>, lsMap:  LocationStoreMap) : Promise<CreateStoreInput[]> {
  const storeWithDistArr: CreateStoreInput[] = [];
  storeMaps.forEach((shopDetail, thisStoreKey) => {
    const storePoint = point([shopDetail.location.longitude, shopDetail.location.latitude])
    const mostDistance: {place: string, distance: number} = {place: "", distance: 0}
    lsMap.forEach((deliveryStoreKeys, loc) => {
      if (deliveryStoreKeys.find(sk => sk === thisStoreKey)) {
        const locPoint = point([loc.longitude, loc.latitude])
        const dNum = distance(locPoint, storePoint)
        mostDistance.distance = mostDistance.distance > dNum ? mostDistance.distance : dNum;
        mostDistance.place = mostDistance.distance > dNum ? mostDistance.place : loc.address.title;
      }
    })
    storeWithDistArr.push({
      ...shopDetail,
      mostDistance: {
        ...mostDistance,
        longitude: 0,
        latitude:0
      },
      rating: shopDetail.rating ? shopDetail.rating : {
        ratingValue: 0,
        reviewCount: "0"
      }
    })
    console.log(`${shopDetail.title}と${mostDistance.place}の距離：${mostDistance.distance}` )
  })
  return storeWithDistArr;
}

main();
async function main() {
  // 検索文字列から対応店舗の取得
  const lsMap: LocationStoreMap = new Map();
  await Promise.all(
    ["川口ビル", "新潟県庁", "極楽湯 女池", "ウォーターセル株式会社", "N1万代", "プルニマ", "新潟市立白山小学校"].map((s, index) => {
      return addLocationStoresMap(s, new Map(), index)
        .then(r => r.forEach((v, k) => {
          lsMap.set(k, v)
        }))
    })
  )

  // 店舗情報の取得
  const storeIds: Set<string> = new Set(Array.from(lsMap.values()).flat())
  const storeMaps: Map<string, StoreDetail> = new Map()
  await Promise.all(Array.from(storeIds.values()).slice().map((s, index) => {
    return getStore(s, index).then(detail => storeMaps.set(detail.uuid, detail))
  }))

  // 最大の配達距離を計測して、appsync登録用に変換する
  const appsyncStores = await generateAppsyncStores(storeMaps, lsMap);
  // mutationCog<CreateStoreMutation, CreateStoreMutationVariables>(createStore, {
  //   input: appsyncStores[0]
  // })

  return
}
