import { View, Text, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { COLORS, SIZES, FONTS } from '../constants'

const NftCart = ({ data }) => {
  return (
    <View
      style={styles.container}
    >
      <Text>NftCart</Text>
    </View>
  )
}

export default NftCart;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,

    }
})