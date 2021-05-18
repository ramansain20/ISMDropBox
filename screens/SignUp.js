import React, {useState} from 'react';
import {
  Text,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import Color from '../constants/Color';
import UserInput from '../components/UserInput';
import MyButton from '../components/MyButton';
import auth from '@react-native-firebase/auth';

const SignUp = props => {
  const [admNo, setAdmNo] = useState('');
  const [UserName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const setAdmNoFun = input => {
    setAdmNo(input);
  };
  const setUserNameFun = input => {
    setUserName(input);
  };
  const setPasswordFun = input => {
    setPassword(input);
  };

  const signUpFunction = async () => {
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
    let response = await auth()
      .createUserWithEmailAndPassword(UserName, password)
      .then(() => {
        console.log('User account created & signed in!');
        props.navigation.reset({
          index: 0,
          routes: [
            {
              name: 'UserScreen',
            },
          ],
        });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
    if (!response) {
      throw new Error('something went wrong');
    }
    const resData = await response.json();
    console.log(resData);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <UserInput
          required
          keyboardType="email-address"
          label="Admission Number"
          onChangeText={setAdmNoFun}
          value={admNo}
          title="Admission Number"
        />
        <UserInput
          required
          keyboardType="email-address"
          label="E-Mail"
          title="Email"
          onChangeText={setUserNameFun}
          value={UserName}
          autoCapitalize="none"
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
        <MyButton title="SIGNUP" onPress={signUpFunction} />
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

export default SignUp;
