import { View, Text, Image } from 'react-native'
import React from 'react'

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
    </View>
  )
}

export default DetailsHeader