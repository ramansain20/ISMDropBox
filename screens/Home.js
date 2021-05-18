import React, {useRef} from 'react';
import {StyleSheet, Animated, Text, View} from 'react-native';
// eslint-disable-next-line no-unused-vars
import Color from '../constants/Color';
import MyButton from '../components/MyButton';
import MyText from '../components/MyText';
const Home = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  fadeIn();
  return (
    <View style={styles.totalContainer}>
      <View style={styles.upper}>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim,
            },
          ]}>
          <MyText style={{padding: 20}} text="ISMDropBox" />
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
            title="LogInAdmin"
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
    flex: 1,
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upper: {
    flex: 2,
  },
  lower: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});

export default Home;
