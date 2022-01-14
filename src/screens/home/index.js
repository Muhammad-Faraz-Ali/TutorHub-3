import React from 'react';
import { View,StyleSheet,Dimensions,Text,Image, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import  AntDesignIcon  from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import  MaterialIcon  from 'react-native-vector-icons/MaterialCommunityIcons';
import UserAvatar from 'react-native-user-avatar';
import {Card} from 'react-native-shadow-cards';


const index = ({navigation}) => {
    const Height=Dimensions.get("screen").height
    const Width=Dimensions.get("screen").width

    return <View style={styles.container}>
        <ScrollView>
        <View style={styles.background}></View> 
        <View style={styles.contentContainer}>

            <View style={styles.notifyButton}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>navigation.getParent().navigate("Authentication")}><AntDesignIcon size={30} color="maroon" name="logout" /></TouchableOpacity>
                </View>
                <TouchableOpacity style={{flexDirection:'row-reverse',}} onPress={()=>navigation.getParent().navigate("Notification")}>
                    <Text style={{color:'white',fontWeight:'bold',padding:3,marginBottom:4,backgroundColor:"maroon",borderRadius:8,height:'40%',left:20,zIndex:2,}}>9+</Text>
                    <Ionicons style={{marginRight:0,}} size={40} color="maroon" name="notifications-outline" />
                </TouchableOpacity>
            </View>

            
            <View style={{height:'20%'}}>
                <View style={{alignSelf:'center',borderRadius:50,height:100,width:100,backgroundColor:'purple',elevation:16}}>
                    <TouchableOpacity>
                        <Image borderRadius={50} source={require('../../res/images/me.png')} style={{height:100,width:100,}}/>
                    </TouchableOpacity>
                </View>
                <Icon style={{alignSelf:'center',bottom:30,left:30,elevation:16,zIndex:2}} size={30} color="maroon" name="camera" onPress={()=>{alert("Camera clicked")}}/>
            </View>

            <TouchableOpacity style={{height:'20%'}}>
                <View>
                    <Card style={{alignSelf:'center',flexDirection:'row',backgroundColor:'pink',justifyContent:'center',padding:10,}} elevation={20} cornerRadius={20} opacity={0.2}>
                        <Text numberOfLines={1} style={{marginHorizontal:15}}>
                            Faizan Muhammad
                        </Text>
                        <Icon style={{left:0}} size={24} color="maroon" name="eraser" />
                    </Card>
                </View>    
            </TouchableOpacity>


            <TouchableOpacity style={{height:'10%',marginTop:10,elevation:16}} onPress={()=>navigation.navigate("TeacherAccount")}>
                
                    <View style={{height:'100%',width:'60%',alignSelf:'center',backgroundColor:"maroon",borderTopRightRadius:20,borderBottomLeftRadius:20,justifyContent:"center",alignItems:"center",elevation:16,marginTop:0}}>
                    <Text style={{color:"white",fontSize:16}}>Teacher</Text>
                    <Text style={{color:"white",fontSize:16}}>Account</Text>
                    </View>
                    
            </TouchableOpacity>


            <TouchableOpacity style={{height:'10%',marginTop:10,elevation:16}} onPress={()=>navigation.navigate("StudentAccount")}>
                
                    <View style={{height:'100%',width:'60%',alignSelf:'center',backgroundColor:"maroon",borderTopLeftRadius:20,borderBottomRightRadius:20,justifyContent:"center",alignItems:"center",elevation:20,marginTop:0}}>
                        <Text style={{color:"white",fontSize:16,}}>Student</Text>
                        <Text style={{color:"white",fontSize:16,}}>Account</Text>
                    </View>
            </TouchableOpacity>
        </View>     
        </ScrollView>     
    </View>;
}

const styles=StyleSheet.create({

    container:{
        flex:1,
    },

    background:{
            
      borderTopWidth: Dimensions.get("window").height/2,
      borderBottomWidth: Dimensions.get("window").height/2,
      borderRightWidth: Dimensions.get("window").width/2,
      borderLeftWidth: Dimensions.get("window").width/2,
      borderTopColor:"#b391cf",
      borderBottomColor:"#cf919f",
      borderRightColor:"#b391cf",
      borderLeftColor:"#cf919f"

    },
    contentContainer:{
        position:"absolute",
        height:Dimensions.get("window").height,
        width:Dimensions.get("window").width,
        backgroundColor:"white"
    },
    notifyButton:{
        flexDirection:'row',
        marginTop:10,
        marginLeft:10,
        height:'10%', 
    },
    avatar:{
        avatarBox:{
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"white",
            elevation:10,
            overflow:'visible'
            
        },
        image:{
            height:100,
            width:100,
            
            backgroundColor:"purple",
            elevation:10,
            overflow:'visible'
        },
        camera:{

        }

    }
})
// #endregion
export default index;