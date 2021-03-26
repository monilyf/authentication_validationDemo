<<<<<<< HEAD
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
import styles from "./style";
import Routes from '../../router/routes'
export class Profile extends Component {
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
                    this.props.navigation.navigate(Routes.SignIn);
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

export default Profile;

=======
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
import styles from "./style";
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

>>>>>>> c6b6b7943909f6a3bd95a12249d6bfeebf4a92dc
