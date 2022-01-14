import PropTypes from 'prop-types';
import { View,Text,StyleSheet, Button, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Card} from 'react-native-shadow-cards';
import React from 'react';
import Action from './components/dummy/actionButton.js'
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const App = () => {
  
  
  const Height=Dimensions.get("screen").height
  const Width=Dimensions.get("screen").width
  
  return <View style={{height:Height,width:Width}}>
    <View style={{
      flex:1,
      borderTopWidth:Height/2,
      borderBottomWidth:Height/2,
      borderRightWidth:Width/2,
      borderLeftWidth:Width/2,
      borderTopColor:"white",
      borderBottomColor:"maroon",
      borderRightColor:"maroon",
      borderLeftColor:"white",
    }}>
    </View>

    <View style={{
      position:'absolute',
      height:Height,
      width:Width,
      backgroundColor:'transparent',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <Text></Text>
      <View style={{height:100,width:100,backgroundColor:'purple',borderRadius:20,margin:10}}></View>
      <View style={{height:100,width:100,backgroundColor:'cyan',borderRadius:20,margin:10}}></View>
      <View style={{height:100,width:100,backgroundColor:'pink',borderRadius:20,margin:10}}></View>
      <Action></Action>
    </View>
  </View>






  // return <View style={{flex:1,backgroundColor:"yellow"}}>

  //    <View style={{
  //       flex:1,
  //       borderTopWidth:Height/2,
  //       borderBottomWidth:Height/2,
  //       borderRightWidth:Width/2,
  //       borderLeftWidth:Width/2,
  //       borderTopColor:"gray",
  //       borderBottomColor:"red",
  //       borderRightColor:"red",
  //       borderLeftColor:"gray",
        
  //     }}>

  //    </View>



  //    <View style={{
  //      backgroundColor:"dodgerblue",
  //      position:'absolute',
  //      height:Height,
  //      width:Width,
  //      justifyContent:'center',
  //      //alignItems:'center'
  //    }}>
  //       <Card style={{padding: 10, margin: 10}}>
  //       <Text>App.js to start working on your app!</Text>
  //       <Text>Changes you make will automatically reload.</Text>
  //       <Text>Shake your phone to open the developer menu.</Text>
  //     </Card>
  //     <View style={{height:100,width:100,backgroundColor:"tomato",position:'absolute',flexDirection:""}}>

  //     </View>
  //    </View>
     
  //    {/* <Card style={{padding: 10, margin: 10}}>
  //       <Text>Open up App.js to start working on your app!</Text>
  //       <Text>Changes you make will automatically reload.</Text>
  //       <Text>Shake your phone to open the developer menu.</Text>
  //     </Card> */}
  // </View>; 
}

App.propTypes = propTypes;
// App.defaultProps = defaultProps; 
// // #endregion
const styles=StyleSheet.create({
  triangle:
  {
    //width: 100,
    //height: 100,
    backgroundColor: 'transparent',
     borderStyle: 'solid',
     borderTopWidth: 50,
     borderRightWidth: 50,
     borderBottomWidth: 50,
     borderLeftWidth: 50,
     borderTopColor: 'purple',
    borderRightColor: 'blue',
    borderBottomColor: 'red',
     borderLeftColor: 'pink',
    
  },
  container:{
    backgroundColor:"red",
    flex:1,
  },
  simple: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    }
    ,
    truncTriangle:{
      backgroundColor:"white",
      height:0, 
      width:0,
       
      borderTopWidth:150,
      borderRightWidth:150,
      borderLeftWidth:150,
      borderTopColor:"lightpink",
      borderBottomColor:"transparent",
      borderRightColor:"transparent",
      borderLeftColor:"transparent",
      right:50,

      
      borderWidth:5,
    },
    againTriangle:{
      height:0,
      width:0,
      borderTopWidth:50,
      borderBottomWidth:50,
      borderRightWidth:50,
      borderLeftWidth:50,

    },

    // homePage:{
    //   flex:1,
    //   borderTopWidth:Height/2,
    //   borderBottomWidth:Height/2,
    //   borderRightWidth:Width/2,
    //   borderLeftWidth:Width/2,
    //   borderTopColor:"gray",
    //   borderBottomColor:"red",
    //   borderRightColor:"red",
    //   borderLeftColor:"gray",
    // }

});
export default App;