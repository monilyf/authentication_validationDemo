import React, {Component} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PasswordValidate, validation} from '../../Utils/ValidationUtils'
import {ScrollView} from 'react-native-gesture-handler';
import {Header} from '../../Components/Header';
import styles from '../../Utils/Style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputContainer from '../../Components/InputContainer';
import CountryPicker from 'react-native-country-picker-modal';
// import {validateEmail,validateMobile,validateName,validatePassword,checkPassword} from './validation'
import SubmitButton from '../../Components/SubmitButton';
import Routes from '../../router/routes';

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      firstNameError: '',
      lastName: '',
      lastNameError: '',
      toggleIcon: 'eye',
      isSecurePassword: true,  
      country: '',
      email: '',
      emailError: '',
      mobileNo: '',
      mobileError:'',
      password: '',
      passwordError:'',
      cpassword: '',
      cpasswordError: '',
      errorMsg: '',
      errorIcon: 'blank',  
      // isAllvalid:true

    };
  }

  handleToggle = () => {
    this.state.isSecurePassword
      ? this.setState({isSecurePassword: false, toggleIcon: 'eye-closed'})
      : this.setState({isSecurePassword: true, toggleIcon: 'eye'});
  };





  handleOnSubmit=()=>{
    console.log('pwd',this.state.password,this.state.cpassword)
    this.setState({
      firstNameError:validation('name',this.state.firstName),
      lastNameError:validation('name',this.state.lastName),
      emailError:validation('email',this.state.email),
      mobileError:validation('phoneNo',this.state.mobileNo),
      passwordError:validation('password',this.state.password),
      cpasswordError:PasswordValidate(this.state.password,this.state.cpassword)

  })
    // let cpasswordError;
    // cpasswordError = PasswordValidate(this.state.password,this.state.cpassword)
    // this.setState({cpasswordError:cpasswordError})
    if(this.state.emailError!=null ||
      this.state.passwordError!=null ||
      this.state.firstNameError!=null||
      this.state.lastNameError!=null ||
      this.state.mobileError!=null
      ||
      this.state.cpasswordError!=null
      ){
        // isAllvalid=false
        this.props.navigation.navigate(Routes.SignUp);
     
    }
    else{
      // isAllvalid=true
      alert('Done')
      let login_data ={email:this.state.email,password:this.state.password,firstName:this.state.firstName,lastName:this.state.lastName,mobileNo:this.state.mobileNo};
      AsyncStorage.setItem('login_data', JSON.stringify(login_data));
      console.log('login_data from :', login_data);
      this.props.navigation.navigate(Routes.SignIn);
      // return true;
    }

  }
  

  render(props) {
    
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
            enabled={Platform.OS === 'ios' ? true : false}
            style={{flex: 1}}>
            <ImageBackground
              source={require('../../assets/images/bg1.png')}
              style={styles.bgImg}>
              <Header />
              <Text style={{fontSize: 32, textAlign: 'center'}}>
                {' '}
                Create Account{' '}
              </Text>

              <View style={styles.signContainer}>
                <InputContainer
                  iconName="person"
                  errorIcon={this.state.errorIcon}
                  placeholder="First Name"
                  onChangeText={(text) =>
                    this.setState({
                      firstName: text,
                      // firstNameError:validation('name',this.state.firstName)
                    })
                  }
                />
              
                  <Text style={styles.errorMsg}>{this.state.firstNameError}</Text>
            
                <InputContainer
                  iconName="person"
                  errorIcon={this.state.errorIcon}
                  placeholder="Last Name"
                  onChangeText={(text) =>
                    this.setState({
                      lastName: text,
                      // lastNameError:validation('name',this.state.lastName)
                    })
                  }
                />  
              
                  <Text style={styles.errorMsg}>{this.state.lastNameError}</Text>
                <InputContainer
                  iconName="email"
                  errorIcon={this.state.errorIcon}
                  // value={this.state.email}
                  placeholder="Enter Email"
                  onChangeText={(text) =>
                    this.setState({
                      email: text,
                      // emailError:validation('email',this.state.email)
                    })
                  }
                />
                  <Text style={styles.errorMsg}>{this.state.emailError}</Text>

                <InputContainer
                  iconName="phone"
                  errorIcon={this.state.errorIcon}
                  keyboardType="numeric"
                  placeholder="Enter Mobile No."
                  // value={this.state.phone}
                  maxLength={10}
                  onChangeText={(text) =>
                    this.setState({
                      mobileNo: text,
                      // mobileError:validation('phoneNo',this.state.mobileNo)
                    })
                  }
                />
              
                  <Text style={styles.errorMsg}>{this.state.mobileError}</Text>
                {/* <InputContainer iconName='flag' placeholder='Select Country'/> */}
                {/* <View style={style1.inputContainer}>
                  <Icon
                    name="flag" //"person-outline"
                    color="#000"
                    size={20}
                    style={style1.inputIcon}
                  />
                  <CountryPicker style={style1.picker}  onSelect={(country) => this.setState({country:country.name})}>
                    
                  </CountryPicker>
                </View> */}
                <InputContainer
                  iconName="lock"
                  errorIcon={this.state.errorIcon}
                  // value={this.state.password}
                  placeholder="Enter Password"
                  extraIconName={this.state.toggleIcon}
                  onToggle={this.handleToggle}
                  secureText={this.state.isSecurePassword}
                  onChangeText={(text) =>
                    this.setState({
                      password: text,
                      // passwordError:validation('password',this.state.password)
                    })
                  }
                />
                  <Text style={styles.errorMsg}>
                    {this.state.passwordError}
                  </Text>
                <InputContainer
                  iconName="lock"
                  errorIcon={this.state.errorIcon}
                  // value={this.state.cpassword}
                  placeholder="Confirm Password"
                  secureText="true"
                  onChangeText={(text) =>
                    this.setState({
                      cpassword: text,
                      // cpasswordError:PasswordValidate(this.state.password,this.state.cpassword)
                    })
                  }
                  
                />
                  <Text style={styles.errorMsg}>
                    {this.state.cpasswordError}
                  </Text>
                <SubmitButton
                  onPress={this.handleOnSubmit}
                  buttonText="SignUp"
                />

                <View style={styles.footer}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate(Routes.SignIn)}>
                    <Text style={styles.footerText}>
                      Already Registered!{' '}
                      <Text style={{fontWeight: 'bold'}}>Login</Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default SignUp;

const style1 = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom:16,
    borderColor: '#FFF',
    borderWidth: 0.5,
    borderRadius: 14,
    padding:14,
    backgroundColor: '#fff',
  },
   picker: {
    backgroundColor: 'red',
  },
  inputIcon: {marginLeft: 10, marginRight: 20, fontSize: 20, color: '#28388f'},
});
