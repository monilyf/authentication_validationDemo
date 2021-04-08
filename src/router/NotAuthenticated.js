import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './routes';
import SignIn from '../screen/SignIn';
import SignUp from '../screen/SignUp';
import Auth from '../Authentication/Auth';

const Stack = createStackNavigator();

const NonAuthenticated = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name={Routes.SignIn}
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.Auth}
        component={Auth}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.SignUp}
        component={SignUp}
        options={{headerShown: false}}
      />
      {/* <NotAuthStack.Screen name={Routes.Details} component={Details}/> */}
    </Stack.Navigator>
  );
};

export default NonAuthenticated;
