import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native';

const SignupScreen = () => {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View>
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    secureTextEntry
                />
            </View>
        </KeyboardAvoidingView>
    )
}

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {

    }
})