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
     <View>
      <RecButton 
        width={70}
        hight={70}
        fontSize={SIZES.large}
        {...SHADOWS.dark}
      />
     </View>
    </SafeAreaView>
  )
}

export default Details