import React, {useState, useEffect} from 'react';

import {
  StatusBar,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';

import OutlineInput from 'react-native-outline-input';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';
import AwesomeAlert from 'react-native-awesome-alerts';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Login = ({navigation}) => {
  //all states are defined here
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const [state, setState] = useState({
    btnColor: '#D5DBDB',
  });

  //----------these states are related to alertDialog----------//
  const [alertText, setAlertText] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [resendRequest, setResendRequest] = useState(false);
  //----------------------------------------------------------//

  //all hooks are defined here
  //all functions are defined here
  const login = () => {
    if (
      email == null ||
      password == null ||
      email.length == 0 ||
      password.length == 0
    ) {
      setAlertText('Empty fields are not allowed!');
      setShowAlert(true);
      return;
    }
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        //setUser(user);
        console.log('User details: ', user);
        if (user.user.emailVerified == false) {
          setAlertText(
            "Dear User, you have not verified your email yet, sorry we can't proceed you further, without verifying your email, if you entered wrong email address then we'll suggest you to create account with your own valid email, or click on resend button to get verification email again, Regards! TutorHub Team",
          );
          setResendRequest(true); //it will just enabled when user is valid but email is not verified
          setShowAlert(true);
        } else {
          navigation.navigate('Main');
        }
      })
      .catch(error => {
        console.log('error: ', error);
        if (error.code === 'auth/wrong-password') {
          setAlertText(
            'Your password is wrong, try it again, otherwise click on forgot password button to change password',
          );
        } else {
          setAlertText(error.message);
        }
        setShowAlert(true);
      });
  };

  async function onGoogleButtonPress() {
    // Get the users ID token
    const googleAccountDetails = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(
      googleAccountDetails.idToken,
    );
    const status = auth().isSignInWithEmailLink(googleAccountDetails.email);
    if (status == true) {
      //means user have a valid registered account
      // Sign-in the user with the credential
      try {
        const user = await auth().signInWithCredential(googleCredential);
        //promise resolved succesfully
        console.log('Signed in with Google!', user);
        // console.log('value', user.isNewUser);
        // if (user.additionalUserInfo.isNewUser == true) {
        //   console.log('expected line');
        //   //it means this user is not new to our app
        //   setAlertText(
        //     'Nobody is registered with this email, you should try to register yourself on this app with this email, but do not worry we have done your registeration.',
        //   );
        //   setShowAlert(true);

        //   //saving this user status in database
        //   firestore() //error of this query will also catched by catch statement
        //     .collection('first_visit')
        //     .add({id: user.user.uid, status: true})
        //     .catch(error =>
        //       console.log(
        //         'Error arise while setting first visit flag: ',
        //         error,
        //       ),
        //     );
        // }
        navigation.navigate('Main');
      } catch (error) {
        //promise rejected
        setAlertText(error.message);
        setShowAlert(true);
      }
    } else {
      setAlertText(
        googleAccountDetails.email,
        'you are not a registered user, kindly register yourself first then try to login with this email',
      );
      setShowAlert(true);
      GoogleSignin.signOut(); //it will allow user to select another google account, otherwise previous account will be selected by default
    }
  }

  const resetPassword = () => {
    if (email == null || email.length == 0) {
      setAlertText(
        'Kindly first of all enter your email address in provided field then, hit forgot password button.',
      );
      setShowAlert(true);
      return;
    }
    auth()
      .sendPasswordResetEmail(email)
      .then(result => {
        console.log(result);
        setAlertText(
          'Link is sent to provided email address, open that link and reset your password',
        );
        setShowAlert(true);
      })
      .catch(error => {
        console.log(error);
        setAlertText(error.message);
        setShowAlert(true);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.triangleContainer}></View>
        <View style={styles.formContainer}>
          <View style={styles.textInput}>
            <OutlineInput
              value={email}
              onChangeText={e => setEmail(e)}
              label="Email"
              activeValueColor="#42EADDFF"
              activeBorderColor="#42EADDFF"
              activeLabelColor="#42EADDFF"
              passiveBorderColor="#B2BABB"
              passiveLabelColor="#B2BABB"
              passiveValueColor="#B2BABB"
            />
          </View>
          <View
            style={[
              styles.textInput,
              {
                marginTop: 10,
              },
            ]}>
            <OutlineInput
              secureTextEntry={isSecureTextEntry ? true : false}
              value={password}
              onChangeText={e => setPassword(e)}
              label="Password"
              activeValueColor="#42EADDFF"
              activeBorderColor="#42EADDFF"
              activeLabelColor="#42EADDFF"
              passiveBorderColor="#B2BABB"
              passiveLabelColor="#B2BABB"
              passiveValueColor="#B2BABB"
              width="80%"
            />
            <TouchableOpacity
              style={{bottom: 40, left: 270}}
              onPress={() => setIsSecureTextEntry(!isSecureTextEntry)}>
              <FontAwesome
                name={isSecureTextEntry ? 'eye-slash' : 'eye'}
                color="gray"
                size={25}
                paddingHorizontal="12%"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginLeft: wp('50%'), marginTop: hp('-2%')}}
              onPress={() => resetPassword()}>
              <Text style={{color: 'red'}}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: hp('2%')}}>
            <TouchableOpacity
              style={[
                styles.btn,
                {
                  backgroundColor:
                    password.length > 5 &&
                    email.length > 0 &&
                    email.includes('@')
                      ? '#42EADDFF'
                      : 'lightgray',
                },
              ]} //Or if don't want "backgroundColor:" and just need change the text color use => "color:""
              onPress={() => {
                //setState({btnColor: '#42EADDFF'});
                // setTimeout(() => {
                //   navigation.navigate('Main');
                //   setState({
                //     btnColor: '#D5DBDB',
                //     //googleBtnColor: '#D5DBDB',
                //   });
                // }, 100);
                login();
              }}>
              <View>
                <Text style={styles.btnText}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text
            style={{color: '#42EADDFF', marginHorizontal: 50, marginTop: 10}}>
            ------------------------------OR------------------------------
          </Text>

          <View style={[styles.btn, {marginVertical: 20}]}>
            <FontAwesome.Button
              name="google"
              backgroundColor="#58D68D"
              //#64495ED
              //#58D68D
              //#F39C12
              paddingHorizontal="20%"
              onPress={() => onGoogleButtonPress()}>
              <Text style={[styles.btnText, {padding: 2}]}>
                Login with Google
              </Text>
            </FontAwesome.Button>
          </View>

          <View style={styles.signupCont}>
            <Text style={styles.signupText}>Don't have an account yet?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.btnSignup}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <AwesomeAlert
        show={showAlert}
        //showProgress={false}
        title="Alert"
        message={alertText}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={resendRequest}
        showConfirmButton={true}
        cancelText="RESEND"
        confirmText="OK"
        confirmButtonColor="#DD6B55"
        cancelButtonColor="teal"
        onCancelPressed={() => {
          //navigation.navigate("login");
          auth()
            .currentUser.sendEmailVerification()
            .then(() => {
              setAlertText('Verification Email Sent!');
              setResendRequest(false);
            });
        }}
        onConfirmPressed={() => {
          setResendRequest(false);
          setShowAlert(false);
        }}></AwesomeAlert>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F6',
    //alignContent: 'center',
    //justifyContent: 'center',
    //marginLeft: 50,
  },
  triangleContainer: {
    flex: 1,
    height: 0,
    width: 0,

    borderTopWidth: 180,
    borderTopColor: '#008080',
    borderStyle: 'solid',

    borderLeftWidth: 300,
    //borderStyle: 'solid',
    borderLeftColor: 'transparent',

    borderRightWidth: 120,
    //borderStyle: 'solid',
    borderRightColor: 'transparent',
  },
  formContainer: {
    flex: 19,
    //justifyContent: 'center',
    //alignItems: 'center',
    //textAlign: 'center',
  },
  textBox: {
    //width: 320,
    backgroundColor: '#008080',
    marginVertical: 10,
    marginHorizontal: 20,

    borderRadius: 25,
    //borderWidth: 2,
    //fontSize: 20,
    //borderColor: 'pink',
  },
  textInput: {
    fontSize: 16,
    paddingHorizontal: 25,
  },
  btn: {
    //width: 320,
    //borderWidth: 2,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 25,
    // backgroundColor: '#D5DBDB',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    textTransform: 'uppercase',
    padding: 12,
  },
  signupCont: {
    //marginHorizontal: 70,
    marginVertical: hp('12%'),
    flexGrow: 1,
    flexDirection: 'row',
    //alignItems: 'flex-end',
    justifyContent: 'center',
  },
  signupText: {
    color: '#42EADDFF',
    fontSize: 16,
  },
  btnSignup: {
    color: '#008080',
    fontSize: 16,
    fontWeight: 'bold',
    //textTransform: 'uppercase',
  },
});
export default Login;
