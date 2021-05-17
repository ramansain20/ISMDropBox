import React from 'react';
// eslint-disable-next-line no-unused-vars
import {StyleSheet, View, Button, Text} from 'react-native';
import Color from '../constants/Color';

const MyText = props => {
  return (
    <View>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Color.textColor,
    fontSize: 30,
    fontWeight: '100',
  },
});
export default MyText;
