import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export class App extends Component {
  // State untuk menyimpan satu data
  state = {
    nama: 'Andika',
    email: 'andkstrr@gmail.com',
    detail: {
      'umur': 17, 'status': 'single'
    }
  }

  // Function untuk mengubah data ketika button di klik
  changeData = () => {
    this.setState({ nama: 'Satrio' })
    this.setState({ email: 'satriostrr@gmail.com' })
    this.setState({ detail:{ 'umur' : '18', 'status': 'HTS' } })
  }
  render() {
    return (
      <View style={ styles.wrapper }>
        {/* Cara pemanggilan state */}
        <Text style={ styles.tulisan }> Nama Saya: { this.state.nama } </Text>
        <Text style={ styles.tulisan }> Email Saya: { this.state.email } </Text>
        <Text style={ styles.tulisan }> Umur Saya: { this.state.detail.umur } </Text>
        <Text style={ styles.tulisan }> Status Saya: { this.state.detail.status } </Text>
        <Button 
            title='Ubah Data'
            onPress={() => this.changeData()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tulisan: {
        fontSize: 30,
        color: '#FFF'
    }
})

export default App
