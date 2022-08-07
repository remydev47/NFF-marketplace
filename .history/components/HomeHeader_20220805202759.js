import { View, Text, Image, TextInput, Image } from 'react-native'
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
      <Text>HomeHeader</Text>
    </View>
  )
}

export default HomeHeader