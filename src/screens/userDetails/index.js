import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserAvatar from 'react-native-user-avatar';
import {Card} from 'react-native-shadow-cards';

const index = ({navigation}) => {
  const data = {
    name: 'Faizan Muahammad',
    gender: 'male',
    fees: '18000',
    experience: 7,
    timeSlots: ['3pm to 4pm', '5pm to 6 pm', '8pm to 10pm'],
    about:
      'No, in stackNavigator, if routed screen in already available in the stack then it will not be re-rendered...',
  };

  return (
    <ScrollView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntIcon name="back" size={35} color="black"></AntIcon>
      </TouchableOpacity>
      <View
        style={{
          alignSelf: 'center',
          borderRadius: 50,
          height: 100,
          width: 100,
          backgroundColor: 'purple',
          elevation: 16,
          marginBottom: 10,
        }}>
        <TouchableOpacity>
          <Image
            borderRadius={50}
            source={require('../../res/images/me.png')}
            style={{height: 100, width: 100}}
          />
        </TouchableOpacity>
      </View>

      <Card
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          backgroundColor: '#42EADDFF',
          justifyContent: 'center',
          padding: 10,
          marginBottom: 15,
        }}
        elevation={20}
        cornerRadius={10}
        opacity={0.2}>
        <Text numberOfLines={1} style={{marginHorizontal: 15, color: 'black'}}>
          Faizan Muhammad
        </Text>
      </Card>

      {/* <Card style={styles.cardStyle} elevation={10} cornerRadius={20}>
            <Icon style={{alignSelf:'center',marginBottom:10}} name='male' size={35} color="maroon"></Icon>
            <View style={{flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap'}}>
                <Text style={styles.cardItem}>Experience: {data.experience} years</Text>
                <Text style={styles.cardItem}>Fees: Rs.{data.fees}</Text>
            </View>
        </Card> */}
      <Card style={styles.cardStyle} elevation={30} cornerRadius={20}>
        <Text
          style={[
            styles.cardItem,
            {backgroundColor: 'red', borderColor: 'red'},
          ]}>
          Fees: Rs.{data.fees}
        </Text>
        <Icon
          style={{alignSelf: 'center', marginBottom: 10}}
          name="male"
          size={35}
          color="#F39C12"></Icon>
        <Text
          style={[
            styles.cardItem,
            {backgroundColor: '#5DADE2', borderColor: '#5DADE2'},
          ]}>
          Experience: {data.experience} years
        </Text>
      </Card>

      <Card style={styles.cardStyle} elevation={30} cornerRadius={20}>
        <Text
          style={{
            alignSelf: 'center',
            color: '#F39C12',
            fontSize: 22,
            marginBottom: 10,
          }}>
          Time Slots
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}>
          {data.timeSlots.map((item, index) => (
            <Text
              style={[
                styles.cardItem,
                {backgroundColor: '#F7DC6F', borderColor: '#F7DC6F'},
              ]}>
              {item}
            </Text>
          ))}
        </View>
      </Card>

      <Text
        style={{
          alignSelf: 'center',
          fontSize: 18,
          marginBottom: 5,
          color: 'white',
          backgroundColor: 'teal',
          textAlign: 'center',
          textAlignVertical: 'center',
          padding: 10,
          marginTop: 20,
          borderRadius: 5,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        Grades & Subjects
      </Text>

      <View>
        <Text style={styles.selectedGrade}>Grade 05</Text>
        <Card style={styles.cardStyle} elevation={10} cornerRadius={20}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
            }}>
            <Text style={styles.selectedSubject}>English</Text>
            <Text style={styles.selectedSubject}>Maths</Text>
            <Text style={styles.selectedSubject}>Urdu</Text>
            <Text style={styles.selectedSubject}>Computer</Text>
          </View>
        </Card>
      </View>

      <View>
        <Text style={styles.selectedGrade}>Grade 11</Text>
        <Card style={styles.cardStyle} elevation={10} cornerRadius={20}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
            }}>
            <Text style={styles.selectedSubject}>English</Text>
            <Text style={styles.selectedSubject}>Maths</Text>
            <Text style={styles.selectedSubject}>Biology</Text>
            <Text style={styles.selectedSubject}>Physics</Text>
            <Text style={styles.selectedSubject}>Computer</Text>
          </View>
        </Card>
      </View>

      <Text
        style={{
          alignSelf: 'center',
          fontSize: 18,
          marginBottom: 5,
          color: 'white',
          backgroundColor: 'teal',
          textAlign: 'center',
          textAlignVertical: 'center',
          padding: 10,
          marginTop: 20,
          borderRadius: 5,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        Verification
      </Text>
      <Card style={styles.cardStyle} elevation={10} cornerRadius={20}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}>
          <Image
            borderRadius={2}
            source={require('../../res/images/me2.jpg')}
            style={{height: 100, width: 100}}
          />
          <Image
            borderRadius={2}
            source={require('../../res/images/me2.jpg')}
            style={{height: 100, width: 100}}
          />
          <Image
            borderRadius={2}
            source={require('../../res/images/me2.jpg')}
            style={{height: 100, width: 100}}
          />
        </View>
      </Card>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 18,
          marginBottom: 5,
          color: 'white',
          backgroundColor: 'teal',
          textAlign: 'center',
          textAlignVertical: 'center',
          padding: 10,
          marginTop: 20,
          borderRadius: 5,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        About
      </Text>
      <Card style={styles.cardStyle} elevation={10} cornerRadius={20}>
        <Text style={{marginHorizontal: 15, color: 'black'}}>{data.about}</Text>
      </Card>

      <Text
        style={{
          alignSelf: 'center',
          fontSize: 18,
          marginBottom: 5,
          color: 'white',
          backgroundColor: 'teal',
          textAlign: 'center',
          textAlignVertical: 'center',
          padding: 10,
          marginTop: 20,
          borderRadius: 5,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        Contact Details
      </Text>
      <Card style={styles.cardStyle} elevation={10} cornerRadius={20}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}>
          <TouchableOpacity>
            <MaterialIcon name="phone" color="black" size={50}></MaterialIcon>
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcon
              name="whatsapp"
              color="green"
              size={50}></MaterialIcon>
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcon name="gmail" color="#BB001B" size={50}></MaterialIcon>
          </TouchableOpacity>
        </View>
      </Card>

      <TouchableOpacity
        onPress={() => alert('Your request has been recorded...')}>
        <Text
          style={[
            styles.cardItem,
            {alignSelf: 'center', padding: 10, paddingHorizontal: '40%'},
          ]}>
          Hire
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardStyle: {
    padding: 25,
    alignSelf: 'center',
    marginBottom: 15,
    backgroundColor: 'white',
  },
  cardItem: {
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#58D68D',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
    color: 'white',
    backgroundColor: '#58D68D',
    marginBottom: 5,
    marginTop: 5,
  },
  selectedSubject: {
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#F39C12',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
    color: 'white',
    backgroundColor: '#F39C12',
    marginBottom: 5,
  },

  selectedGrade: {
    borderWidth: 3,
    borderColor: '#F39C12',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
    color: 'white',
    backgroundColor: '#F39C12',
    marginBottom: 5,
    marginHorizontal: 5,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },

  selectedSubject: {
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
    color: 'white',
    backgroundColor: '#F39C12',
    marginBottom: 5,
  },
});

export default index;
