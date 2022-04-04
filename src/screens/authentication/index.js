import React, {useState} from 'react';
import {
  StatusBar,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Main = ({navigation}) => {
  const [state, setState] = useState({
    loginBtnColor: '',
    signupBtnColor: '',
    guestBtnColor: '',
  });

  return (
    <View style={styles.container}>
      <View style={styles.btnsContainer}>
        <TouchableOpacity
          style={[styles.btn, {backgroundColor: state.loginBtnColor}]} //Or if don't want "backgroundColor:" and just need change the text color use => "color:""
          onPress={() => {
            setState({loginBtnColor: '#42EADDFF'});
            setTimeout(() => {
              navigation.navigate('Login');
              setState({
                //signupBtnColor: '#D5DBDB',
                //guestBtnColor: '#D5DBDB',
              });
            }, 100);
          }}>
          <View>
            <Text style={styles.btnText}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, {backgroundColor: state.signupBtnColor}]} //Or if don't want "backgroundColor:" and just need change the text color use => "color:""
          onPress={() => {
            setState({signupBtnColor: '#42EADDFF'});
            setTimeout(() => {
              navigation.navigate('Signup');
              setState({
                // loginBtnColor: '#D5DBDB',
                //signupBtnColor: '#D5DBDB',
                //guestBtnColor: '#D5DBDB',
              });
            }, 100);
          }}>
          <View>
            <Text style={styles.btnText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, {backgroundColor: state.guestBtnColor}]} //Or if don't want "backgroundColor:" and just need change the text color use => "color:""
          onPress={() => {
            setState({guestBtnColor: '#42EADDFF'});
            setTimeout(() => {
              navigation.navigate('GuestSearch');
              setState({
                //loginBtnColor: '#D5DBDB',
                //signupBtnColor: '#D5DBDB',
                //guestBtnColor: '#D5DBDB',
              });
            }, 100);
          }}>
          <View>
            <Text style={styles.btnText}>Guest</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008080',
  },
  btnsContainer: {
    flexDirection: 'column', //By default
    justifyContent: 'space-evenly', //Align the items direction-wise
    height: hp('100%'),
    backgroundColor: '#F4F6F6',
    padding: hp('9%'),
    marginLeft: hp('10%'),
    //borderBottomRightRadius: hp('100%'),
    borderBottomLeftRadius: hp('80%'),
    borderTopLeftRadius: hp('100%'),
    //borderTopRightRadius: hp('100%'),
    //overflow: 'hidden',
  },

  btnText: {
    color: '#008080',
    fontSize: 16,
    fontWeight: 'normal',
    //justifyContent:"center",
    //alignItems:"center",
    //OR
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  btn: {
    height: 60,
    width: 160,
    borderWidth: 2,
    //backgroundColor: '',
    borderRadius: 30,
    borderColor: '#42EADDFF',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    //elevation: 30,
  },
});
export default Main;
