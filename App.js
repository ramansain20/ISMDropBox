import React, {useState} from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LogIn from './screens/logIn';
import Home from './screens/Home';
import SignUp from './screens/SignUp';
import LogInAdmin from './screens/LogInAdmin';
import UserScreen from './screens/userScreen';
import Color from './constants/Color';
import CreateIssue from './screens/createIssue';
import PastIssue from './screens/pastIssue';
import auth from '@react-native-firebase/auth';
import AdminScreen from './screens/AdminScreen';

const App = ({navigation}) => {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  const Stack = createStackNavigator();
  return (
    <NavigationContainer initialRoutName="Home">
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: Color.primaryColor},
          headerTintColor: Color.textColor,
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen
          name="LogInAdmin"
          component={LogInAdmin}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen
          name="PastIssue"
          component={PastIssue}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen
          name="CreateIssue"
          component={CreateIssue}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen
          name="AdminScreen"
          component={AdminScreen}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
