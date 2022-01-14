import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Switch,
  Alert,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import GradesAndSubjects from '../search/components/GradesAndSubjects/index.js';
import SwitchSelector from 'react-native-switch-selector';
import OutlineInput from 'react-native-outline-input';
import {Card} from 'react-native-shadow-cards';
import  MaterialIcon  from 'react-native-vector-icons/MaterialCommunityIcons';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import ImagePicker from 'react-native-image-crop-picker';
import Fontisto from 'react-native-vector-icons/Fontisto';
//import Geolocation from '@react-native-community/geolocation';
//import MapView from 'react-native-maps';
//import DatePicker from 'react-native-date-picker';

//import {TimePicker} from 'react-native-simple-time-picker';
//import ModalDropdown from 'react-native-modal-dropdown';
//import DropDownPicker from 'react-native-dropdown-picker';
// import NumberPlease from 'react-native-number-please';
// import {Picker} from '@react-native-picker/picker';


import grades,{subjects} from "../../res/data.js"

const Teacher = () => {
  const [gender, setGender] = useState({gender: ''});
  const [fees, setFees] = useState(0);
  const [years, setYears] = useState(0);
  const [radius, setRadius] = useState(0);
  const [contact, setContact] = useState(0);
  const [about, setAbout] = useState('');


  const [Grades, setGrades] = useState(Array.from({length: grades.length},()=> false))
  const [Subjects, setSubjects] = useState(Array.from({length: subjects.length},()=> Array.from({length: 9}, () => false)))

  function gradeManagement(index){
    let tempGrade=[...Grades]
    tempGrade[index]=!tempGrade[index]
    setGrades(tempGrade)
}

function subjectManagement(gradeIndex,subjectIndex){
    let tempSubjects=[...Subjects]
    tempSubjects[gradeIndex][subjectIndex]=!tempSubjects[gradeIndex][subjectIndex]
    if(subjectIndex==subjects[gradeIndex].length-1)  //if user clicked on all button, then make other buttons also like it either checked or uncheked
        for(let i=0;i<tempSubjects[gradeIndex].length;i++)
            tempSubjects[gradeIndex][i]=tempSubjects[gradeIndex][subjectIndex]
    setSubjects(tempSubjects)
}

function isGradeSelected(index){
    return Grades[index]
}
function isSubjectSelected(gradeIndex,subjectIndex){
    return Subjects[gradeIndex][subjectIndex] 
}

  

  
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.genderCon}>
        <Text style={{alignSelf:'center',fontSize:18,marginBottom:5,color:'white',backgroundColor:'maroon',textAlign:'center',textAlignVertical:'center',padding:10,marginTop:20,borderRadius:5,borderTopRightRadius:20,borderTopLeftRadius:20}}>Gender</Text>        
         <SwitchSelector
            selectedColor="goldenrod"
            buttonColor="maroon"
            borderColor="goldenrod"
            hasPadding
            initial={0}
            borderWidth={2}
            borderRadius={20}
            onPress={value => setGender({gender: value})}
            options={[
              {
                label: 'Male',
                value: 'm',
                imageIcon: require('../../res/images/male.png'),
              },
              {
                label: 'FeMale',
                value: 'f',
                imageIcon: require('../../res/images/female.png'),
              },
            ]}
          />
        </View>

        {/* <View style={[styles.genderCon]}>
          <Text>Location:</Text>
        </View> */}

        <View style={styles.textInput}>
          <OutlineInput
            value={fees}
            onChangeText={e => setFees(e)}
            label="Enter fees in Rs."
            activeValueColor="#800000"
            activeBorderColor="#800000"
            activeLabelColor="#800000"
            passiveBorderColor="#F18E0F"
            passiveLabelColor="#B2BABB"
            passiveValueColor="#F18E0F"
            //keyboardType="numeric"
          />
        </View>
        <View
          style={[
            styles.textInput,
            {
              marginTop: 20,
            },
          ]}>
          <OutlineInput
            value={years}
            onChangeText={e => setYears(e)}
            label="Experience(in Years)"
            activeValueColor="#800000"
            activeBorderColor="#800000"
            activeLabelColor="#800000"
            passiveBorderColor="#F18E0F"
            passiveLabelColor="#B2BABB"
            passiveValueColor="#F18E0F"
            width="80%"
          />
        </View>
        <View
          style={[
            styles.textInput,
            {
              marginTop: 20,
            },
          ]}>
          <OutlineInput
            value={radius}
            onChangeText={e => setRadius(e)}
            label="Radius"
            activeValueColor="#800000"
            activeBorderColor="#800000"
            activeLabelColor="#800000"
            passiveBorderColor="#F18E0F"
            passiveLabelColor="#B2BABB"
            passiveValueColor="#F18E0F"
            width="80%"
            //keyboardType="numeric"
          />
        </View>
        {/* <View style={{marginTop: 10}}>
          <Text>Contact</Text>
        </View> */}
        {/*<View
          style={[
            styles.textInput,
            {
              flexDirection: 'row',

              //marginTop: 20,
            },
          ]}>
           <TouchableOpacity onPress={() => Alert.alert('I am a Whats app')}>
            <View style={styles.btnContact}>
              <Text style={styles.btnTextContact}>Whats app</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('I am a Gmail')}>
            <View style={styles.btnContact}>
              <Text style={styles.btnTextContact}>Gmail</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('I am Phone Button')}>
            <View style={styles.btnContact}>
              <Text style={styles.btnTextContact}>Phone</Text>
            </View>
          </TouchableOpacity>
        </View> */}
        <Text style={{alignSelf:'center',fontSize:18,marginBottom:5,color:'white',backgroundColor:'maroon',textAlign:'center',textAlignVertical:'center',padding:10,marginTop:20,borderRadius:5,borderTopRightRadius:20,borderTopLeftRadius:20}}>Subjects & Grades</Text>
        <GradesAndSubjects GradeManagement={gradeManagement} SubjectManagement={subjectManagement} IsGradeSelected={isGradeSelected} IsSubjectSelected={isSubjectSelected}></GradesAndSubjects>

        <View
          style={[
            styles.textInput,
            {
              marginTop: 20,
            },
          ]}>
          <OutlineInput
            value={about}
            onChangeText={e => setAbout(e)}
            label="About"
            activeValueColor="#800000"
            activeBorderColor="#800000"
            activeLabelColor="#800000"
            passiveBorderColor="#F18E0F"
            passiveLabelColor="#B2BABB"
            passiveValueColor="#F18E0F"
            width="80%"
          />
        </View>
        <Text style={{alignSelf:'center',fontSize:18,marginBottom:5,color:'white',backgroundColor:'maroon',textAlign:'center',textAlignVertical:'center',padding:10,marginTop:20,borderRadius:5,borderTopRightRadius:20,borderTopLeftRadius:20}}>Contact</Text>
        <Card style={styles.cardStyle} elevation={10} cornerRadius={20}>
                    <View style={{flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap'}}>
                        <TouchableOpacity><MaterialIcon name="phone" color="black" size={50}></MaterialIcon></TouchableOpacity>
                        <TouchableOpacity><MaterialIcon name="whatsapp" color="green" size={50}></MaterialIcon></TouchableOpacity>
                        <TouchableOpacity><MaterialIcon name="gmail" color="darkred" size={50}></MaterialIcon></TouchableOpacity>                        
                    </View>
        </Card>

        <TouchableOpacity onPress={()=>alert("Your request has been recorded...")}>
                <Text style={ [styles.cardItem,{alignSelf:'center',padding:20,paddingHorizontal:30}]}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    padding: 10,
  },
  genderCon: {
    //flexGrow: 3,
    width: '90%',
    alignSelf:'center'
    //flexDirection: 'row',
    // backgroundColor: 'blue',
  },

  btn: {
    backgroundColor: 'white',
    borderRadius: hp('30%'),
    borderWidth: 3, //Width of the border
    borderColor: '#800000',
    padding: 4,
    elevation: 30,
    //height: 100,
    //width: 100,
  },
  cardItem:{
    borderRadius:20,borderWidth:3,borderColor:'goldenrod',fontWeight:'bold',textAlign:'center',textAlignVertical:'center',padding:10,color:'white',backgroundColor:'maroon',
    marginBottom:5,marginTop:10
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
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    // padding: 20,
  },
  textInput: {
    fontSize: 16,
    paddingHorizontal: 25,
    marginTop:15
  },
  btnContact: {
    backgroundColor: 'white',
    borderRadius: hp('3%'),
    borderWidth: 3, //Width of the border
    borderColor: '#800000',
    padding: 15,
    elevation: 30,
  },
  btnTextContact: {
    color: '#800000',
    fontSize: 16,
    fontWeight: 'bold',
    //justifyContent:"center",
    //alignItems:"center",
    //OR
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  cardStyle:{
    padding:25,
    alignSelf:'center',
    marginBottom:15,
    backgroundColor:'white'
 },
});
export default Teacher;