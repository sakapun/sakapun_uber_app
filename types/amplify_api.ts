/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStoreInput = {
  id?: string | null,
  title: string,
  sanitizedTitle: string,
  cityId: number,
  priceBucket: string,
  location: LocationInput,
  phoneNumber: string,
  rating: RatingInput,
  mostDistance: MostDistanceInput,
};

export type LocationInput = {
  address: string,
  streetAddress: string,
  city: string,
  country: string,
  postalCode: string,
  region: string,
  latitude: number,
  longitude: number,
};

export type RatingInput = {
  ratingValue: number,
  reviewCount: string,
};

export type MostDistanceInput = {
  distance: number,
  place: string,
  latitude: number,
  longitude: number,
};

export type ModelStoreConditionInput = {
  title?: ModelStringInput | null,
  sanitizedTitle?: ModelStringInput | null,
  cityId?: ModelIntInput | null,
  priceBucket?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  and?: Array< ModelStoreConditionInput | null > | null,
  or?: Array< ModelStoreConditionInput | null > | null,
  not?: ModelStoreConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateStoreInput = {
  id: string,
  title?: string | null,
  sanitizedTitle?: string | null,
  cityId?: number | null,
  priceBucket?: string | null,
  location?: LocationInput | null,
  phoneNumber?: string | null,
  rating?: RatingInput | null,
  mostDistance?: MostDistanceInput | null,
};

export type DeleteStoreInput = {
  id?: string | null,
};

export type ModelStoreFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  sanitizedTitle?: ModelStringInput | null,
  cityId?: ModelIntInput | null,
  priceBucket?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  and?: Array< ModelStoreFilterInput | null > | null,
  or?: Array< ModelStoreFilterInput | null > | null,
  not?: ModelStoreFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateStoreMutationVariables = {
  input: CreateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type CreateStoreMutation = {
  createStore:  {
    __typename: "Store",
    id: string,
    title: string,
    sanitizedTitle: string,
    cityId: number,
    priceBucket: string,
    location:  {
      __typename: "Location",
      address: string,
      streetAddress: string,
      city: string,
      country: string,
      postalCode: string,
      region: string,
      latitude: number,
      longitude: number,
    },
    phoneNumber: string,
    rating:  {
      __typename: "Rating",
      ratingValue: number,
      reviewCount: string,
    },
    mostDistance:  {
      __typename: "MostDistance",
      distance: number,
      place: string,
      latitude: number,
      longitude: number,
    },
  } | null,
};

export type UpdateStoreMutationVariables = {
  input: UpdateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type UpdateStoreMutation = {
  updateStore:  {
    __typename: "Store",
    id: string,
    title: string,
    sanitizedTitle: string,
    cityId: number,
    priceBucket: string,
    location:  {
      __typename: "Location",
      address: string,
      streetAddress: string,
      city: string,
      country: string,
      postalCode: string,
      region: string,
      latitude: number,
      longitude: number,
    },
    phoneNumber: string,
    rating:  {
      __typename: "Rating",
      ratingValue: number,
      reviewCount: string,
    },
    mostDistance:  {
      __typename: "MostDistance",
      distance: number,
      place: string,
      latitude: number,
      longitude: number,
    },
  } | null,
};

export type DeleteStoreMutationVariables = {
  input: DeleteStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type DeleteStoreMutation = {
  deleteStore:  {
    __typename: "Store",
    id: string,
    title: string,
    sanitizedTitle: string,
    cityId: number,
    priceBucket: string,
    location:  {
      __typename: "Location",
      address: string,
      streetAddress: string,
      city: string,
      country: string,
      postalCode: string,
      region: string,
      latitude: number,
      longitude: number,
    },
    phoneNumber: string,
    rating:  {
      __typename: "Rating",
      ratingValue: number,
      reviewCount: string,
    },
    mostDistance:  {
      __typename: "MostDistance",
      distance: number,
      place: string,
      latitude: number,
      longitude: number,
    },
  } | null,
};

export type GetStoreQueryVariables = {
  id: string,
};

export type GetStoreQuery = {
  getStore:  {
    __typename: "Store",
    id: string,
    title: string,
    sanitizedTitle: string,
    cityId: number,
    priceBucket: string,
    location:  {
      __typename: "Location",
      address: string,
      streetAddress: string,
      city: string,
      country: string,
      postalCode: string,
      region: string,
      latitude: number,
      longitude: number,
    },
    phoneNumber: string,
    rating:  {
      __typename: "Rating",
      ratingValue: number,
      reviewCount: string,
    },
    mostDistance:  {
      __typename: "MostDistance",
      distance: number,
      place: string,
      latitude: number,
      longitude: number,
    },
  } | null,
};

export type ListStoresQueryVariables = {
  filter?: ModelStoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoresQuery = {
  listStores:  {
    __typename: "ModelStoreConnection",
    items:  Array< {
      __typename: "Store",
      id: string,
      title: string,
      sanitizedTitle: string,
      cityId: number,
      priceBucket: string,
      location:  {
        __typename: "Location",
        address: string,
        streetAddress: string,
        city: string,
        country: string,
        postalCode: string,
        region: string,
        latitude: number,
        longitude: number,
      },
      phoneNumber: string,
      rating:  {
        __typename: "Rating",
        ratingValue: number,
        reviewCount: string,
      },
      mostDistance:  {
        __typename: "MostDistance",
        distance: number,
        place: string,
        latitude: number,
        longitude: number,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateStoreSubscription = {
  onCreateStore:  {
    __typename: "Store",
    id: string,
    title: string,
    sanitizedTitle: string,
    cityId: number,
    priceBucket: string,
    location:  {
      __typename: "Location",
      address: string,
      streetAddress: string,
      city: string,
      country: string,
      postalCode: string,
      region: string,
      latitude: number,
      longitude: number,
    },
    phoneNumber: string,
    rating:  {
      __typename: "Rating",
      ratingValue: number,
      reviewCount: string,
    },
    mostDistance:  {
      __typename: "MostDistance",
      distance: number,
      place: string,
      latitude: number,
      longitude: number,
    },
  } | null,
};

export type OnUpdateStoreSubscription = {
  onUpdateStore:  {
    __typename: "Store",
    id: string,
    title: string,
    sanitizedTitle: string,
    cityId: number,
    priceBucket: string,
    location:  {
      __typename: "Location",
      address: string,
      streetAddress: string,
      city: string,
      country: string,
      postalCode: string,
      region: string,
      latitude: number,
      longitude: number,
    },
    phoneNumber: string,
    rating:  {
      __typename: "Rating",
      ratingValue: number,
      reviewCount: string,
    },
    mostDistance:  {
      __typename: "MostDistance",
      distance: number,
      place: string,
      latitude: number,
      longitude: number,
    },
  } | null,
};

export type OnDeleteStoreSubscription = {
  onDeleteStore:  {
    __typename: "Store",
    id: string,
    title: string,
    sanitizedTitle: string,
    cityId: number,
    priceBucket: string,
    location:  {
      __typename: "Location",
      address: string,
      streetAddress: string,
      city: string,
      country: string,
      postalCode: string,
      region: string,
      latitude: number,
      longitude: number,
    },
    phoneNumber: string,
    rating:  {
      __typename: "Rating",
      ratingValue: number,
      reviewCount: string,
    },
    mostDistance:  {
      __typename: "MostDistance",
      distance: number,
      place: string,
      latitude: number,
      longitude: number,
    },
  } | null,
};
