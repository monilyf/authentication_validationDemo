// Splash Screen

import React, { Component } from 'react';
import {
  Platform, StyleSheet, View, Text,
  Image,
} from 'react-native';
import styles from "./style";

const SplashScreen = ({navigation}) =>  {

    return (
      <View style={styles.SplashScreen_RootView}>
       
         <Image source={require('../../assets/images/splashScreen1.gif')} style={styles.logo}/>
         
         {/* <View style={styles.SplashScreen_ChildView}>
          <Image source={require('../assests/images/splashScreen1.gif')}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
        </View> */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>By Team{"\n"}  Porter</Text>
        </View>
       
      </View>
    );
  }

export default SplashScreen;