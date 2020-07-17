/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
      title
      sanitizedTitle
      uuid
      cityId
      priceBucket
      address
      streetAddress
      city
      country
      postalCode
      region
      latitude
      longitude
      phoneNumber
      ratingValue
      reviewCount
    }
  }
`;
export const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
      title
      sanitizedTitle
      uuid
      cityId
      priceBucket
      address
      streetAddress
      city
      country
      postalCode
      region
      latitude
      longitude
      phoneNumber
      ratingValue
      reviewCount
    }
  }
`;
export const deleteStore = /* GraphQL */ `
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
      title
      sanitizedTitle
      uuid
      cityId
      priceBucket
      address
      streetAddress
      city
      country
      postalCode
      region
      latitude
      longitude
      phoneNumber
      ratingValue
      reviewCount
    }
  }
`;
