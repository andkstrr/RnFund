import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

const App = () => {
  const [menu, setMenu] = useState([
    { id: 0, namaMenu: 'Ayam Goreng'},
    { id: 1, namaMenu: 'Ayam Bakar' },
    { id: 2, namaMenu: 'Ayam Gulai' },
    { id: 3, namaMenu: 'Ayam Goreng'},
    { id: 4, namaMenu: 'Ayam Bakar' },
    { id: 5, namaMenu: 'Ayam Gulai' },
    { id: 6, namaMenu: 'Ayam Goreng'},
    { id: 7, namaMenu: 'Ayam Bakar' },
    { id: 8, namaMenu: 'Ayam Gulai' },
    { id: 9, namaMenu: 'Ayam Goreng'},
    { id: 10, namaMenu: 'Ayam Bakar' },
    { id: 11, namaMenu: 'Ayam Gulai' },
    { id: 12, namaMenu: 'Ayam Goreng'},
    { id: 13, namaMenu: 'Ayam Bakar' },
    { id: 14, namaMenu: 'Ayam Gulai' },
  ])
  return (
      <View>
        <ScrollView>
            {
                menu.map((item, index) => (
                    <View key={index}>
                        <Text style={ styles.item }>{item.namaMenu}</Text>
                    </View>
                ))
            }

        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        backgroundColor: 'blue',
        color: 'white',
        marginBottom: 10,
        fontSize: 30
    },
})

export default App