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
  import LongCard2 from "../components/LongCard2";

  const data = [
    {
      id: '1',
      title: 'Karim M. Nyumba',
    },
    {
      id: '2',
      title: 'Patrick Mamsery',
    },
    {
        id: '3',
        title: 'Shedrack Siame',
    },
    {
        id: '4',
        title: 'Valence Florence',
    },
];


  export default function Scores()
  {

    const renderItem = ({item}) => (
        <TouchableOpacity 
        style={styles.opacity}
        >
        <LongCard2 title={item.title} />
        </TouchableOpacity>
    );



    return(
        <View style={styles.mainContainer}>

        <View style={styles.userContainer}>
            
            <Image source={require('../resources/images/user.png')} style={styles.userimgStyle}/>
            <Text style={styles.userTxt}>Good Morning {'\n'} Glory</Text>
            <Image source={require('../resources/icons/message.png')} style={styles.usericonStyle}/>
        </View>

        <View style={styles.headerContainer}>
            <View style={styles.headerReferrals}>
            <Text style={styles.headerTxt}>You have Earned</Text>

            <View style={styles.greenTxtStyle}>
            <Text style={[styles.headerTxt,{color:'green'}]}>5,000</Text>
            <Text style={styles.headerTxt}>Scores</Text>
            </View>

            <View style={styles.greenTxtStyle}>
            <Text style={[styles.headerTxt,{color:'green'}]}>5</Text>
            <Text style={styles.headerTxt}>succesful referrals</Text>
            </View>

            </View>

            <View style={styles.headerIcons}>
                <Image source={require('../resources/icons/happiness.png')} style={{width:30,height:30,marginRight:10}}/>
                <Image source={require('../resources/icons/coin.png')} style={{width:30,height:30}}/>
            </View>
        </View>

        <View style={styles.bodyContainer}>
            <Text style={{color:'black',fontSize:16,paddingLeft:'5%',marginTop:10,fontWeight:'bold'}}>Successful referrals</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
                style={styles.pinStyle}
            />
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
      headerContainer:{
        flexDirection:'row',
        width:'100%',
        height:'10%',
        //backgroundColor:'lightblue',
        position:'absolute',
        top:'12%',
        justifyContent:'center',
        paddingLeft:'5%',
      },
      headerTxt:{
        color:'black',
        fontSize:16,
        fontWeight:'bold',
        paddingLeft:5,
      },
      headerReferrals:{
        width:'50%',
        height:'90%',
        //backgroundColor:'red',
        alignSelf:'center',
        position:'absolute',
        left:'5%',
      },
      headerIcons:{
        //backgroundColor:'yellow',
        flexDirection:'row',
        alignSelf:'center',
        position:'absolute',
        right:'5%',
        padding:'5%',
      },
      greenTxtStyle:{
        flexDirection:'row',
      },
      bodyContainer:{
        //backgroundColor:'orange',
        width:'100%',
        height:'65%',
        position:'absolute',
        top:'22%',
        justifyContent:'center',
      },
      opacity:{
        //backgroundColor:'green',
        marginVertical:'2%',
        marginHorizontal:'1%',
    },
  });