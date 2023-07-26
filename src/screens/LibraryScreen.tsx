import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const LibraryScreen = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.row}>
                <Ionicons name="headset" color='#f48225' size={25} />
                <Text style={styles.item}>Playlist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
                <Ionicons name="ios-pencil" color='#f48225' size={25} />
                <Text style={styles.item}>Artist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
                <Ionicons name="disc" color='#f48225' size={25} />
                <Text style={styles.item}>Albums</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
                <Ionicons name="folder" color='#f48225' size={25} />
                <Text style={styles.item}>Folders</Text>
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
    item: {
        fontSize: 20,
        paddingStart: 10,
        color: '#f48225'
    },
    row: {
        flexDirection: 'row',
        margin: 5
    },
    icon: {

    }
})