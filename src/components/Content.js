import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Content(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.row}>
        <AntDesign name="checkcircleo" size={24} color="hsl(234, 39%, 85%)" />
      </TouchableOpacity>
      <TouchableOpacity style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <TouchableOpacity style={styles.row}>
          <AntDesign name="edit" size={24} color="hsl(234, 39%, 85%)" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <AntDesign name="delete" size={24} color="hsl(234, 39%, 85%)" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-center',
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(235, 24%, 19%)',
    borderBottomWidth: 1.5,
    borderBottomColor: 'hsl(237, 14%, 26%)',
  },
  text: {
    color: 'hsl(234, 39%, 85%)',
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 7,
  },
});
