import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
    button: {
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#f48225',
        padding: 15,
        width: '33%',
        justifyContent: 'center'
    },
    textButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }
})