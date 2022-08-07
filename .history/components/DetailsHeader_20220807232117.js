import { View, Text, Image, StatusBar } from 'react-native'
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
       handlePress={() => navigation.goBack()}
       left={15}
       top={StatusBar.currentHeight + 10}
     />
      <CircleButton 
       imgUrl={assets.heart}
       right={15}
       top={StatusBar.currentHeight + 10}
     />
    </View>
  )
}

export default DetailsHeader