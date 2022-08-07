import { View, Text, } from 'react-native'
import React, {useState} from 'react'
import { EthPrice, NFTtitle } from './Subinfo'
import { SIZES, COLORS, FONTS, assets } from '../constants'

const DetailsDesc = ({ data }) => {
  return (
    <>
     <View>
         <NFTtitle 
           title={data.name}
           subTitle={data.creator}
           titleSize={SIZES.extraLarge}
           subTitleSize={SIZES.font}
         />
         <EthPrice 
          price={data.price}
         />
     </View>
    </>
  )
}

export default DetailsDesc