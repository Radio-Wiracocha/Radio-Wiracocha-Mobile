import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react'
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
    const auth = getAuth();
    const navigation = useNavigation();
    const handleSignout = () => {
        signOut(auth)
            .then(() => {
                navigation.navigate("LoginScreen" as never, {} as never)
            })
            .catch((error) => {
                alert(error)
            })
    }
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.profilePic} source={require('../../assets/Miguel-circular.webp')} />
                <Text style={styles.text}>
                    user1@gmail.com
                </Text>
            </View>           
            <TouchableOpacity style={styles.button} onPress={handleSignout}>
                <Text style={styles.textButton}>
                    SignOut
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    profilePic: {
        width: 200,
        height: 200,
        borderRadius: 50, 
        marginTop: 20
    },
    button: {
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#5391E2',
        padding: 15,
        width: '33%',
        justifyContent: 'center'
    },
    textButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    text: {
        color: 'gray',
        textAlign: 'center',
        fontSize: 20,
        padding: 5
    },
})