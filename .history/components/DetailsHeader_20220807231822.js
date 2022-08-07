import { View, Text, Image } from 'react-native'
import React from 'react'
import { assets } from '../constants'
import { CircleButton } from './Button'
import { useNavigation } from '@react-navigation/native'

const DetailsHeader = ({data, navigation}) => {
   
  return (
    <View
     style={{
        width: "100%",
        height: 373
     }}
    >
     <Image
       source={data.image} 
       resizeMode="cover"
       style={{
        width: "100%",
        height: "100%"
       }}
     />
     <CircleButton 
       imgUrl={assets.left}
       handlePress={() => navigation.goback()}
     />
    </View>
  )
}

export default DetailsHeader