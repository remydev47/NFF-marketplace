import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS, SIZES } from '../constants'

export const CircleButton = ({ imgUrl, handlePress }) => {
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
      
   }}
   >
    <Image source={imgUrl} resizeMode="contain" style={{width: 24, height: 24}}/>
   </TouchableOpacity>
  )
}



export const RecButton = () => {
    return (
      <View>
        <Text>CircleButton</Text>
      </View>
    )
  }


