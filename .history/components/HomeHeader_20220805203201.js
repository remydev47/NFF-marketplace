import { View, Text, Image, TextInput,  } from 'react-native'
import React from 'react';
import { COLORS, FONTS, SIZES, assets } from '../constants'

const HomeHeader = () => {
  return (
    <View
     style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font
     }}
    >
      <View
       style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "center"
       }}
      >
        <Image 
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25}}
        />
      </View>
      <View
        style={{
          width: 45,
          height: 45
        }}
      >
        <Image 
          source={assets.person01}
          resizeMode="contain"
          style={{ width: "100%", height: "100%"}}
        />
        <Image 
          source={assets.badge}
          resizeMode="contain"
          style={{ position: "absolute"}}
        />
      </View>
      <Text>HomeHeader</Text>
    </View>
  )
}

export default HomeHeader