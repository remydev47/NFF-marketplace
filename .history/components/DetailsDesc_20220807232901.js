import { View, Text, } from 'react-native'
import React, {useState} from 'react'
import { EthPrice, NFTTitle } from './Subinfo'
import { SIZES, COLORS, FONTS, assets } from '../constants'

const DetailsDesc = ({ data }) => {
  return (
    <>
     <View>
         <NFTTitle 
           title={data.name}
         />
     </View>
    </>
  )
}

export default DetailsDesc