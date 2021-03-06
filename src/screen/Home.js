import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { StyleSheet, View, FlatList, Image, Alert } from 'react-native';

import ModalComp from '../components/ModalComp';
import Header from '../components/Header';
import Content from '../components/Content';

export default function Home(props) {
  const [form, setForm] = useState('');
  const [editForm, setEditForm] = useState({
    body: '',
    id: '',
  });
  const [show, setShow] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Create LifeCycle
  useEffect(() => {
    getAllTask();
  }, []);

  // Create Function get data from api
  const getAllTask = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://todo-mobile-api.herokuapp.com/api/v1/task');

      setTasks(response.data.data);
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
      console.log(error);
      setIsLoading(false);
    }
  };

  // post data
  const handleSubmit = async () => {
    try {
      // alert when form is empty
      if (form === '') {
        Alert.alert('Form is empty', 'Please input your task', [{ text: 'OK' }]);
        return;
      }

      const body = {
        body: form,
      };
      await axios.post('https://todo-mobile-api.herokuapp.com/api/v1/task', body);

      setForm('');
      getAllTask();
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  // update status data
  const handleCheckButton = async (id) => {
    try {
      const body = {
        status: 'done',
      };
      await axios.patch(`https://todo-mobile-api.herokuapp.com/api/v1/task/${id}`, body);

      getAllTask();
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  // delete data
  const handleDeleteButton = async (id) => {
    try {
      await axios.delete(`https://todo-mobile-api.herokuapp.com/api/v1/task/${id}`);

      getAllTask();
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  // Edit data
  const handleEdit = async () => {
    try {
      // alert when form empty
      if (editForm.body === '') {
        Alert.alert('Form is empty', 'Please input your task', [{ text: 'OK' }]);
        return;
      }
      const id = editForm.id;
      const body = {
        body: editForm.body,
      };

      // update database
      await axios.patch(`https://todo-mobile-api.herokuapp.com/api/v1/task/${id}`, body);

      setModalVisible(false);
      getAllTask();
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };
  // show modal and get data
  const showModal = (value) => {
    setModalVisible(true);
    setEditForm(value);
  };
  // component list render
  const _renderItem = ({ item }) => {
    return (
      <Content
        //
        show={show}
        text={item.body}
        active={item.status === 'active' ? true : false}
        onPress={() => props.navigation.navigate('DetailTask', item)}
        onCheckPress={() => handleCheckButton(item.id)}
        onEditPress={() => showModal(item)}
        onDeletePress={() => handleDeleteButton(item.id)}
      />
    );
  };
  return (
    <View style={styles.container}>
      <ModalComp
        //
        isVisible={isModalVisible}
        closeBtn={() => setModalVisible(false)}
        saveBtn={handleEdit}
        value={editForm?.body}
        onChangeText={(text) =>
          setEditForm({
            ...editForm,
            body: text,
          })
        }
      />
      <Header value={form} onChangeText={(text) => setForm(text)} onPress={handleSubmit} onShowPress={() => setShow(!show)} />
      <View style={styles.wrapper}>
        {tasks.length > 0 ? (
          <FlatList data={tasks} keyExtractor={(item) => item.id.toString()} renderItem={_renderItem} refreshing={isLoading} onRefresh={getAllTask} nestedScrollEnabled />
        ) : (
          <FlatList
            //
            data={['There is no data']}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              return <Image source={require('../../assets/images/list2.png')} key={item} style={{ width: 400, height: 400, alignSelf: 'center', marginTop: 30 }} />;
            }}
            refreshing={isLoading}
            onRefresh={getAllTask}
            nestedScrollEnabled
          />
        )}
      </View>
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
  wrapper: {
    flex: 1,
    width: '100%',
  },
});
