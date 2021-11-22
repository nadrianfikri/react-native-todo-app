import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Modal from 'react-native-modal';

import { AntDesign } from '@expo/vector-icons';

export default function ModalComp(props) {
  return (
    <Modal isVisible={props.isVisible}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.modalContainer}>
          <View style={styles.row}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.text}>Edit Task</Text>
              <AntDesign name="edit" size={20} color="hsl(234, 11%, 52%)" />
            </View>

            <TouchableOpacity onPress={props.closeBtn}>
              <AntDesign name="close" size={24} color="hsl(234, 11%, 52%)" />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 3 }}>
            <TextInput style={styles.input} placeholder="Edit Task" placeholderTextColor="hsl(235, 24%, 19%)" onChangeText={props.onChangeText} value={props.value} />
          </View>
          <View style={{ flex: 2 }}>
            <TouchableOpacity style={styles.saveBtn} onPress={props.saveBtn}>
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  // modal
  modalContainer: {
    padding: 10,
    width: '90%',
    height: 200,
    backgroundColor: ' hsl(234, 39%, 85%)',
    borderRadius: 10,
  },
  wrapper: {
    flex: 3,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeButton: {
    backgroundColor: 'blue',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'hsl(234, 11%, 52%)',
    fontSize: 20,
    marginRight: 10,
  },
  input: {
    color: 'hsl(235, 24%, 19%)',
    marginTop: 15,
    fontSize: 24,
    width: '100%',
    height: 55,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'hsl(235, 24%, 19%)',
  },
  saveBtn: {
    marginTop: 20,
    paddingHorizontal: 25,
    paddingVertical: 10,
    alignSelf: 'flex-end',
    backgroundColor: 'hsl(235, 24%, 19%)',
    borderRadius: 10,
    elevation: 10,
  },
  saveText: {
    color: 'white',
    fontSize: 18,
  },
});
