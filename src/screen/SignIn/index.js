import React, {Component} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Header} from '../../Components/Header';
import styles from '../../Utils/Style';
import Routes from '../../router/routes'
import InputContainer from '../../Components/InputContainer';
import Picker from 'react-native-country-picker-modal';
import SubmitButton from '../../Components/SubmitButton';
export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      toggleIcon: 'eye',
      isSecurePassword: true,
    };
  }
  check_IsNull = () => {
    const {email, password} = this.state;
    if (email == '') {
      alert('please fill email ');
      return false;
    } else if (password == '') {
      alert('please fill password');
      return false;
    }
    this.props.navigation.navigate(Routes.Auth, {
      email: this.state.email,
      password: this.state.password,
    });
    return true;
  };

  handleToggle = () => {
    this.state.isSecurePassword
      ? this.setState({isSecurePassword: false, toggleIcon: 'eye-closed'})
      : this.setState({isSecurePassword: true, toggleIcon: 'eye'});
  };
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
              style={(styles.bgImg, {height: 800})}>
              <View style={{flex:1,marginTop:80}}> 
              <Header/>
              <Text style={{fontSize: 32, textAlign: 'center',marginTop:10,marginBottom:30}}> Login </Text>

              <View
                style={[styles.signContainer]}>
                <InputContainer
                  iconName="email"
                  placeholder="Enter Email"
                  onChangeText={(text) => this.setState({email: text})}
                />
                {this.state.isEmailvalidate ? (
                  <Text style={(styles.errorMsg, {color: 'green'})}>
                    {this.state.emailError}
                  </Text>
                ) : (
                  <Text style={styles.errorMsg}>{this.state.emailError}</Text>
                )}
                <InputContainer
                  iconName="lock"
                  secureText={this.state.isSecurePassword}
                  placeholder="Enter Password"
                  extraIconName={this.state.toggleIcon}
                  onChangeText={(text) => this.setState({password: text})}
                  onToggle={() => this.handleToggle()}
                />
                {this.state.isPasswordvalidate ? (
                  <Text style={(styles.errorMsg, {color: 'green'})}>
                    {this.state.passwordError}
                  </Text>
                ) : (
                  <Text style={styles.errorMsg}>
                    {this.state.passwordError}
                  </Text>
                )}
                <SubmitButton
                  onPress={() => {
                    this.check_IsNull();
                  }}
                  buttonText="Login"
                />

                <View style={styles.footer}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate(Routes.SignUp)}>
                    <Text style={styles.footerText}>
                      Haven't Registered Yet!{' '}
                      <Text style={{fontWeight: 'bold'}}>SignUp</Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              </View>
            </ImageBackground>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default SignIn;
