import { View, Text, Image, StatusBar, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { COLORS,FONTS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton, FocusedStatusBar, Subinfo, RecButton, DetailsDesc, Detailsbid } from '../components';



const Details = ({route, navigation}) => {
 
  const { data } = route.params;
  
  return (
    <SafeAreaView
      style={{
        flex: 1
      }}
    >
    <FocusedStatusBar 
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent={true}
    />
     <View
       style={{
        position: "absolute",
        width: "100%",
        bottom: 0,
        alignItems: "center",
        paddingVertical: SIZES.font,
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        zIndex:1
       }}
     >
      <RecButton 
        width={200}
        hight={70}
        fontSize={SIZES.large}
        {...SHADOWS.dark}
      />
     </View>
     <FlatList 
       data={data.bids}
       renderItem={({item}) => <Detailsbid bid={item}/>}
     />
    </SafeAreaView>
  )
}

export default Details