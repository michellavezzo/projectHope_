import React, { Fragment } from 'react'; // funcs 

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/Screens/Login';
import PasswordResetScreen from './src/Screens/PasswordReset';
import CreateAccountScreen from './src/Screens/CreateAccount';


const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="Login" component={ LoginScreen } />
        <Stack.Screen name="PasswordReset" component={ PasswordResetScreen } />
        <Stack.Screen name="CreateAccount" component={ CreateAccountScreen } />
      </Stack.Navigator>
    </NavigationContainer>
    
  )


}