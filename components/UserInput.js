import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import Color from '../constants/Color';

const UserInput = props => {
  return (
    <TextInput
      {...props}
      value={props.value}
      style={[props.style, styles.input]}
      onInputText={() => {
        props.onChangeText;
      }}
      placeholder={props.title}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '70%',
    margin: 12,
    borderWidth: 1,
    borderColor: Color.primaryColor,
    borderRadius: 10,
  },
});
export default UserInput;
