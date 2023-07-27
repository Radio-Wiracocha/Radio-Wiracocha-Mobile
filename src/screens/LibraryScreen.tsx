import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

// Datos ficticios para ilustrar el ejemplo
const DATA = require('../utils/radio.json');
type RadioData = {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    category: string;
    // Y cualquier otra propiedad que tengan tus objetos
  };

const LibraryScreen = () => {
    const navigation = useNavigation();

    return (
     <View style={styles.container}>
        <Text style={styles.title}>Locutores</Text>
        <FlatList
            data={DATA.filter((item: RadioData) => item.category === 'locutor')}
            horizontal
            renderItem={({ item }: { item: RadioData }) => (
            <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', item)}>
                <Image style={styles.image} source={{ uri: item.imageUrl }} />
                <Text>{item.name}</Text>
            </TouchableOpacity>
            )}
            keyExtractor={(item: RadioData) => item.id}
        />
            
            <Text style={styles.title}>Emisoras</Text>
            <FlatList
                data={DATA.filter((item: RadioData) => item.category === 'emisora')}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', item)}>
                        <Image style={styles.image} source={{ uri: item.imageUrl }} />
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />

            <Text style={styles.title}>Podcasts</Text>
              <FlatList
                data={DATA.filter((item: RadioData) => item.category === 'podcast')}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', item)}>
                        <Image style={styles.image} source={{ uri: item.imageUrl }} />
                        <Text>{item.name}</Text>
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
        marginRight: 50,
        marginHorizontal: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
})
