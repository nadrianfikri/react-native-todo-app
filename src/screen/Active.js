import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { StyleSheet, View, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';
import Content from '../components/Content';

export default function Active() {
  const [form, setForm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Create LifeCycle
  useEffect(() => {
    getAllTask();
  }, []);

  // Create Function to fetch
  const getAllTask = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://192.168.43.203:5000/api/v1/task/active');

      setTasks(response.data.data);
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
      console.log(error);
      setIsLoading(false);
    }
  };

  // component list render
  const _renderItem = ({ item }) => {
    return <Content text={item.body} />;
  };

  return (
    <View style={styles.container}>
      <Header value={form} onChangeText={(text) => setForm(text)} />
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
