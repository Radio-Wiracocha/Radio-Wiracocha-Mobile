import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import radioData from '../utils/radio.json'; // Asegúrate de que este es el camino correcto a tu archivo JSON.

const LibraryScreen = () => {
    // Organizamos los datos por categoría
    const locutores = radioData.filter(item => item.category === 'locutor');
    const emisoras = radioData.filter(item => item.category === 'emisora');
    const podcasts = radioData.filter(item => item.category === 'podcast');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Locutores</Text>
            <FlatList
                data={locutores}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {/* Navegar a detalles del locutor */}}>
                        <Image style={styles.image} source={{ uri: item.imageUrl }} />
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.name}
            />
            
            <Text style={styles.title}>Emisoras</Text>
            <FlatList
                data={emisoras}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {/* Navegar a detalles de la emisora */}}>
                        <Image style={styles.image} source={{ uri: item.imageUrl }} />
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.name}
            />

            <Text style={styles.title}>Podcasts</Text>
            <FlatList
                data={podcasts}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {/* Navegar a detalles del podcast */}}>
                        <Image style={styles.image} source={{ uri: item.imageUrl }} />
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.name}
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
