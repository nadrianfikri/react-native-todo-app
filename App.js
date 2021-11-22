import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Container from './Container';
import Home from './src/screen/Home';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Container />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
