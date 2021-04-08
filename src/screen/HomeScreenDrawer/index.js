import React, {Component} from 'react';
import {Text, View} from 'react-native';
import BottomTabNavigator from '../BottomTabNavigator';
import Home from '../Home';
import Setting from '../Setting';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
 
const Drawer = createDrawerNavigator();

class HomeScreenDrawer extends Component {
  render() {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
       
        drawerContentOptions={{
          activeTintColor: '#e91e63',
        //   itemStyle: {marginTop: 150},
            
        }}
       
        >
        {/* <Drawer.Screen name="Home" component={BottomTabNavigator} /> */}
        <Drawer.Screen name="Home" component={Home}   options={{ drawerIcon:(color)=>(<Icon name="home" color={color} size={25} />) }}/>
        <Drawer.Screen name="Profile" component={Profile}  options={{ drawerIcon:(color)=>(<Icon name="user" color={color} size={25} />) }}/>
      </Drawer.Navigator>
    );
  }
}

export default HomeScreenDrawer;
