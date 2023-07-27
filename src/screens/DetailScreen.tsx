import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootTabParamList } from '../../generalConf';
import { ImageVariables } from '../constants/images';

const image = { uri: ImageVariables.backgroundImage };
const DetailScreen = ({ route }: { route: RouteProp<RootTabParamList, 'DetailScreen'> }) => {
    const { name, imageUrl, description, category } = route.params;
   
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.imageBckgound}>
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.name}>{name}</Text>      
            <Text style={styles.category}>{category}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '',
  },
  image: {
    width: 200,
    height: 200,
  },
  imageBckgound: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white'
  },
  description: {
    marginTop: 10,
    fontSize: 20,
    marginHorizontal: 45,   
    fontWeight: 'semibold', 
    color: 'white',    
    textAlign: 'justify'
  },
  category: {
    marginTop: 10,
    fontSize: 18,
    fontStyle: 'italic',
    color: 'white'
  },
});

export default DetailScreen;
