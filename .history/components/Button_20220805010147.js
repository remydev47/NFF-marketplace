import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS, SIZES } from '../constants'

export const CircleButton = ({imgUrl, handlePress, ...props }) => {
  return (
   <TouchableOpacity style={styles.container}>

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

  const styles= StyleSheet.create({
    container: {
      width: 40,
      height: 40,
      backgroundColor: COLORS.white,
      position: 'absolute',
      alignItems: "center",
      
    }
  })
