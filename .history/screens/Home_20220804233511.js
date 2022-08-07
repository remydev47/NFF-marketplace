import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { COLORS, NFTData } from '../constants'
import { NftCart, HeaderHeader, FocusedStatusBar, HomeHeader } from '../components'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView style={styles.header}>
       <FocusedStatusBar backGroundColor={COLORS.primary}/>
       <View style={styles.div1}>
        <View style={styles.div2}>
            <FlatList 
              data={NFTData}
              renderItem={({item}) => <Text>{item.name}</Text>}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<HomeHeader />}
            />
        </View>
        <View style={styles.wrapper}>
            <View style={styles.wrapper1}/>
            <View style={styles.wrapper2} />
        </View>
       </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    header: {
        flex: 1
    },
    div1: {
        flex: 1
    },
    div2: {
        zIndex: 0
    },
    wrapper: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: -1,
    },
    wrapper1: {
        height:300,
        backgroundColor: COLORS.primary
    },
    wrapper2: {
        flex: 1,
        backgroundColor: COLORS.primary
    }
})