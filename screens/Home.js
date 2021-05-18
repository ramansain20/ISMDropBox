/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {StyleSheet, Animated, Text, View, ImageBackground} from 'react-native';
// eslint-disable-next-line no-unused-vars
import Color from '../constants/Color';
import MyButton from '../components/MyButton';
import MyText from '../components/MyText';
const Home = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 0.7,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  fadeIn();
  return (
    <View style={styles.totalContainer}>
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
      <View style={styles.upper}>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim,
            },
          ]}>
          <MyText
            style={{padding: 20, fontFamily: 'PTSerif-Bold'}}
            text="ISM-DropBox"
          />
        </Animated.View>
      </View>
      <View style={styles.lower}>
        <View style={styles.btnContainer}>
          <MyButton
            title="LogIn"
            onPress={() => navigation.navigate('LogIn')}
          />
        </View>
        <View style={styles.btnContainer}>
          <MyButton
            title="SignUp"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
        <View style={styles.btnContainer}>
          <MyButton
            title="Admin Login"
            onPress={() => navigation.navigate('LogInAdmin')}
          />
        </View>
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
    backgroundColor: '#fdbaf8',
    flex: 1,
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upper: {
    flex: 1,
  },
  lower: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});

export default Home;
