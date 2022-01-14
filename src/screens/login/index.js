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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.triangleContainer}></View>
      <View style={styles.formContainer}>
        <View style={styles.textInput}>
          <OutlineInput
            value={email}
            onChangeText={e => setEmail(e)}
            label="Email"
            activeValueColor="#800000"
            activeBorderColor="#800000"
            activeLabelColor="#800000"
            passiveBorderColor="#F18E0F"
            passiveLabelColor="#B2BABB"
            passiveValueColor="#F18E0F"
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
            activeValueColor="#800000"
            activeBorderColor="#800000"
            activeLabelColor="#800000"
            passiveBorderColor="#F18E0F"
            passiveLabelColor="#B2BABB"
            passiveValueColor="#F18E0F"
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
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Login</Text>
          </View>
        </TouchableOpacity>
        <Text style={{color: '#F18E0F', marginHorizontal: 50, marginTop: 10}}>
          ------------------------------OR------------------------------
        </Text>

        <View style={[styles.btn, {marginVertical: 20}]}>
          <FontAwesome.Button
            name="google"
            backgroundColor="#800000"
            paddingHorizontal="20%"
            onPress={() => navigation.navigate("Main")}>
            <Text style={[styles.btnText, {padding: 2}]}>Login with Google</Text>
          </FontAwesome.Button>
        </View>

        <View style={styles.signupCont}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>
          <TouchableOpacity onPress={() => Alert.alert("I'm Sign Up Button")}>
            <Text style={styles.btnSignup}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    borderTopColor: '#800000',
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
    backgroundColor: '#B2BABB',
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
    backgroundColor: '#800000',
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
    marginVertical: 100,
    flexGrow: 1,
    flexDirection: 'row',
    //alignItems: 'flex-end',
    justifyContent: 'center',
  },
  signupText: {
    color: '#F18E0F',
    fontSize: 16,
  },
  btnSignup: {
    color: '#800000',
    fontSize: 16,
    fontWeight: 'bold',
    //textTransform: 'uppercase',
  },
});
export default Login;