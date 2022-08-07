import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { COLORS, NFTData } from '../constants'
import { NftCart, HeaderHeader, FocusedStatusBar } from '../components'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView style={styles.header}>
       <Text>Home</Text>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    header: `flex-1`,
})