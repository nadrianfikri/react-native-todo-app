import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Container from './Container';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Container />
    </>
  );
}
