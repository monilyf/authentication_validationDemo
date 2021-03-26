<<<<<<< HEAD
import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Routes from './routes';
import Home from '../screen/Home';
import Details from '../screen/Details';
import Profile from '../screen/Profile';
import Auth from '../../src/Authentication/Auth';
const Stack = createStackNavigator();

const Authenticated = () => {
  console.log('Form Authenticated');
  return (
    <Stack.Navigator initialRouteName={Routes.Home}>
      <Stack.Screen
        name={Routes.Home}
        component={Home}
        options={({navigation}) => ({
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
              style={{marginRight: 20}}
            />
          ),
        })}
      />
      <Stack.Screen
        name={Routes.Details}
        component={Details}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.Profile}
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Authenticated;
=======
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './routes';
import Home from '../screen/Home';

const Stack = createStackNavigator();

const Authenticated = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Routes.Home}>
                <Stack.Screen name={Routes.Home} component={Home} />
                {/* <Stack.Screen name={Routes.Details} component={Details}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Authenticated;
>>>>>>> c6b6b7943909f6a3bd95a12249d6bfeebf4a92dc
