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
         />
     </View>
    </>
  )
}

export default DetailsDesc