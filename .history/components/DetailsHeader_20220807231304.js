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
     />
    </View>
  )
}

export default DetailsHeader