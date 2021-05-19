import React, {useEffect, useState} from 'react';
// eslint-disable-next-line no-unused-vars
import {
  StyleSheet,
  View,
  Button,
  FlatList,
  Item,
  Text,
  ScrollView,
} from 'react-native';
import Color from '../constants/Color';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/storage';
import auth from '@react-native-firebase/auth';
import MyText from '../components/MyText';
import MyButton from '../components/MyButton';

const PastIssue = props => {
  const [data, setData] = useState([]);
  const [key, setKey] = useState([]);
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
      .ref('/IITISM/' + props.route.params.user.user)
      .once('value', function (snapshot) {
        setData(Object.values(snapshot.val()));
        setKey(Object.keys(snapshot.val()));
      });

    // const deleteIssue = input => {
    //   const firebaseConfig = {
    //     apiKey: 'AIzaSyBVT72lzALCKJcFZ8D2Thh0RMb760gtYYw',
    //     authDomain: 'ismissueresolver.firebaseapp.com',
    //     databaseURL:
    //       'https://ismissueresolver-default-rtdb.asia-southeast1.firebasedatabase.app',
    //     projectId: 'ismissueresolver',
    //     storageBucket: 'ismissueresolver.appspot.com',
    //     messagingSenderId: '1058767353545',
    //     appId: '1:1058767353545:web:8f8af907029e3f1650bf18',
    //     measurementId: 'G-VFC20B8RDV',
    //   };
    //   if (!firebase.apps.length) {
    //     firebase.initializeApp(firebaseConfig);
    //   }
    //   firebase
    //     .database()
    //     .ref('IITISM/20JE0782/' + input)
    //     .remove();
    // };
    // const KeyReturn = input => {
    //   var a = data.indexOf(input.index);
    //   return <Button title="Delete" onPress={deleteIssue.bind(key[a])} />;
    // };
  });
  return (
    <View style={styles.container}>
      <View style={styles.issueContainer}>
        <FlatList
          numColumns={2}
          data={data}
          renderItem={itemData => (
            <View styles={styles.gridItems}>
              <Text style={styles.text}>{itemData.item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={{flex: 1, padding: 10}}>
        <MyButton title="Sign out" onPress={signOut} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    backgroundColor: '#eca3f5',
    padding: 20,
    margin: 10,
    color: Color.textColor,
    fontSize: 30,
    fontWeight: '100',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  issueContainer: {
    flex: 6,
    width: '80%',
    borderRadius: 20,
  },
  gridItems: {
    flex: 1,
    margin: 15,
    height: '25%',
    borderRadius: 10,
  },
});
export default PastIssue;
