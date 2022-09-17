import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    FlatList,
    TouchableOpacity,
  } from 'react-native';

  export default function Home()
  {
    return(
        <View style={styles.mainContainer}>

        <View style={styles.userContainer}>
            
            <Image source={require('../resources/images/user.png')} style={styles.userimgStyle}/>
            <Text style={styles.userTxt}>Good Morning {'\n'} Glory</Text>
            <Image source={require('../resources/icons/message.png')} style={styles.usericonStyle}/>
        </View>

        <View style={styles.menuContainer}>
            <View style={styles.menuItemsContainer}>
            <TouchableOpacity >
            <Text style={{color:'white'}}>ACCOUNTS</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={{color:'white'}}>CARDS</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={{color:'white'}}>LOANS</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={{color:'white'}}>PLAN</Text>
            </TouchableOpacity>
            </View>
        </View>

        <View style={styles.bodyContainer}>
            <View style={styles.contentContainer}>
                <Text style={styles.contentHeader1}>Total Amount</Text>
                <Text style={styles.contentTxt}>Available</Text>
                <Text style={styles.contentTxt}>TZS 1,0000,000</Text>
                <Text style={styles.contentHeader2}>Current Plan</Text>
                <Text style={styles.contentTxt}>TZS 2,0000,000</Text>
            </View>
        </View>

        </View>

);
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        width:'100%',
        height:Dimensions.get('screen').height,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    userContainer:{
        flex:1,
        flexDirection:'row',
        width:'100%',
        height:'10%',
        position:'absolute',
        top:'2%',
        //backgroundColor:'red',
        alignItems:'center',
        paddingLeft:'2%',
    },
    userimgStyle:{
        width:70,
         height:70,
         borderRadius:35,
    },
    userTxt:{
        color:'black',
        marginLeft:'5%',
        fontSize:18,
    },
    usericonStyle:{
        width:30,
        height:30,
        position:'absolute',
        right:'10%',
        
      },
      menuContainer:{
        flex:1,
        flexDirection:'row',
        width:'100%',
        height:'15%',
        //backgroundColor:'blue',
        position:'absolute',
        top:'12%',
        justifyContent:'space-evenly',
        alignItems:'center',
      },
      menuItemsContainer:{
        flexDirection:'row',
        backgroundColor:'black',
        width:'90%',
        height:'50%',
        borderRadius:30,
        alignSelf:'center',
        justifyContent:'space-evenly',
        alignItems:'center',
      },
      bodyContainer:{
        //backgroundColor:'orange',
        width:'100%',
        height:'60%',
        position:'absolute',
        top:'27%',
        justifyContent:'center',
      },
      contentContainer:{
            alignSelf:'center',
            //backgroundColor:'yellow',
            width:250,
            height:250,
            borderRadius:175,
            alignItems:'center',
            justifyContent:'center',
            borderColor:'#3AAF4A',
            borderWidth:5,
            shadowColor:'#000000',
            shadowOffset:{
                width:10,
                height:10,
            },
            shadowRadius:7,
            shadowOpacity:1.0,

      },
      contentTxt:{
        color:'black',
        textAlign:'center',
      },
      contentHeader1:{
        color:'black',
        textAlign:'center',
        fontWeight:'bold',
      },
      contentHeader2:{
        color:'black',
        textAlign:'center',
        fontWeight:'bold',
        marginTop:'20%',
      },
  });