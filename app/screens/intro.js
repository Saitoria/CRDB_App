//This is the First page screen
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
  } from 'react-native';
import CustomButton from "../components/CustomButton";


  export default function Intro({navigation})
  {
    return(
        <View style={styles.mainContainer}>

            <View style={styles.logoContainer}>
                <Image source={require('../resources/images/logo.png')} style={styles.imgStyle}/>
            </View>

            <View style={styles.lowerContainer}>
            <TouchableOpacity 
            style={styles.opacity1Container}
            onPress={() => navigation.navigate('Login')}
            >
            <CustomButton title={'Login'}/>
            </TouchableOpacity>

            <TouchableOpacity
             style={styles.opacity2Container}
             onPress={() => navigation.navigate('SignUp')}
             >
            <CustomButton title={'Create Account'}/>
            </TouchableOpacity>

            </View>

        

        </View>
    );
  }

  const styles =  StyleSheet.create({
    mainContainer:{
        flex:1,
        width:'100%',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',

    },
    logoContainer:{
        width:'100%',
        height:'30%',
        position:'absolute',
        top:'10%',
        //backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
    },
    imgStyle:{
        width:'70%',
         height:'70%',
    },
    lowerContainer:{
        width:'100%',
        height:'70%',
        //backgroundColor:'yellow',
        position:'absolute',
        top:'40%',
        justifyContent:'center',
        //alignItems:'center',
    },
    opacity1Container:{
        width:'35%',
        height:'12%',
        position:'absolute',
        top:'10%',
        marginTop:'1%',
        //backgroundColor:'red',
        alignSelf:'center',
    },
    opacity2Container:{
        width:'35%',
        height:'12%',
        position:'absolute',
        top:'30%',
        marginTop:'1%',
        //backgroundColor:'red',
        alignSelf:'center',
    }
  });