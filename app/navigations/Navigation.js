import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import Intro from '../screens/intro';
import Login from '../screens/login';
import SignUp from '../screens/signup';
import TabNavigation from './TabNavigations';
//import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();


export default function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} /> 

      {/* <Stack.Screen name="Home" component={Home} />*/}

    </Stack.Navigator>
    </NavigationContainer>
  );
}