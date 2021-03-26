import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
// import Authenticated from './Authenticated';
// import NotAuthenticated from './NotAuthenticated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../screen/SplashScreen';
import Home from '../screen/Home';
import Details from '../screen/Details';
import Profile from '../screen/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SignIn from '../screen/SignIn';
import SignUp from '../screen/SignUp';
import Auth from '../Authentication/Auth';



const Stack = createStackNavigator();

class RootNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  }
  componentDidMount() {
    console.log('router didMount');
    this.checkAuthentication();
  }

  checkAuthentication = async () => {
    let authenticated = await AsyncStorage.getItem('registered_data');
    console.log('checkAuth Authenticated val - ', authenticated);
    if (authenticated != null) {
      this.setState({ isAuthenticated: true });
    } else {
      this.setState({ isAuthenticated: false });
    }
  };

  render() {
    return (
      //    <View style={{height:400,width:400,backgroundColor:'#a5a5a5'}}>
      // {this.state.isAuthenticated==true?
      // <Text>HIII Authenticated</Text>:
      // <Text>HIII Not Authenticated</Text>
      // }
      // </View>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
          {this.state.isAuthenticated ?
            <>
              <Stack.Screen
                name={Routes.Home}
                component={Home}
                options={({ navigation }) => ({
                  title: 'Home',
                  headerStyle: {
                    backgroundColor: '#e0f4f4',
                  },
                  headerTintColor: '#2e7575',
                  headerTitleAlign: 'center',
                  headerRight: () => (
                    <Icon
                      onPress={() => navigation.navigate(Routes.Profile)}
                      name="account-details" //"person-outline"
                      color="#2e7575"
                      size={35}
                      s
                      style={{ marginRight: 20 }}
                    />
                  ),
                })}
              />
              <Stack.Screen
                name={Routes.Details}
                component={Details}
                
              />
              <Stack.Screen
                name={Routes.Profile}
                component={Profile}
                
              />
              <Stack.Screen
                name={Routes.SignIn}
                component={SignIn}
               
              />

              <Stack.Screen
                name={Routes.Auth}
                component={Auth}
                
              />

            </>
            :
            <>
              <Stack.Screen
                name={Routes.SignIn}
                component={SignIn}
                
              />
              <Stack.Screen
                name={Routes.Auth}
                component={Auth}
                
              />
              <Stack.Screen
                name={Routes.SignUp}
                component={SignUp}
                
              />
             
            </>
          }
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default RootNavigator;


// {this.state.isAuthenticated == true ? (
//   <Stack.Screen
//     name={Routes.Authenticated}
//     component={Authenticated}
//     options={{headerShown: false}}
//   />
// ) : (
//   <Stack.Screen
//     name={Routes.NotAuthenticated}
//     component={NotAuthenticated}
//     options={{headerShown: false}}
//   />
// )}