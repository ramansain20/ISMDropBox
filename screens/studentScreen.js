import React, {useState, useEffect} from 'react';
// eslint-disable-next-line no-unused-vars
import {StyleSheet, FlatList, View, Button, Text} from 'react-native';
import MyButton from '../components/MyButton';
import Color from '../constants/Color';
import auth from '@react-native-firebase/auth';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/storage';

const StudentScreen = props => {
  const [issues, setIssues] = useState([]);
  console.log(props.route.params.student);
  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyBVT72lzALCKJcFZ8D2Thh0RMb760gtYYw',
      authDomain: 'ismissueresolver.firebaseapp.com',
      databaseURL:
        'https://ismissueresolver-default-rtdb.asia-southeast1.firebasedatabase.app',
      projectId: 'ismissueresolver',
      storageBucket: 'ismissueresolver.appspot.com',
      messagingSenderId: '1058767353545',
      appId: '1:1058767353545:web:8f8af907029e3f1650bf18',
      measurementId: 'G-VFC20B8RDV',
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase
      .database()
      .ref('/IITISM' + props.route.params.student.student)
      .once('value', function (snapshot) {
        console.log(snapshot.val());
      });
  });
  return (
    <View>
      <Text>hi</Text>
      <FlatList
        data={issues}
        renderItem={itemData => (
          <View styles={styles.gridItems}>
            <Text style={styles.text}>{itemData.item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default StudentScreen;
