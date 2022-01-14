import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from '../homePages/index.js'
import NotificationPage from '../notificationPages/index.js'
import ResultPage from '../../screens/result/index.js'
import DetailsPage from '../../screens/userDetails/index.js'
import AuthenticationPage from '../../screens/authentication/index.js'
import LoginPage from '../../screens/login/index.js'
import SignupPage from '../../screens/signup/index.js'
import TeacherPage from '../../screens/teacherAccount/index.js'
import StudentPage from '../../screens/studentAccount/index.js';
import GuestPage from '../../screens/guestSearch/index.js'
const NativeStack=createNativeStackNavigator();

const index = () => {
    return <NavigationContainer>
        <NativeStack.Navigator initialRouteName='Authentication' screenOptions={{headerShown:false}}>
            {/* <NativeStack.Screen name="Splash"></NativeStack.Screen>
            <NativeStack.Screen name="Authentication"></NativeStack.Screen>*/}

            {/* Screen named "Main" is itself a "BottomTabNavigator" which will further route to pages */}
            <NativeStack.Screen name="Authentication" component={AuthenticationPage}></NativeStack.Screen>
            <NativeStack.Screen name="Login" component={LoginPage}></NativeStack.Screen>
            <NativeStack.Screen name="Signup" component={SignupPage}></NativeStack.Screen>
            <NativeStack.Screen name="Main" component={MainPage}></NativeStack.Screen>
            <NativeStack.Screen name="Result" component={ResultPage}></NativeStack.Screen>
            <NativeStack.Screen name="UserDetails" component={DetailsPage}></NativeStack.Screen>
            <NativeStack.Screen name="Notification" component={NotificationPage}></NativeStack.Screen>
            <NativeStack.Screen name="TeacherAccount" component={TeacherPage}></NativeStack.Screen>
            <NativeStack.Screen name="StudentAccount" component={StudentPage}></NativeStack.Screen>
            <NativeStack.Screen name="GuestSearch" component={GuestPage}></NativeStack.Screen>
            {/* Screen named "Notification" is itself a "TopTabNavigator" which will further route to pages */}
            {/* Notification Screen is not build yet so commented out until its creation */}
            {/*  */}
            {/* 

             */}
        </NativeStack.Navigator>    
    </NavigationContainer>;
}

export default index;