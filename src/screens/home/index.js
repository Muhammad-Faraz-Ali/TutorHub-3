import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import Modal from 'react-native-modal';
import Dialog from 'react-native-dialog';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserAvatar from 'react-native-user-avatar';
import {Card} from 'react-native-shadow-cards';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import * as RNFS from 'react-native-fs';
const fileHandler = require('fs');

// Import Image Picker
// import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const index = ({navigation}) => {
  const Height = Dimensions.get('screen').height;
  const Width = Dimensions.get('screen').width;
  const [showModal, setShowModal] = useState(false);
  const [logout, setLogout] = useState(false);
  const [name, setName] = useState(false);
  const [image, setImage] = useState(false);
  const [filePath, setFilePath] = useState('../../res/images/me.png');
  const setUserToLocalStorage = userId => {
    // fileHandler.readFile('../res/local_storage', (err, data) => {
    //   if (err) console.log('Error arise while writing user to local DB', err);
    //   storage = JSON.parse(data.toString());
    //   storage.userId = false; //do it false after reading user first time
    //   fileHandler.writeFile(
    //     '../../res/local_storage',
    //     Json.toString(storage),
    //     () => {
    //       console.log('User has been written in DB', uid);
    //     },
    //   );
    // });
    RNFS.readFile('../../res/local_storage.txt')
      .then(data => {
        var storage = JSON.parse(data.toString());
        const id = userId;
        storage.id = true;
        RNFS.writeFile('../../res/local_storage', JSON.toString(storage)).then(
          () => console.log('USER ADDED TO LOCAL DB SUCCESSFULLY'),
        );
      })
      .catch(error =>
        console.log(
          'Error comes while setting user data in local_storage:',
          error,
        ),
      );
  };

  
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      // videoQuality: 'low',
      //durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        //console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        setFilePath(response);
      });
    }
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        //alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      //console.log(response.assets[0].uri);
      setFilePath(response);
    });
  };

  useEffect(() => {
    // RNFS.readFile('../../res/local_storage.txt')
    //   .then(data => {
    //     id = auth().currentUser.uid;
    //     storage = JSON.parse(data);
    //     if (storage.id == true) {
    //       setAlertText(
    //         'Welcome to Tutor Hub, we will recommend read our help section before using this app',
    //       );
    //       setShowAlert(true);
    //       setUserToLocalStorage(id); //now this user will be false forever
    //     }
    //   })
    //   .catch(err =>
    //     console.log('error comes while reading file: ', err.code, err.message),
    //   );
    // RNFS.readDir(RNFS.DocumentDirectoryPath).then(files => {
    //   files.forEach(item => console.log(item));
    // });
    RNFS.exists('../../res/local_storage.txt').then(status =>
      console.log(status),
    );
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.background}></View>
        <View style={styles.contentContainer}>
          <View style={styles.notifyButton}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() =>
                  //navigation.getParent().navigate('Authentication')
                  setLogout(true)
                }>
//put this code in the onPress of ok                  
//                 onPress={() => {
//                   const signout = async () => {
//                     //this code is working perfectly
//                     console.log('current user: ', auth().currentUser);
//                     await auth().signOut(); //it will remove current user present in auth, either that user was logged in through Google or Email/Password
//                     console.log('Current User Status: ', auth().currentUser);
//                     await GoogleSignin.signOut(); //If we will not signOut from there then next time, it will automatically select already selected user and will not give pop-up
//                     console.log('Signout from google also now agian login');
//                   };
//                   signout();
//                   navigation.getParent().navigate('Authentication'); //after clicking logout our cached user or auth().currentuser will be null and we will be navigated to first screen
//                 }}>
                <AntDesignIcon size={30} color="teal" name="logout" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{flexDirection: 'row-reverse'}}
              onPress={() => navigation.getParent().navigate('Notification')}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  padding: 3,
                  marginBottom: 4,
                  backgroundColor: 'red',
                  borderRadius: 8,
                  height: '40%',
                  left: 20,
                  zIndex: 2,
                }}>
                9+
              </Text>
              <Ionicons
                style={{marginRight: 0}}
                size={40}
                color="#42EADDFF"
                name="notifications-outline"
              />
            </TouchableOpacity>
          </View>

          <View style={{height: '20%'}}>
            <View
              style={{
                alignSelf: 'center',
                borderRadius: 50,
                height: 100,
                width: 100,
                backgroundColor: 'white',
                elevation: 16,
              }}>
              <TouchableOpacity>
                <Image
                  borderRadius={50}
                  source={{uri: filePath.assets[0].uri}}
                  style={{height: 100, width: 100}}
                />
              </TouchableOpacity>
            </View>
            <Icon
              style={{
                alignSelf: 'center',
                bottom: 30,
                left: 30,
                elevation: 16,
                zIndex: 2,
              }}
              size={30}
              color="#42EADDFF"
              name="camera"
              onPress={() => setImage(true)}
            />
          </View>

          <TouchableOpacity style={{height: '20%'}}>
            <View>
              <Card
                style={{
                  alignSelf: 'center',
                  flexDirection: 'row',
                  backgroundColor: '#42EADDFF',
                  justifyContent: 'center',
                  padding: 10,
                }}
                elevation={20}
                cornerRadius={20}
                opacity={0.2}>
                <Text numberOfLines={1} style={{marginHorizontal: 15}}>
                  Faizan Muhammad
                </Text>
                <Icon
                  style={{left: 0}}
                  size={24}
                  color="teal"
                  name="eraser"
                  onPress={() => setName(true)}
                />
              </Card>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{height: '10%', marginTop: 10, elevation: 16}}
            onPress={() => navigation.navigate('TeacherAccount')}>
            <View
              style={{
                height: '100%',
                width: '60%',
                alignSelf: 'center',
                backgroundColor: '#F39C12',
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 16,
                marginTop: 0,
              }}>
              <Text style={{color: 'white', fontSize: 16}}>Teacher</Text>
              <Text style={{color: 'white', fontSize: 16}}>Account</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{height: '10%', marginTop: 10, elevation: 16}}
            onPress={() => navigation.navigate('StudentAccount')}>
            <View
              style={{
                height: '100%',
                width: '60%',
                alignSelf: 'center',
                backgroundColor: '#3498DB',
                borderTopLeftRadius: 20,
                borderBottomRightRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 20,
                marginTop: 0,
              }}>
              <Text style={{color: 'white', fontSize: 16}}>Student</Text>
              <Text style={{color: 'white', fontSize: 16}}>Account</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginTop: '4%',
              backgroundColor: '#5DADE2',
              marginHorizontal: '20%',
              width: '60%',
            }}
            onPress={() => setShowModal(true)}>
            <Text style={{margin: '8%', textAlign: 'center'}}>
              Set Location
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Modal
            animationType={'slide'}
            transparent={false}
            visible={showModal}
            onRequestClose={() => {
              //when click on back in android
              setShowModal(!showModal);
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{marginTop: 5}}>Your location</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#3498DB',
                  height: 30,
                  width: 100,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 12,
                      fontWeight: 'normal',
                    }}>
                    Add Location
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 280,
                backgroundColor: 'gray',
                marginTop: '2%',
              }}></View>
          </Modal>
        </View>
        <View>
          <Dialog.Container visible={logout}>
            <Dialog.Description>Do you want to logout?</Dialog.Description>
            <Dialog.Button label="Cancel" onPress={() => setLogout(false)} />
            <Dialog.Button label="Logout" onPress={() => {setLogout(false);
                  const signout = async () => {
                    //this code is working perfectly
                    console.log('current user: ', auth().currentUser);
                    await auth().signOut(); //it will remove current user present in auth, either that user was logged in through Google or Email/Password
                    console.log('Current User Status: ', auth().currentUser);
                    await GoogleSignin.signOut(); //If we will not signOut from there then next time, it will automatically select already selected user and will not give pop-up
                    console.log('Signout from google also now agian login');
                  };
                  signout();
                  navigation.getParent().navigate('Authentication'); //after clicking logout our cached user or auth().currentuser will be null and we will be navigated to first screen
                                                         }} />
          </Dialog.Container>
        </View>
        <View>
          <Dialog.Container visible={name}>
            <Dialog.Description>Enter your name</Dialog.Description>
            <Dialog.Input></Dialog.Input>
            <Dialog.Button label="Cancel" onPress={() => setName(false)} />
            <Dialog.Button label="Set" onPress={() => setName(false)} />
          </Dialog.Container>
        </View>
        <View>
          <Dialog.Container visible={image}>
            <Dialog.Title>Select a Photo</Dialog.Title>
            <Dialog.Description>
              <Dialog.Button
                label="Take Photo..."
                onPress={() => {
                  captureImage('photo');
                  setImage(!image);
                }}></Dialog.Button>
            </Dialog.Description>
            <Dialog.Description>
              <Dialog.Button
                label="Choose from Gallery..."
                onPress={() => {
                  chooseFile('photo');
                  setImage(!image);
                }}></Dialog.Button>
            </Dialog.Description>
            <Dialog.Description>
              <Dialog.Button
                label="Remove photo..."
                color={'red'}
                bold="false"
                onPress={() => {
                  setFilePath('../../res/images/me.png');
                  setImage(!image);
                }}></Dialog.Button>
            </Dialog.Description>
            <Dialog.Button label="Cancel" onPress={() => setImage(false)} />
          </Dialog.Container>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    borderTopWidth: Dimensions.get('window').height / 2,
    borderBottomWidth: Dimensions.get('window').height / 2,
    borderRightWidth: Dimensions.get('window').width / 2,
    borderLeftWidth: Dimensions.get('window').width / 2,
    borderTopColor: 'blue',
    borderBottomColor: 'blue',
    borderRightColor: 'blue',
    borderLeftColor: 'blue',
  },
  contentContainer: {
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
  },
  notifyButton: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    height: '10%',
  },
  avatar: {
    avatarBox: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      elevation: 10,
      overflow: 'visible',
    },
    image: {
      height: 100,
      width: 100,

      backgroundColor: 'purple',
      elevation: 10,
      overflow: 'visible',
    },
    camera: {},
  },
});
// #endregion
export default index;
