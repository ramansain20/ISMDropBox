/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  Text,
  Alert,
  Keyboard,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import Color from '../constants/Color';
import UserInput from '../components/UserInput';
import MyButton from '../components/MyButton';
import MyText from '../components/MyText';
import auth from '@react-native-firebase/auth';
import {exp} from 'react-native/Libraries/Animated/Easing';

const LogIn = props => {
  const [UserName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const setUserNameFun = input => {
    setUserName(input);
  };
  const setPasswordFun = input => {
    setPassword(input);
  };
  const loginFunction = async () => {
    if (!UserName || !password) {
      Alert.alert(
        'Invalid User Name Or Password',
        'Please Enter Valid User Name Or Password',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ],
      );
      return;
    }
    let response = await auth()
      .signInWithEmailAndPassword(UserName, password)
      .then(response => {
        // console.log(response);
        // const resData = response.text();
        // console.log(resData);
        return JSON.parse('"' + response + '"');
      })
      .then(res => {
        console.log(res);
        console.log(' signed in!');

        props.navigation.reset({
          index: 0,
          routes: [
            {
              name: 'UserScreen',
            },
          ],
        });
      });
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <UserInput
          label="User Name"
          required
          title="UserName"
          onChangeText={setUserNameFun}
          value={UserName}
        />
        <TextInput
          required
          label="Password"
          onChangeText={setPasswordFun}
          value={password}
          style={styles.textArea}
          placeholder="Password"
          secureTextEntry={true}
        />
        <MyButton title="LOGIN" onPress={loginFunction} />
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  textArea: {
    height: 40,
    width: '70%',
    margin: 12,
    borderWidth: 1,
    borderColor: Color.primaryColor,
    borderRadius: 10,
  },
});
export default LogIn;
