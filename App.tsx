import './src/constants/Firebase'
import { StatusBar, StyleSheet, View } from 'react-native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import { configureStore } from './src/store';

const store = configureStore();

export default function App() {
  let colorScheme = useColorScheme();

  const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <StoreProvider store={store}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </StoreProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
