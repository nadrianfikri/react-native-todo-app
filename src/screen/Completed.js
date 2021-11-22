import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, View, FlatList, Alert, Image } from 'react-native';
import Header from '../components/Header';
import Content from '../components/Content';

export default function Completed(props) {
  const [form, setForm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Create LifeCycle
  useEffect(() => {
    getAllTask();
  }, []);

  // Create Function get data from api
  const getAllTask = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://192.168.43.203:5000/api/v1/task/status/done');

      setTasks(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  // post data
  const handleSubmit = async () => {
    try {
      // alert when form empty
      if (form === '') {
        Alert.alert('Form is empty', 'Please input your task', [{ text: 'OK' }]);
        return;
      }

      const body = {
        body: form,
      };
      await axios.post('http://192.168.43.203:5000/api/v1/task', body);

      setForm('');
      getAllTask();
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  // delete data
  const handleDeleteButton = async (id) => {
    try {
      await axios.delete(`http://192.168.43.203:5000/api/v1/task/${id}`);

      getAllTask();
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  // component list render
  const _renderItem = ({ item }) => {
    return (
      <Content
        //
        show={show}
        text={item.body}
        onPress={() => props.navigation.navigate('DetailTask', item)}
        onDeletePress={() => handleDeleteButton(item.id)}
      />
    );
  };

  return (
    <View style={styles.container}>
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
