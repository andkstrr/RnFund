import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const App = () => {
    const [nama, setNama] = useState('')
    const [umur, setUmur] = useState('')
    return (
        <View style={ styles.area }>
            <Text style={ styles.tulisan }>Halo {nama}, Anda berumur {umur} tahun</Text>
            <TextInput 
                placeholder='Masukkan Nama'
                style={ styles.input }
                keyboardType='default'
                onChangeText={(text) => setNama(text)}
            />
            <TextInput 
                placeholder='Berapa Umur Anda?'
                style={ styles.input }
                keyboardType='numeric'
                onChangeText={(number) => setUmur(number)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    area: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tulisan: {
        fontSize: 35,  
        color: 'white',
    },
    input: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 20,
        width: '60%',
        padding: 10,
        fontSize: 35,
        marginTop: 20
    }
})

export default App