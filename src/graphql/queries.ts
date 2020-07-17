/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStore = /* GraphQL */ `
  query GetStore($id: ID!) {
    getStore(id: $id) {
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
export const listStores = /* GraphQL */ `
  query ListStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
