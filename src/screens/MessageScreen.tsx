import React, { useState } from 'react'
import { View, StyleSheet, ToastAndroid } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { getFirestore, collection, addDoc, serverTimestamp } from '@firebase/firestore';
import firebaseConfig from '../constants/Firebase';

const MessageScreen = () => {
    const [message, setMessage] = useState('');
    const db = getFirestore(firebaseConfig.app);

    const sendMessage = async () => {
        if(message.trim() === '') return;
        
        const user = "user1";

        const newMessage = {
            id: Math.random().toString(36).substr(2, 9),
            text: message,
            timestamp: serverTimestamp(),
            user: user
        }

        try {
            await addDoc(collection(db, 'messages'), newMessage);
            ToastAndroid.show("Mensaje enviado", ToastAndroid.SHORT);
            setMessage('');
        } catch(e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <View style={styles.container}>
            <Input 
                placeholder="Escribe tu mensaje..." 
                value={message} 
                onChangeText={setMessage}
            />
            <Button title="Enviar mensaje" onPress={sendMessage} />
        </View>
    )
}

export default MessageScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
})
