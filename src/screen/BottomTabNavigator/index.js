import * as React from 'react';
import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../Home';
import Setting from '../Setting';
import HomeScreenDrawer from '../HomeScreenDrawer';

const Tab = createBottomTabNavigator();



export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#182b56',
        inactiveTintColor: '#6f6e92',
      }}
      initialRouteName="Home"
    
    // style={{ backgroundColor: '#e0f4f4' }}
    >
      <Tab.Screen
        name="Home"
        title="Home"
        // component={Home}
        component={HomeScreenDrawer}

        // options={{headerShown: false}}

        options={{
          tabBarLabel: 'HOME',
          tabBarColor: 'red',
          tabBarIcon: ({ color }) => <Icon name="home" color={color} size={26} />,
        }}
      >
       
      </Tab.Screen>
      <Tab.Screen
        name="Setting"
        title="Setting"

        component={Setting}
        options={{
          tabBarLabel: 'Setting',
          tabBarColor: '#f2f4f5',
          tabBarIcon: ({ color }) => <Icon name="gear" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}
