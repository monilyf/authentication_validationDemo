import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ValueContainer from '../../Components/ValueContainer';
import LinearGradient from 'react-native-linear-gradient';

export class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      mobileNo: '',
      password: '',
    };
  }

  componentDidMount() {
    this.check_data();
  }

  check_data = async () => {
    try {
      console.log('registered_data from check_data:', registered_data);

      let user_data = await AsyncStorage.getItem('registered_data');
      var parsed = JSON.parse(user_data);
      this.setState({
        firstName: parsed.firstName,
        lastName: parsed.lastName,
        email: parsed.email,
        mobileNo: parsed.mobileNo,
        password: parsed.password,
      });
      console.log('registered_data from firstName:', parsed.firstName);
    } catch (error) {
      alert(error);
    }
  };

  render(props) {
    // console.log('email render', this.state.email, '---', this.state.password);
    // console.log('registered_data from render firstName:', this.state.firstName);

    return (
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
        }}>
        <View style={styles.container}>
          <View style={styles.centerValues}>
            <Text style={styles.header}>Profile Details</Text>
            <View style={styles.underLine}></View>
            <Image
              source={require('../../assets/images/user1.png')}
              style={{height: 100, width: 100, marginVertical: 20}}
            />
          </View>
          <LinearGradient
           
            style={styles.backgroundStyle}
            start={{x: 0.5, y: 1.0}}
            end={{x: 0.0, y: 0.25}}
            // locations={[0,  0.6]}
            colors={['#012551', '#003a79']}>
            <View style={styles.values}>
              <ValueContainer
                label="First Name"
                labelValue={this.state.firstName}
              />
              <ValueContainer
                label="Last Name"
                labelValue={this.state.lastName}
              />
              <ValueContainer label="Email" labelValue={this.state.email} />
              <ValueContainer
                label="Mobile Number"
                labelValue={this.state.mobileNo}
              />
              </View>
              <View style={styles.logoutbtn}>
                <TouchableOpacity
               
                  onPress={() => {
                    AsyncStorage.clear();
                    this.props.navigation.navigate('SignIn');
                  }}>
                  <Text
                    style={styles.logout}>
                    Logout
                  </Text>
                </TouchableOpacity>
              </View>
            
          </LinearGradient>
        </View>
      </View>
    );
  }
}

export default Details;

const styles = StyleSheet.create({
  container: {
    // marginHorizontal:40,
    marginVertical: 40,
    // flex:1,
    // alignItems:'center',
    // justifyContent:'center'
  },
  values: {
    marginHorizontal: 40,
    paddingVertical:20,
  },
  centerValues: {
    // flex:1,
    alignItems: 'center',
  },
  backgroundStyle: {
    // flex:1,
    marginTop: 10,
    backgroundColor: '#ffefa1',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
  },
  underLine: {
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#8e7f7f',
    borderRadius: 10,
    width: 40,
    alignItems: 'center',
  },
  
  logoutbtn:{
      alignItems:'flex-end'
  },
  logout: {
    marginBottom: 4,
    color: '#fff',
    fontSize: 20,
    textAlign: 'right',
    letterSpacing: 1,
    paddingVertical:20,
    paddingHorizontal:40,
    backgroundColor:'#ff4401',
    borderTopLeftRadius:30
  },
});
