import React from 'react';
import {
  StatusBar,
  TouchableOpacity,
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
  return (
    <View style={styles.container}>
      <View style={styles.btnsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("GuestSearch")}>
          <View style={styles.btn}>
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
    backgroundColor: '#800000',
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
  btn: {
    backgroundColor: 'white',
    borderRadius: hp('3%'),
    borderWidth: 3, //Width of the border
    borderColor: '#800000',
    padding: 15,
    elevation: 30,
  },
  btnText: {
    color: '#800000',
    fontSize: 16,
    fontWeight: 'bold',
    //justifyContent:"center",
    //alignItems:"center",
    //OR
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
export default Main;