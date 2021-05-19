/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {
  Text,
  ImageBackground,
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
    Keyboard.dismiss();
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

    let response = auth()
      .signInWithEmailAndPassword(UserName + '@test.com', password)
      .then(response => {
        return response;
      })
      .then(res => {
        console.log(res);
        console.log(res.uid);
        console.log(' signed in!');

        props.navigation.reset({
          index: 0,
          routes: [{name: 'UserScreen', params: {user: UserName}}],
        });
      })
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          console.log('Wrong password');
        }
        Keyboard.dismiss();
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
      });
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Color.bgColor,
        }}>
        <ImageBackground
          style={{
            flex: 1,
            opacity: 0.5,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          resizeMode="cover"
          source={require('../assets/bgimage.jpg')}
        />
        <View
          style={{
            width: '70%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Color.bgColor,
          }}>
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
