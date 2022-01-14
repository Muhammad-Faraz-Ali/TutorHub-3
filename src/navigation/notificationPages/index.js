import React from 'react';
import {Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../../screens/home/index.js'
import SearchScreen from '../../screens/search/index.js';
import NotificationScreen from '../../screens/notifications/index.js' 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator();

function index({navigation}) {
  return (
    <TopTab.Navigator screenOptions={({ route }) => ({
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName;

        //   if (route.name === 'Teacher') {
        //     iconName = focused ? 'home' : 'home-outline';
        //   }
        //   else if (route.name === 'Student') {
        //       iconName = focused ? 'search-circle' : 'search-circle-outline';
        //   }
        //   else if (route.name === 'Other') {
        //       iconName = focused ? 'help-circle' : 'help-circle-outline';
        //   }
        //   // You can return any component that you like here!
        //   if(focused)
        //       size=25
        //   else
        //       size=15    
        //   return <Ionicons name={iconName} size={size} color={color} />;
        // },
        tabBarActiveTintColor: 'maroon',
        tabBarInactiveTintColor: 'black',
        headerShown:false,
        tabBarLabelStyle:{elevation:10,fontSize:18},
      })} initialRouteName='Teacher'>
      <TopTab.Screen name="Teacher" component={NotificationScreen}/>
      <TopTab.Screen name="Student" component={NotificationScreen}/>
      <TopTab.Screen name="Other" component={NotificationScreen}/>
    </TopTab.Navigator>
  );

}

export default index;