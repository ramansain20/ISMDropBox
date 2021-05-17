import React from 'react';
// eslint-disable-next-line no-unused-vars
import {StyleSheet, View, Button, Text} from 'react-native';
import MyButton from '../components/MyButton';
import Color from '../constants/Color';
import auth from '@react-native-firebase/auth';

const UserScreen = props => {
  const goToCreateIssue = () => {
    props.navigation.navigate('CreateIssue');
  };
  const goToPastIssue = () => {
    props.navigation.navigate('PastIssue');
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

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.btn}>
        <MyButton title="Create Issue" onPress={goToCreateIssue} />
      </View>
      <View style={styles.btn}>
        <MyButton title="Past Issue" onPress={goToPastIssue} />
      </View>
      <View>
        <MyButton title="Sign out" onPress={signOut} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  btn: {
    marginVertical: 20,
    width: '60%',
    margin: 30,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 1,
    elevation: 10,
    borderRadius: 10,
  },
});
export default UserScreen;
