import React from 'react';
// eslint-disable-next-line no-unused-vars
import {StyleSheet, View, Button, FlatList, Item, Text} from 'react-native';
import Color from '../constants/Color';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import auth from '@react-native-firebase/auth';
import MyText from '../components/MyText';
import MyButton from '../components/MyButton';

const PastIssue = props => {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    props.navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Home',
        },
      ],
    });
  };
  let res = [];
  let DATA = [];
  let KEY = [];
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
    .ref('/IITISM/20JE0782')
    .once('value', function (snapshot) {
      res = snapshot.val();
      console.log(res);
      DATA = Object.values(res);
      KEY = Object.keys(res);
      console.log(DATA);
      console.log(Array.isArray(DATA));
      console.log(KEY);
    });

  return (
    <View style={styles.container}>
      <Text>hiii</Text>
      <Text color="black">{DATA[0]}hii</Text>
      {/* {DATA.map(data => (
        <Text style={styles.text}>{data}</Text>
      ))} */}

      <View>
        <MyButton title="Sign out" onPress={signOut} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: Color.textColor,
    fontSize: 30,
    fontWeight: '100',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default PastIssue;
