import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './app/screens/login';
import SignUp from './app/screens/signup';
import Home from './app/screens/home';
import Navigation from './app/navigations/Navigation';

function App()  {
  return (
    //<Login/>
    //<Home/>
    <Navigation/>
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
