import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function DetailTask(props) {
  // init params
  const id = props.route.params.id;
  const status = props.route.params.status;
  //   init state
  const [isLoading, setIsLoading] = useState(false);
  const [detail, setDetail] = useState([]);

  //   create function get data from api
  const getDetail = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://192.168.43.203:5000/api/v1/task/${id}`);
      //   console.log(response.data.data);
      setDetail(response.data.data);
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getDetail();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.teks}>{detail.id}</Text>
      <Text style={styles.teks}>{detail.body}</Text>
      <Text style={styles.teks}>{detail.createdAt}</Text>
      <Text style={styles.teks}>{detail.status}</Text>
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
  teks: {
    color: 'white',
  },
});
