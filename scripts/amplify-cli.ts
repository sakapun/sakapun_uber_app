import Amplify, {Auth, API} from "aws-amplify";
import awsExports from "../src/aws-exports";
import {listStores} from "../src/graphql/queries";
import {mutationCog} from "../src/lib/amplify-query-helper";
import {CreateStoreInput, CreateStoreMutation, CreateStoreMutationVariables} from "../types/amplify_api";
import {createStore} from "../src/graphql/mutations";
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
