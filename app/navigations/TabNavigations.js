//contains how to put custom images as icons of bottom tab navigation
import  React from 'react';
import { StyleSheet,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Home from '../screens/home';
import Schedule from '../screens/schedule';
import Earn from '../screens/earn';
import BNPL from '../screens/bnpl';
const Tab = createBottomTabNavigator();

export default function TabNavigation()
{
    return(
    <Tab.Navigator
    screenOptions={{
    headerShown:false,
    tabBarStyle:{    
    position: 'absolute',
    left:'5%',
    flex:1,
    width:'90%',
    height:'8%',
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    borderRadius:25,
    paddingBottom:'2%',
    paddingTop:'1%',
    marginBottom:'3%',
    backgroundColor:'rgba(255,255,255,1)',
  },
  }}>
    <Tab.Screen 
    name="Home" 
    component={Home}
    options = {{
        tabBarIcon : ({size,focused,color}) => {
            return(
                <Image 
                style={{width:size,height:size}}
                source={require('../resources/icons/clipboard.png')}/>
            );
        }
    }}
     />


    <Tab.Screen
     name="Schedule"
      component={Schedule}
      options = {{
        tabBarIcon : ({size,focused,color}) => {
            return(
                <Image 
                style={{width:size,height:size}}
                source={require('../resources/icons/coin.png')}/>
            );
        }
    }} />

    <Tab.Screen
     name="Refer & Earn"
      component={Earn}
      options = {{
        tabBarIcon : ({size,focused,color}) => {
            return(
                <Image 
                style={{width:size,height:size}}
                source={require('../resources/icons/cash.png')}/>
            );
        }
    }}
       />
    <Tab.Screen 
    name="BNPL"
     component={BNPL} 
     options = {{
        tabBarIcon : ({size,focused,color}) => {
            return(
                <Image 
                style={{width:size,height:size}}
                source={require('../resources/icons/more.png')}/>
            );
        }
    }}
     />
  </Tab.Navigator>
    )
};

const styles = StyleSheet.create({
  bottomTabStyle:{
    position: 'absolute',
    width:'90%',
    justifyContent:'center',
  },

})