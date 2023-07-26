import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useColorScheme } from 'react-native';
import { ColorVariables } from '../constants/colors';
import { FontAwesome } from '@expo/vector-icons';
import { ImageVariables } from '../constants/images';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import Navigation from '../navigation';

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const auth = getAuth();
    const user = auth.currentUser;
    const navigation = useNavigation();

    useEffect(() => {
        if (user) {
            navigation.navigate('Root')
        } else {
            navigation.navigate("LoginScreen" as never, {} as never)
        }
    }, [])

    let colorScheme = useColorScheme();
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    const image = { uri: ImageVariables.backgroundImage };

    const handleSignup = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Signin", user.email)
                alert("Registered")
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(`${errorMessage}`)
            });
    };

    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigation.navigate("HomeScreen" as never)
                const user = userCredential.user;
                console.log("Login", user.email)
                alert("Login successful")
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(`${errorMessage}`)
            });

    }

    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <KeyboardAvoidingView style={[styles.container, themeContainerStyle]} behavior="padding">
                <View style={styles.inputContainer}>
                    <FontAwesome name="music" size={100} color={ColorVariables.white} style={styles.musicIcon} />
                    <Text style={styles.title}>
                        ¡Welcome to Radio Wiracocha!
                    </Text>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleLogin}
                        style={[styles.button]}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleSignup}
                        style={[styles.button, styles.buttonOutline]}>
                        <Text style={styles.buttonOutlineText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>

            <TouchableOpacity>

            </TouchableOpacity>

        </ImageBackground>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    musicIcon: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 90
    },
    title: {
        justifyContent: 'center',
        width: '100%',
        textAlign: 'center',
        paddingTop: 40,
        paddingBottom: 40,
        fontSize: 25,
        color: ColorVariables.white,
        fontWeight: 'bold'
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: ColorVariables.primarycolor,
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'transparent',
        marginTop: 10,
        borderColor: ColorVariables.white,
        borderWidth: 2,
    },
    buttonText: {
        color: ColorVariables.white,
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: ColorVariables.white,
        fontWeight: '700',
        fontSize: 16,
    },
    playButton: {
        padding: 20,
    },
    lightContainer: {
        backgroundColor: 'transparent',
    },
    darkContainer: {
        backgroundColor: 'transparent',
    },
    lightThemeText: {
        color: 'black',
    },
    darkThemeText: {
        color: 'white',
    },
})