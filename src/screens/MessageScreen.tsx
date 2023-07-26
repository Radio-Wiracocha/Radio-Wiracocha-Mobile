import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ToastAndroid, FlatList, Text } from 'react-native'
import { Input, Button, ListItem } from 'react-native-elements'
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, limit, onSnapshot } from '@firebase/firestore';
import firebaseConfig from '../constants/Firebase';
import { Timestamp } from '@firebase/firestore';

type Message = {
    id: string;
    text: string;
    timestamp: Timestamp;
    user: string;
}

const MessageScreen = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const db = getFirestore(firebaseConfig.app);

    useEffect(() => {
        const messagesRef = collection(db, 'messages');
        const q = query(messagesRef, orderBy('timestamp', 'desc'), limit(5));
        
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const newMessages: Message[] = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }) as Message);
            setMessages(newMessages);
        });
        
        return () => unsubscribe();  // Limpiamos el listener al desmontar el componente
    }, [db]);

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
            <Text style={styles.item}>¡Envía un mensaje al locutor!</Text>            
            <Input 
                placeholder="Escribe tu mensaje..." 
                value={message} 
                onChangeText={setMessage}
            />
            <Button title="Enviar mensaje" onPress={sendMessage} />

            {messages.length === 0 ? (
                <Text style={styles.noMessageText}>Ningún mensaje enviado aún</Text>
            ) : (
                <FlatList
                    data={messages}
                    renderItem={({ item }) => (
                        <ListItem bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>{item.text}</ListItem.Title>
                                <ListItem.Subtitle>{item.user}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )}
                    keyExtractor={item => item.id}
                />
            )}
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
    noMessageText: {
        textAlign: 'center',
        marginTop: 20,
    },
    item: {
        fontSize: 20,
        paddingBottom: 20,
        color: '#f48225',
        textAlign: 'center'
    },
})
