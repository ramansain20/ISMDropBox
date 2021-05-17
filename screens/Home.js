import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// eslint-disable-next-line no-unused-vars
import Color from '../constants/Color';
import MyButton from '../components/MyButton';
import MyText from '../components/MyText';
const Home = ({navigation}) => {
  return (
    <View style={styles.totalContainer}>
      <MyText text="ISMIssueResolver" />
      <View style={styles.btnContainer}>
        <MyButton title="LogIn" onPress={() => navigation.navigate('LogIn')} />
      </View>
      <View style={styles.btnContainer}>
        <MyButton
          title="SignUp"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
      <View style={styles.btnContainer}>
        <MyButton
          title="LogInAdmin"
          onPress={() => navigation.navigate('LogInAdmin')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  btnContainer: {
    marginVertical: 10,
    width: '80%',
    margin: 20,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 1,
    elevation: 10,
    borderRadius: 10,
  },
  totalContainer: {
    flex: 1,
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
