import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from './src/screen/SignIn';
import SignUp from './src/screen/SignUp';
import Home from './src/screen/Home';
import SplashScreen from './src/screen/SplashScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Auth from './src/Authentication/Auth';

import Details from './src/screen/Details';
import Profile from './src/screen/Profile';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RootNavigator from './src/router'

const Stack = createStackNavigator();

const App=() => {

      const [Splash, setSplash] = useState(true);
      useEffect(() => {
        setTimeout(async () => {
          setSplash(false);
        }, 4000);
      }, []);
      if (Splash) {
        return <SplashScreen />;
      }
  
    return (
    
        <RootNavigator />
      
)};




// const App = ({navigation}) => {
//   const [Splash, setSplash] = useState(true);
//   useEffect(() => {
//     setTimeout(async () => {
//       setSplash(false);
//     }, 4000);
//   }, []);
//   if (Splash) {
//     return <SplashScreen />;
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SignIn">
//         <Stack.Screen
//           name="SignIn"
//           component={SignIn}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="SignUp"
//           component={SignUp}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={({ navigation }) => ({
//             title: 'Home',
//             headerStyle: {
//               backgroundColor: '#e0f4f4',
//             },
//             headerTintColor: '#2e7575',headerTitleAlign:'center',
//             headerRight:()=>(
//           <Icon
//           onPress={()=>navigation.navigate('Profile')}
//             name='account-details' //"person-outline"
//             color="#2e7575"
//             size={35}
//             s
//             style={{ marginRight: 20}}
//           />
//        )
//             })}
//         />
//         <Stack.Screen
//           name="Details"
//           component={Details}
//           options={{headerShown: false}}
//         />
//          <Stack.Screen
//           name="Profile"
//           component={Profile}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Auth"
//           component={Auth}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

export default App;
