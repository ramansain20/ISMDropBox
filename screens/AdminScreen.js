import React, {useState} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import MyButton from '../components/MyButton';
import Color from '../constants/Color';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/storage';

const AdminScreen = props => {
  const [students, setStudents] = useState([]);
  const studentScreen = input => {
    props.navigation.navigate('StudentScreen', {student: input});
  };
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
    .ref('/IITISM')
    .once('value', function (snapshot) {
      console.log(snapshot.val());
      setStudents(Object.keys(snapshot.val()));
      console.log(students);
    });

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
  return (
    <View style={{flex: 1, backgroundColor: Color.bgColor}}>
      <View style={styles.container}>
        <MyButton title="Sign out" onPress={signOut} />
      </View>
      <View
        style={{
          flex: 10,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <FlatList
          numColumns={2}
          data={students}
          renderItem={itemData => (
            <View styles={styles.studentContainer}>
              <MyButton
                onPress={studentScreen.bind(itemData.item)}
                style={styles.text}
                title={itemData.item}
              />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btncontainer: {
    flex: 1,
    padding: 10,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: 5,
    backgroundColor: Color.bgColor,
    flex: 1,
    alignItems: 'flex-end',
  },
  studentContainer: {
    marginHorizontal: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default AdminScreen;
