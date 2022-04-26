import React, {useState, useEffect} from 'react';

import {
  StatusBar,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
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

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const [state, setState] = useState({
    btnColor: '#D5DBDB',
  });

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.triangleContainer}></View>

      <View style={styles.formContainer}>
        <View style={styles.textInput}>
          <OutlineInput
            value={email}
            onChangeText={e => setEmail(e)}
            label="Email"
            activeValueColor="black"
            activeBorderColor="#42EADDFF"
            activeLabelColor="teal"
            passiveBorderColor="#B2BABB"
            passiveLabelColor="#B2BABB"
            passiveValueColor="#B2BABB"
            assistiveTextColor="transparent"
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
            activeValueColor="black"
            activeBorderColor="#42EADDFF"
            activeLabelColor="teal"
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
            style={{marginLeft: wp('50%'), marginTop: hp('-2%')}}>
            <Text style={{color: 'red'}}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: hp('2%')}}>
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: state.btnColor}]} //Or if don't want "backgroundColor:" and just need change the text color use => "color:""
            onPress={() => {
              setState({btnColor: '#42EADDFF'});
              setTimeout(() => {
                navigation.navigate('Main');
                setState({
                  btnColor: '#D5DBDB',
                  //googleBtnColor: '#D5DBDB',
                });
              }, 100);
            }}>
            <View>
              <Text style={styles.btnText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{color: '#42EADDFF', marginHorizontal: 50, marginTop: 10}}>
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
            onPress={() => navigation.navigate('Main')}>
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
    </KeyboardAvoidingView>
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
