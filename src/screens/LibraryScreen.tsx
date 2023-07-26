import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

// Datos ficticios para ilustrar el ejemplo
const DATA = [
  { id: '1', src: 'https://f.rpp-noticias.io/2019/02/15/753296descarga-7jpg.jpg' },
  { id: '2', src: 'https://f.rpp-noticias.io/2019/02/15/753296descarga-7jpg.jpg' },
  { id: '3', src: 'https://f.rpp-noticias.io/2019/02/15/753296descarga-7jpg.jpg' },
  { id: '4', src: 'https://f.rpp-noticias.io/2019/02/15/753296descarga-7jpg.jpg' },
  { id: '5', src: 'https://f.rpp-noticias.io/2019/02/15/753296descarga-7jpg.jpg' },
];

const LibraryScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Locutores</Text>
            <FlatList
                data={DATA}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {/* Navegar a detalles del locutor */}}>
                        <Image style={styles.image} source={{ uri: item.src }} />
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />
            
            <Text style={styles.title}>Emisoras</Text>
            <FlatList
                data={DATA}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {/* Navegar a detalles de la emisora */}}>
                        <Image style={styles.image} source={{ uri: item.src }} />
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />

            <Text style={styles.title}>Podcasts</Text>
            <FlatList
                data={DATA}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {/* Navegar a detalles del podcast */}}>
                        <Image style={styles.image} source={{ uri: item.src }} />
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Reproducir emisora actual</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LibraryScreen

const styles = StyleSheet.create({
    container: {
        marginStart: 30,
        marginTop: 20,
        padding: 5
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#5391E2',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
})
