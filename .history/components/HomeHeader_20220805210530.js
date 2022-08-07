import { View, Text, Image, TextInput,  } from 'react-native'
import React from 'react';
import { COLORS, FONTS, SIZES, assets } from '../constants'
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
          Hello Julian 👋 
         </Text>
         <Text
           style={{
            fontWeight:"bold",
            color: COLORS.white,
            marginTop: SIZES.base/ 2,
            
           }}
         >
          Lets find a MasterPeace
        </Text>
      </View> 

      <View style={{marginTop: SIZES.font}}>
        <View
          style={{
            width: '100%',
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2
          }}
        >
        <Image 
          source={assets.search}
          style={{ width: 20, height: 20, marginRight: SIZES.base}}
        />
        <TextInput
          placeholder='Search Nfts'
          style={{ flex : 1 }}
          onChangeText={() => {}}
        />
        </View>
      </View>  

    </View>
  )
}

export default HomeHeader