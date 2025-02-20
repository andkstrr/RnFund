import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

// definisikan terlebih dahulu interface untuk props
interface AnakProps {
    nama: string;
    umur: number;
    email: string;
}

class Anak extends Component<AnakProps> {
    render() {
        return (
            <View style={styles.area}>
                {/* Props adalah sebuah fungsi untuk mengirimkan data atau sebagai wadah template data */}
                <Text style={styles.tulisan}>Nama: {this.props.nama}</Text>
                <Text style={styles.tulisan}>Umur: {this.props.umur} Tahun</Text>
                <Text style={styles.tulisan}>Email: {this.props.email}</Text>
            </View>
        );
    }
}

export class Keluarga extends Component {
  render() {
    return (
      <View>
        <Text style={styles.teksJudul}> Anggota Keluarga </Text>

        {/* Menggunakan props */}
        <Anak 
            nama="Andika"
            umur={17}  // Pastikan jika number di props menggunakan {} agar terbaca sebagai number
            email="andkstrr@gmail.com"
        />

        {/* Hardcode */}
        <View style={styles.area}>
            <Text style={styles.tulisan}>Nama: Satrio</Text>
            <Text style={styles.tulisan}>Umur: 18 Tahun</Text>
            <Text style={styles.tulisan}>Email: satriostrr@gmail.com</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    area: {
        backgroundColor: 'gray',
        padding: 10, 
        marginVertical: 5
    },
    teksJudul: {
        fontSize: 40, 
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'black',
        padding: 20
    },
    tulisan: {
        fontSize: 18,  
        color: 'white',
        padding: 5
    }
});

export default Keluarga;
