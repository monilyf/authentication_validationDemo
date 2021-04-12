import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Routes from './routes';
import Home from '../screen/Home';
import Details from '../screen/Details';
import Profile from '../screen/Profile';
// import Auth from '../../src/Authentication/Auth';
import Setting from '../screen/Setting';
import HomeScreenDrawer from '../screen/HomeScreenDrawer';
import BottomTabNavigator from '../screen/BottomTabNavigator';
const Stack = createStackNavigator();
// import CustomDrawer from '../screen/HomeScreenDrawer/CustomDrawer';

// import Icon from 'react-native-vector-icons/FontAwesome';
// import {createDrawerNavigator} from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();


const Authenticated = () => {
  console.log('Form Authenticated');
  return (
    <Stack.Navigator initialRouteName={Routes.Home} >
      <Stack.Screen
        name={Routes.Home}
        // component={HomeScreenDrawer}
        component={BottomTabNavigator}
        options={{headerShown: false}}
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
      />
      <Stack.Screen
        name={Routes.Details}
        component={Details}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name={Routes.Profile}
        component={Profile}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen name={Routes.Setting} component={Setting}/>

    </Stack.Navigator>

/* <Drawer.Navigator
initialRouteName="Home"
drawerContentOptions={{
  activeTintColor: '#e91e63',
}}
drawerContent={props => <CustomDrawer {...props} />}>
{/* <Drawer.Screen name="Home" component={BottomTabNavigator} />
<Drawer.Screen
  name="Home"
  component={HomeScreenDrawer}
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
</Drawer.Navigator> */
  );
};

export default Authenticated;
