import { View, Text, Image } from 'react-native'
import React from 'react'
import { EthPrice } from './Subinfo'
import { FONTS, COLORS, SIZES } from '../constants'

const Detailsbid = ({bid}) => {
  return (
    <View>
      <Image 
        source={bid.image}
        resizeMode="contain"
        style={{
            width:48,
            height: 48
        }}
      />
      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary

          }}
        >
            Bid Placed by {bid.name}
        </Text>
      </View>
    </View>
  )
}

export default Detailsbid