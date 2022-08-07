import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { COLORS, NFTData } from '../constants'
import { NftCart, HeaderHeader, FocusedStatusBar } from '../components'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView style={styles.header}>
       <FocusedStatusBar backGroundColor={COLORS.primary}/>
       <View style={styles.div1}>
        <View>

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
        zIndex: 0
    }
})