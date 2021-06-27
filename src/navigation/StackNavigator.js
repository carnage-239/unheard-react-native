import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/LoginScreen/Login';
import Signup from '../screens/SignupScreen/Signup';
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
