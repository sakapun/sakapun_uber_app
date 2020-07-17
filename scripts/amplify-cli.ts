import Amplify, {Auth, API} from "aws-amplify";
import awsExports from "../src/aws-exports";
import {listStores} from "../src/graphql/queries";
import {gqlOp, mutationCog} from "../src/lib/amplify-query-helper";
import {
  CreateStoreInput,
  CreateStoreMutation,
  CreateStoreMutationVariables,
  ListStoreIdsQuery, ListStoresQueryVariables
} from "../types/amplify_api";
import {createStore} from "../src/graphql/mutations";
import {listStoreIds} from "../src/graphql/myquery";
global.fetch = require("node-fetch")
require("dotenv").config()

const {COGNITO_USER_ID, COGNITO_USER_PW} = process.env

// Setting
Amplify.configure(awsExports);

function sleep(length: number) {
  return new Promise(resolve => setTimeout(resolve, length));
}

export async function amplifySignIn() {
  await Auth.signIn(COGNITO_USER_ID || "", COGNITO_USER_PW)
}
export async function amplifySignOut() {
  await Auth.signOut()
}

export async function simpleCreateStoreMutation(appsyncStore: CreateStoreInput, index: number): Promise<void> {
  await sleep(200 * index);
  console.log("start" + appsyncStore.title)
  return await mutationCog<CreateStoreMutation, CreateStoreMutationVariables>(createStore, {
    input: appsyncStore
  })
    .then(r => console.log("fin"+ appsyncStore.title))
    .catch(e => console.warn(e))
}

export async function getAllStoreIds(nextToken: string | null | undefined = null): Promise<string[]> {
  const variables = nextToken ? {nextToken} :{}
  const resp = await gqlOp<ListStoreIdsQuery, ListStoresQueryVariables>(listStoreIds, variables)
  const nextToken2 = resp.listStores?.nextToken

  const result: string[] = resp.listStores?.items?.map(item => item?.id || "")  || []
  if (nextToken2) {
    return result.concat(await getAllStoreIds(nextToken2))
  } else {
    return result
  }
}


// amplifySignIn().then( async () => {
//   const ids = await getAllStoreIds()
//   return ids
// })
