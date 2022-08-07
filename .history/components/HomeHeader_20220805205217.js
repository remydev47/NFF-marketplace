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
        <View
        style={{
          width: 45,
          height: 45,
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
          style={{ position: "absolute", width: 15, height: 15, bottom: 0, right: 0}}
        />
      </View>
      </View> 

      <View
       style={{
        marginVertical: SIZES.font,

       }}
      >
         <Text style={{fontWeight: 'bold', fontSize: SIZES.small, color: COLORS.white}}>
          Hello Julian
         </Text>
         <Text
           style={{
            fontWeight:"bold",
            color: COLORS.white,
            marginTop: 3,
            fontSize: "large"
           }}
         >
          Lets find a MasterPeace
        </Text>
      </View>   

    </View>
  )
}

export default HomeHeader