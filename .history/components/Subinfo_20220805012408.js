import { View, Text } from 'react-native'
import React from 'react'
import { SIZES } from '../constants'

export const NFTtitle = () => {
  return (
    <View>
      <Text>Subinfo</Text>
    </View>
  )
}

export const EthPrice = () => {
    return (
      <View>
        <Text>EthPrice</Text>
      </View>
    )
  }

  export const ImagCmp = () => {
    return (
      <View>
        <Text>ImagCmp</Text>
      </View>
    )
  }

  export const People = () => {
    return (
      <View>
        <Text>People</Text>
      </View>
    )
  }

  export const EndDate = () => {
    return (
      <View>
        <Text>EndDate</Text>
      </View>
    )
  }
 
  export const Subinfo = () => {
    return (
      <View
        style={{
            width: "100%",
            paddingHorizontal: SIZES.font,
            marginTop: SIZES.extraLarge,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}
      >
        <Text>Subinfo</Text>
      </View>
    )
  }