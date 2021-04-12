import React, {Component} from 'react';
import {Text, View} from 'react-native';
import BottomTabNavigator from '../BottomTabNavigator';
import Home from '../Home';
import Setting from '../Setting';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomDrawer from './CustomDrawer';
import Routes from '../../router/routes'
import Details from '../Details'
const Drawer = createDrawerNavigator();
// import {createStackNavigator} from '@react-navigation/stack';
// const Stack = createStackNavigator();


class HomeScreenDrawer extends Component {
  render() {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          marginHorizontal:30
        }}
        drawerContent={props => <CustomDrawer {...props} />}>
        {/* <Drawer.Screen name="Home" component={BottomTabNavigator} /> */}
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({color}) => (
              <Icon name="home" color={color} size={25} />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerIcon: ({color}) => (
              <Icon name="user" color={color} size={25} />
            ),
          }}
        />
      </Drawer.Navigator>
      // <Stack.Navigator initialRouteName={Routes.Home} >
      //   <Stack.Screen
      //     name={Routes.Home}
      //     // component={HomeScreenDrawer}
      //     component={BottomTabNavigator}
      //     options={{headerShown: false}}
          // options={({navigation}) => ({
          //   title: 'Home',
          //   headerStyle: {
          //     backgroundColor: '#e0f4f4',
          //   },
          //   headerTintColor: '#2e7575',
          //   headerTitleAlign: 'center',
          //   headerRight: () => (
          //     <Icon
          //       onPress={() => navigation.navigate(Routes.Profile)}
          //       name="account-details" //"person-outline"
          //       color="#2e7575"
          //       size={35}
          //       s
          //       style={{marginRight: 20}}
          //     />
          //   ),
          // })}
        // />
        /* <Stack.Screen
          name={Routes.Details}
          component={Details}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routes.Profile}
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen name={Routes.Setting} component={Setting}/>
  
      </Stack.Navigator> */
    );
  }
}

export default HomeScreenDrawer;
