import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={ styles.area }>
        <View style={ styles.redCard }></View>
        <View style={ styles.yellowCard }></View>
        <View style={ styles.greenCard }></View>
    </View>
  )
}

const styles = StyleSheet.create({
    area:{ backgroundColor: 'white', flexDirection: 'column', justifyContent: 'space-between' },
    redCard:{
        width: 100,
        height: 100,
        backgroundColor: 'red',
    },
    yellowCard:{
        width: 100,
        height: 100,
        backgroundColor: 'yellow'
    },
    greenCard:{
        width: 100,
        height: 100,
        backgroundColor: 'green'
    }

})