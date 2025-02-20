import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export class App extends Component {
    // Tempat menyimpan value state dari TextInput
    state = {
        nama: ''
    }
    render() {
        return (
            <View style={ styles.area }>
                {/* Memunculkan value dari state yang diisi dari TextInput */}
                <Text style={ styles.tulisan }>Selamat Datang {this.state.nama}</Text>
                <TextInput 
                    placeholder='Masukkan Nama'
                    style={ styles.input }
                    keyboardType='default'
                    // event handler untuk menangkap value dan disimpan ke state
                    onChangeText={(text)=>this.setState({ nama: text})}
                />
            </View>
        )
    }
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