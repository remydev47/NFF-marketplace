import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, COLORS, FONTS, assets } from '../constants'

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
      <Image
        source={imgUrl} 
        resizeMode="contain"
        style={{
            width: 48,
            height: 48,
            marginLeft: index === 0 ? 0 : -SIZES.font
        }}
      />
    )
  }

  export const People = () => {
    return (
      <View style={{flexDirection: "row"}}>
        {[assets.person01, assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
            <Image 
            />
        ))}
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
            paddingHorizontal: -SIZES.font,
            marginTop: SIZES.extraLarge,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}
      >
        <People />
        <EndDate />
      </View>
    )
  }