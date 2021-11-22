import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

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
      const data = response.data.data;
      data.timeCreate = new Date(data.createdAt).toLocaleTimeString('en-GB');
      data.timeUpdate = new Date(data.updatedAt).toLocaleTimeString('en-GB');
      data.createdAt = new Date(data.createdAt).toDateString('en-GB').substring(4);
      data.updatedAt = new Date(data.updatedAt).toDateString('en-GB').substring(4);

      setDetail(data);
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
      setIsLoading(false);
    }
  };
  // console.log(new Date().toTimeString());
  useEffect(() => {
    getDetail();
  }, []);

  return (
    <ImageBackground source={require('../../assets/images/bg-mobile-dark.jpg')} resizeMode="cover" style={styles.container}>
      <View style={styles.wrapper}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.text}>I'm doing</Text>
          <Text style={styles.textContent}>{detail.body}</Text>
        </View>

        <View style={styles.row}>
          <View style={{ ...styles.box, borderRightWidth: 2, borderBottomWidth: 2, borderRadius: 10, borderColor: 'gray' }}>
            <View style={{ alignSelf: 'center' }}>
              <Text style={{ ...styles.textMain, alignSelf: 'center' }}>{detail.timeCreate}</Text>
              <Text style={{ ...styles.text, alignSelf: 'center' }}>{detail.createdAt}</Text>
            </View>
            <View>
              <Text style={styles.title}>Start At</Text>
            </View>
          </View>

          {/* right side */}
          <View style={{ ...styles.box, borderLeftWidth: 2, borderBottomWidth: 2, borderRadius: 10, borderColor: 'gray' }}>
            <View style={{ alignSelf: 'center' }}>
              {detail.status === 'done' ? (
                <>
                  <Text style={{ ...styles.textMain, alignSelf: 'center', color: 'hsl(192, 100%, 67%)' }}>{detail.timeUpdate}</Text>
                  <Text style={{ ...styles.text, alignSelf: 'center', color: 'hsl(192, 100%, 67%)' }}>{detail.updatedAt}</Text>
                </>
              ) : (
                <Text style={{ ...styles.textMain, alignSelf: 'center', color: 'hsl(192, 100%, 67%)' }}>Running</Text>
              )}
            </View>
            <View style={{ alignSelf: 'flex-end' }}>
              <Text style={styles.title}>Finished At</Text>
            </View>
          </View>
        </View>
        <Image source={require('../../assets/images/run.png')} style={{ width: 500, height: 500, alignSelf: 'center' }} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'hsl(235, 21%, 11%)',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  wrapper: {
    flex: 1,
    padding: 15,
    width: '100%',
    backgroundColor: 'hsl(235, 24%, 19%)',
    borderRadius: 20,
  },
  text: {
    color: 'hsl(234, 39%, 85%)',
  },
  title: {
    color: 'hsl(234, 11%, 52%)',
    fontSize: 18,
    marginBottom: 5,
  },
  textMain: {
    color: 'hsl(234, 39%, 85%)',
    fontSize: 30,
  },
  textContent: {
    color: 'hsl(234, 39%, 85%)',
    fontSize: 45,
  },

  row: {
    flexDirection: 'row',
    width: '100%',
  },
  box: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    width: '100%',
    height: 110,
    padding: 5,
    margin: 4,
  },
  left: {},
  right: {
    borderLeftWidth: 2,
    borderRadius: 10,
    borderColor: 'gray',
  },
});
