import axios from 'axios';
const { performance } = require('perf_hooks');

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


async function getAddress (landString: string): Promise<string> {
  const autoCompleteRes = await axios.post("https://www.ubereats.com/api/getLocationAutocompleteV1?localeCode=jp", {
    query: landString
  }, {headers: header})
  const first = autoCompleteRes.data.data[0]

  const detailRes = await axios.post("https://www.ubereats.com/api/getLocationDetailsV1?localeCode=jp", first, {headers: header})
  return encodeURI(JSON.stringify(detailRes.data.data))
}

main();
// getAddress()

async function main() {
  const time1 = performance.now()
  const addressEncoded = await getAddress("川口ビル")
  const time2 = performance.now()
  console.log(time2 - time1)
  const storeIds = await getStoresIds(addressEncoded)
  const time3 = performance.now()
  console.log(time3 - time2)
  console.log(storeIds)
}
