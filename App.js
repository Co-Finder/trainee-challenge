import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Text, View } from 'react-native';

//teste
import Home from './src/Pages/Home/index'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Everything is ok...</Text>
      <Home />
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40: 0,
  },
});
