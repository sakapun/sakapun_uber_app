import React, {useCallback, useState} from 'react'
import {
  Grid,
  Box,
  List,
  ListItem,
  Link,
  Button
} from '@chakra-ui/core'

const IndexPageComponent = (props: any) => {
  return(
    <Grid
      templateColumns="30% 1fr"
      gap={0}
      height="100%"
      templateRows="100%"
      p={0}
    >
    </Grid>
  )
}

export const IndexPage = () => {
  return <IndexPageComponent />
}
