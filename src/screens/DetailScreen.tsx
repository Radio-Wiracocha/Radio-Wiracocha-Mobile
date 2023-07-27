import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootTabParamList } from '../../generalConf';

const DetailScreen = ({ route }: { route: RouteProp<RootTabParamList, 'DetailScreen'> }) => {
    const { name, imageUrl, description, category } = route.params;
   
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.category}>{category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    fontSize: 16,
  },
  category: {
    marginTop: 10,
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default DetailScreen;
