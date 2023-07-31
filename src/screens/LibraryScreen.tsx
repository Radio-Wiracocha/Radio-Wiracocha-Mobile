import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';

const DATA = require('../utils/radio.json');
type RadioData = {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    category: string;
  };

const LibraryScreen = () => {
    const navigation = useNavigation();
    const [isPlaying, setIsPlaying] = useState(false);
    const [soundInstance, setSoundInstance] = useState<Audio.Sound | null>(null);
  
    const handlePlayPause = async () => {
        if (!soundInstance) {
          try {
            const { sound } = await Audio.Sound.createAsync(
              { uri: 'https://firebasestorage.googleapis.com/v0/b/rws-users-4cfb3.appspot.com/o/Radio-Wiracocha.mp3?alt=media&token=19ad62f6-0964-4315-a496-00cc292069c0' },
              { shouldPlay: true }
            );
            setSoundInstance(sound);
            setIsPlaying(true);
          } catch (error) {
            console.log('Error creating sound:', error);
          }
        } else {
          if (isPlaying) {
            await soundInstance.pauseAsync();
          } else {
            await soundInstance.playAsync();
          }
          setIsPlaying(!isPlaying);
        }
      };

      useEffect(() => {
        return () => {
          if (soundInstance) {
            soundInstance.unloadAsync();
          }
        };
      }, [soundInstance]);

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

            <TouchableOpacity style={styles.button} onPress={handlePlayPause}>
                <Text style={styles.buttonText}>{isPlaying ? 'Detener' : 'Reproducir'} emisora actual</Text>
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
