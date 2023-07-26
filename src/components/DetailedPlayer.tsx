import { StyleSheet, Image, Text, View, useColorScheme, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/StackScreenProps';

// MARK: Details when sond is been reproduced
const DetailedPlayer = () => {
    let colorScheme = useColorScheme();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    const backButton = () => {
        navigation.navigate('HomeScreen', { id: 'HomeScreen' })
        console.log("backButton pressed")
    }

    return (
        <View style={[styles.container, themeContainerStyle]}>
            <View style={styles.topPlaying}>
                <TouchableOpacity onPress={backButton}>
                    <MaterialIcons style={[themeTextStyle]} name="keyboard-arrow-down" size={24} color="black" />
                </TouchableOpacity>
                <Text style={[styles.playing, themeTextStyle]}>
                    Now playing
                </Text>
                <TouchableOpacity>
                    <MaterialCommunityIcons style={[themeTextStyle]} name="dots-horizontal" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DetailedPlayer

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        height: '100%'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },
    topPlaying: {
        width: '100%',
        marginTop: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    songImage: {
        width: 270,
        height: 270,
        marginTop: 60,
        marginBottom: 50,
    },
    playing: {
        fontSize: 15,
        alignItems: 'flex-start',
    },
    songName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    songArtist: {
        marginBottom: 150
    },
    lightContainer: {
        backgroundColor: 'white',
    },
    darkContainer: {
        backgroundColor: 'black',
    },
    lightThemeText: {
        color: 'black',
    },
    darkThemeText: {
        color: 'white',
    },
})