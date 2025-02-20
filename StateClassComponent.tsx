import React, { Component } from 'react'
import { Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native'

export class App extends Component {
  // State untuk menyimpan banyak data
  state = {
      namaHewan: [
          { id: 0, nama:'Kucing' },
          { id: 1, nama:'Sapi' },
          { id: 2, nama:'Kelinci' },
          { id: 3, nama:'Kambing' }
      ]
  }    

  // Memunculkan nama hewan ketika touchable di klik
  touchHewan = (namaHewan: string) => {
    Alert.alert('Hewan ini bernama ' + namaHewan)
  }

  render() {
    return (
      <View>
        {
            // Cara pemanggilan state
            this.state.namaHewan.map((item, index) => (
                <TouchableOpacity onPress={()=>this.touchHewan(item.nama)}>
                    <Text style={styles.textNamaHewan} key={index}>{item.nama}</Text>
                </TouchableOpacity>
            ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
    textNamaHewan: {
        fontSize: 30,
        color: '#FFF',
        backgroundColor: 'blue',
        padding: 5,
        marginBottom: 2
    }
})
export default App
