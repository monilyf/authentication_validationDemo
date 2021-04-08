import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import Authenticated from './Authenticated';
import NotAuthenticated from './NotAuthenticated';
import SplashScreen from '../screen/SplashScreen';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import SplashScreen from '../screen/SplashScreen';
// import Home from '../screen/Home/Home';
// import Details from '../screen/Details';
// import Profile from '../screen/Profile';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import SignIn from '../screen/SignIn';
// import SignUp from '../screen/SignUp';
// import Auth from '../Authentication/Auth';



const Stack = createStackNavigator();

class RootNavigator extends Component {
  

  render() {
    return (
      //    <View style={{height:400,width:400,backgroundColor:'#a5a5a5'}}>
      // {this.state.isAuthenticated==true?
      // <Text>HIII Authenticated</Text>:
      // <Text>HIII Not Authenticated</Text>
      // }
      // </View>

      <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={Routes.Splash}>
         <Stack.Screen name={Routes.Splash} component={SplashScreen} />
         <Stack.Screen name={Routes.Authenticated} component={Authenticated} />
         <Stack.Screen name={Routes.NotAuthenticated} component={NotAuthenticated}/>
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


// <Stack.Navigator >
// {this.state.isAuthenticated ?
//   <>
//     <Stack.Screen
//       name={Routes.Home}
//       component={Home}
//       options={({ navigation }) => ({
//         title: 'Home',
//         headerStyle: {
//           backgroundColor: '#e0f4f4',
//         },
//         headerTintColor: '#2e7575',
//         headerTitleAlign: 'center',
//         headerRight: () => (
//           <Icon
//             onPress={() => navigation.navigate(Routes.Profile)}
//             name="account-details" //"person-outline"
//             color="#2e7575"
//             size={35}
//             s
//             style={{ marginRight: 20 }}
//           />
//         ),
//       })}
//     />
//     <Stack.Screen
//       name={Routes.Details}
//       component={Details}
//       options={{
//           headerShown: false
//       }}
//     />
//     <Stack.Screen
//       name={Routes.Profile}
//       component={Profile}
//       options={{
//           headerShown: false
//       }}
//     />
//     <Stack.Screen
//       name={Routes.SignIn}
//       component={SignIn}
//       options={{
//           headerShown: false
//       }}
//     />

//     <Stack.Screen
//       name={Routes.Auth}
//       component={Auth}
//       options={{
//           headerShown: false
//       }}
//     />

//   </>
//   :
//   <>
//     <Stack.Screen
//       name={Routes.SignIn}
//       component={SignIn}
//       options={{
//           headerShown: false
//       }}
//     />
//     <Stack.Screen
//       name={Routes.Auth}
//       component={Auth}
//       options={{
//           headerShown: false
//       }}
//     />
//     <Stack.Screen
//       name={Routes.SignUp}
//       component={SignUp}
//       options={{
//           headerShown: false
//       }}
//     />
   
//   </>
// }
// </Stack.Navigator>