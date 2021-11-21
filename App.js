import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Container from './Container';
import Home from './src/screen/Home';

export default function App() {
  return (
    <Container />
    // <View style={styles.container}>
    //   <StatusBar style="light" />
    //   <Home />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
