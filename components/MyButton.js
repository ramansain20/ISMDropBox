import React from 'react';
// eslint-disable-next-line no-unused-vars
import {StyleSheet, View, Button, Text} from 'react-native';
import Color from '../constants/Color';

const MyButton = props => {
  return (
    <Button
      styles={[{...props.style}, styles.btn]}
      title={props.title}
      color={Color.primaryColor}
      onPress={props.onPress}
    />
  );
};

const styles = StyleSheet.create({
  btn: {
    marginVertical: 8,
    borderRadius: 4,
    width: '100%',
  },
});
export default MyButton;
