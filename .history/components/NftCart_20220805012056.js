import { View, Text, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { COLORS, SIZES, font, SHADOWS, assets } from '../constants'
import { CircleButton, RecButton } from './Button';
import { Subinfo, ImageCmp, EndDate, EthPrice, People, NFTtitle } from './Subinfo';

const NftCart = ({ data }) => {
  return (
    <View
      style={styles.container}
    >
        <View style={styles.div1}>
            <Image
              source={data.image} 
              resizeMode="cover"
              style={styles.imagecontainer}
            />
            <CircleButton  
             imgUrl={assets.heart}
             right={10}
             top={10}
       
             />
        </View>
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
    },
    div1: {
        width: "100%",
        height: 250
    },
    imagecontainer: {
        width: "100%",
        height: "100%",
        borderTopLeftRadius: SIZES.font,
        borderTopLeftRadius: SIZES.font
    },
    circle: {

    }
})