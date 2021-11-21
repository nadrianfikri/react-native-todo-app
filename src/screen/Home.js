import React, { useState, useEffect } from 'react';
import { API } from '../config';

import { StyleSheet, View, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../components/Header';
import Content from '../components/Content';

export default function Home() {
  const [form, setForm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Create Function to fetch
  const getAllTask = async () => {
    try {
      setIsLoading(true);
      const response = await API.get('/task');

      console.log(response);
      setTasks(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // Create LifeCycle
  useEffect(() => {
    getAllTask();
  }, []);

  // post data
  // const handleSubmit = () => {
  //   // const body = JSON.stringify(form);
  //   axios({
  //     url: 'http://localhost:5000/api/v1/task',
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     data: form,
  //   })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       //Network error comes in
  //       console.log(error);
  //     });
  // };

  const _renderItem = ({ item }) => {
    return <Content text={item.body} />;
  };
  console.log(form);
  return (
    <View style={styles.container}>
      <Header value={form} onChangeText={(text) => setForm(text)} onPress={'handleSubmit'} />
      <View style={{ width: '100%' }}>
        <FlatList data={tasks} keyExtractor={(item) => item.id.toString()} renderItem={_renderItem} refreshing={isLoading} onRefresh={getAllTask} />
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
});
