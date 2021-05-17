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
  const Stack = createStackNavigator();
  return (
    <NavigationContainer initialRoutName="Home">
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: Color.primaryColor},
          headerTintColor: Color.textColor,
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LogInAdmin" component={LogInAdmin} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="PastIssue" component={PastIssue} />
        <Stack.Screen name="CreateIssue" component={CreateIssue} />
        <Stack.Screen name="AdminScreen" component={AdminScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
