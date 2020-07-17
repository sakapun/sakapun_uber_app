/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStore = /* GraphQL */ `
  query GetStore($id: ID!) {
    getStore(id: $id) {
      id
      title
      sanitizedTitle
      cityId
      priceBucket
      location {
        address
        streetAddress
        city
        country
        postalCode
        region
        latitude
        longitude
      }
      phoneNumber
      rating {
        ratingValue
        reviewCount
      }
      mostDistance {
        distance
        place
        latitude
        longitude
      }
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
        id
        title
        sanitizedTitle
        cityId
        priceBucket
        location {
          address
          streetAddress
          city
          country
          postalCode
          region
          latitude
          longitude
        }
        phoneNumber
        rating {
          ratingValue
          reviewCount
        }
        mostDistance {
          distance
          place
          latitude
          longitude
        }
      }
      nextToken
    }
  }
`;
