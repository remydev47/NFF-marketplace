import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS, SIZES } from '../constants'
import Subinfo from './Subinfo'

export const CircleButton = ({ imgUrl, handlePress, ...props}) => {
  return (
   <TouchableOpacity
     style={{
      width: 40,
      height: 40,
      backgroundColor: COLORS.white,
      position: 'absolute',
      borderRadius: SIZES.extraLarge,
      alignItems: "center",
      justifyContent: 'center',
      ...SHADOWS.light,
      ...props
   }}
   onPress={handlePress}
   >
    <Image source={imgUrl} resizeMode="contain" style={{width: 24, height: 24}}/>
    
   </TouchableOpacity>
  )
}



export const RecButton = ({ minWidth, handlePress, fontSize, ...props}) => {
    return (
      <TouchableOpacity
      style={{     
       backgroundColor: COLORS.primary,
       borderRadius: 30,
       minHeight: minWidth,
       padding: SIZES.small,
       ...props
    }}
    onPress={handlePress}
    >
     <Text style={{ color: COLORS.white, fontSize: "600"}}>Place a Bid</Text>
     
    </TouchableOpacity>
    )
  }


