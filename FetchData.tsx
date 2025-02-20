import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export class App extends Component {
  state = {
    email: '',
    nama: ''
  }
  fetchData = () => {
    var url = "https://reqres.in/api/users/13"
    fetch(url)
    .then(data => data.json())
    .then(result => {
        this.setState({ email: result.data.email })
        this.setState({ nama: result.data.first_name + " " + result.data.last_name })
    })
  }
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.dataContainer}>
              <Text style={styles.label}>Email: {this.state.email}</Text>
              <Text style={styles.label}>Nama: {this.state.nama}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button 
                title="AMBIL DATA DARI API"
                onPress={this.fetchData}
                color="#007bff"
              />
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
    },
    dataContainer: {
        width: "100%", 
        marginBottom: 300, 
    },
    label: {
        fontSize: 18,
        color: "#000",
        marginBottom: 5,
    },
    buttonContainer: {
        width: "100%", 
        alignSelf: "stretch",
    },
})

export default App