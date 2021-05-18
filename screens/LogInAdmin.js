import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
  Keyboard,
} from 'react-native';
import MyButton from '../components/MyButton';

import Color from '../constants/Color';
import auth from '@react-native-firebase/auth';

const LogInAdmin = props => {
  const [password, setPassword] = useState('');
  const setPasswordFun = input => {
    setPassword(input);
  };
  const loginFunction = async () => {
    if (!password) {
      Alert.alert('Invalid Password', 'Please Check Password', {
        text: 'Cancel',
        style: 'cancel',
      });
      return;
    }
    let response = await auth()
      .signInWithEmailAndPassword('admin@admin.com', password)
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
              name: 'AdminScreen',
            },
          ],
        });
      })
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          console.log('Wrong password');
        }
        Keyboard.dismiss();
        Alert.alert('Invalid  Password', 'Please Enter Valid  Password', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ]);
      });
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: Color.bgColor,
        }}>
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

export default LogInAdmin;
