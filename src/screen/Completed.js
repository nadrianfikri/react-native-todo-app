import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import Content from '../components/Content';
import { ScrollView } from 'react-native-gesture-handler';

export default function Completed() {
  const [form, setForm] = useState('');

  console.log(form);
  return (
    <View style={styles.container}>
      <Header value={form} onChangeText={(text) => setForm(text)} />
      <ScrollView style={{ width: '100%' }}>
        <Content text="Completed bath" />
        <Content text="Lunch" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(235, 21%, 11%)',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
