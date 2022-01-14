import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import { View, StyleSheet, ScrollView,Image, Text,Pressable,Alert, TouchableHighlight, TouchableOpacity, Button, FlatList } from 'react-native';
import Modal from "react-native-modal";
import {Card} from 'react-native-shadow-cards';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import  AntIcon  from 'react-native-vector-icons/AntDesign';

const index = ({navigation,route}) => {
    if(navigation===undefined)
        navigation=useNavigation();
    const headerValue=route?.params.header;

    const data=[
                    {name:"Faizan Muhammad",gender:"male",fees:"15000",location:"Lahore",verified:true},
                    {name:"Faraz Ali",gender:"male",fees:"18000",location:"Karachi",verified:true},
                    {name:"Mehroz Muzaffar",gender:"female",fees:"13000",location:"Quetta",verified:true},
                    {name:"Gul Sher Khan",gender:"male",fees:"10000",location:"Okara",verified:true},
                    {name:"Ahsan Mehmood",gender:"female",fees:"14000",location:"Multan",verified:true},
                    {name:"Kashif Tariq",gender:"male",fees:"17000",location:"Gilgit",verified:true},
                    {name:"Kashif Tariq",gender:"male",fees:"17000",location:"Gilgit",verified:true},
                    {name:"Kashif Tariq",gender:"male",fees:"17000",location:"Gilgit",verified:true},
                    {name:"Kashif Tariq",gender:"male",fees:"17000",location:"Gilgit"},
                    {name:"Kashif Tariq",gender:"male",fees:"17000",location:"Gilgit"},
                    {name:"Kashif Tariq",gender:"male",fees:"17000",location:"Gilgit"},
                    {name:"Kashif Tariq",gender:"male",fees:"17000",location:"Gilgit"},
                    {name:"Kashif Tariq",gender:"male",fees:"17000",location:"Gilgit"},
               ]

    function designItem({item}) {
        //   height parent view is set according to the height of image which is fixed, and other things settle down
        // return  
            return <TouchableOpacity  style={{flexDirection:'row',marginBottom:10,}} onPress={()=>navigation.navigate("UserDetails")}>
                <Card style={{margin:2,padding:2,alignSelf:'center', flexDirection:'row',}} elevation={10}>
                   <Image borderRadius={50} source={require('../../res/images/me.png')} style={{height:70,width:70}}/>
                {/*Now I want to split this view into further 2 rows of equal space, both will be sum parent height which is according to image height*/}
                    <View style={{flex:1}}>
                        <View style={{flex:1,}}>
                                <Text numberOfLines={1} style={{flex:1,textAlign:'center',textAlignVertical:'center',color:'black',fontSize:16}}>{item.name}</Text>
                        </View>
                        <View style={{flex:1}}>
                                <View style={{flexWrap:'wrap',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
                                    <Text style={{textAlign:'center',textAlignVertical:'center',backgroundColor:'maroon',color:'white',borderRadius:15,padding:4,paddingHorizontal:8}}>Fees: Rs.{item.fees}</Text>
                                    <Icon name={item.gender} color="maroon" size={20}></Icon>
                                    {item.verified==true?<Text style={{textAlign:'center',textAlignVertical:'center',borderRadius:15,padding:6,backgroundColor:'maroon',color:'white',}}>verified</Text>:null}
                                </View>
                        </View>
                    </View>
               </Card>
            </TouchableOpacity>
            
    }

    return  <View style={styles.Container}>
                {headerValue==true?
                <Card style={styles.HeaderCard} elevation={35}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}><AntIcon name="back" size={35} color="maroon"></AntIcon></TouchableOpacity>
                    <Text style={{fontSize:18,textAlign:'center',textAlignVertical:'center',color:'maroon',flex:1}}>Search Result</Text>                    
                </Card>:null}                
                <FlatList
                data={data}
                renderItem={designItem}
                ></FlatList>
            </View>;
}


const styles=StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'white',
        padding:10,
    },
    HeaderCard:{
        margin:10,
        padding:3,
        alignSelf:'center',
        flexDirection:'row'
    }
})




export default index;