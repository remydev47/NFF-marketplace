import { View, Text, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { COLORS, SIZES, font, SHADOWS } from '../constants'

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
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark
    }
})