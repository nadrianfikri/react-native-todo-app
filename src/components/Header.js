import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Header(props) {
  return (
    <ImageBackground source={require('../../assets/images/bg-mobile-dark.jpg')} resizeMode="cover" style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.textTitle}>T O D O</Text>

        <View style={{ position: 'relative' }}>
          <TextInput style={styles.input} placeholder="Create a New Task" placeholderTextColor="hsl(234, 11%, 52%)" onChangeText={props.onChangeText} value={props.value} />
          <TouchableOpacity style={styles.icon} onPress={props.onPress}>
            <AntDesign name="plus" size={24} color="hsl(234, 11%, 52%)" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'hsl(235, 21%, 11%)',
  },
  wrapper: {
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
  textTitle: {
    color: 'white',
    fontSize: 40,
  },
  input: {
    position: 'relative',
    color: 'hsl(234, 39%, 85%)',
    fontSize: 20,
    width: '100%',
    height: 55,
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: 'hsl(235, 24%, 19%)',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 10 },
    shadowRadius: 10,
    elevation: 20,
  },
  icon: {
    position: 'absolute',
    padding: 2,
    top: 32,
    right: 10,
    elevation: 23,
    backgroundColor: 'hsl(235, 24%, 19%)',
    borderWidth: 1,
    borderColor: 'hsl(233, 14%, 35%)',
    borderRadius: 50,
  },
  placeholder: {
    color: 'white',
  },
});
