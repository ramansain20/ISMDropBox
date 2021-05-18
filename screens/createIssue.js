/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
// eslint-disable-next-line no-unused-vars
import {StyleSheet, View, Alert, TextInput, Button, Text} from 'react-native';
import Color from '../constants/Color';
import UserInput from '../components/UserInput';
import MyButton from '../components/MyButton';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import auth from '@react-native-firebase/auth';
import {set} from 'react-native-reanimated';

const CreateIssue = props => {
  const [issue, setIssue] = useState('');
  const setIssueFunction = input => {
    setIssue(input);
  };
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
  const sendIssue = () => {
    if (!issue) {
      Alert.alert('Sorry!!', "Content Can't Be Empty", [
        {text: 'Cancel', style: 'cancel'},
      ]);
      return;
    }
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
    const db = firebase.database();
    db.ref('users/20je0772').set({
      name: 'issue',
      value: issue,
    });
    setIssue('');
  };
  return (
    <View
      style={{
        backgroundColor: Color.bgColor,
        padding: 10,
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <MyButton
        style={{marginVertical: 10}}
        title="Sign out"
        onPress={signOut}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '100%',
            height: '20%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <UserInput
            multiline
            numberOfLines={4}
            style={styles.input}
            title="Tell Us Your Problem"
            onChangeText={setIssueFunction}
            value={issue}
          />
        </View>
        <MyButton title="ADD" onPress={sendIssue} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingRight: 15,
    lineHeight: 23,
    flex: 2,
    textAlignVertical: 'top',
    height: '5%',
  },
});
export default CreateIssue;
