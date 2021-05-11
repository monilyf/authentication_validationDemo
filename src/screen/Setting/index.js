import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

// import styles from './style'
import Icon from 'react-native-vector-icons/FontAwesome';
import Routes from '../../router/routes';

const SubComponent = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{flexDirection: 'row', marginVertical: 15, paddingVertical: 15}}>
        {/* <Image source={props.src} style={{ height: 40, width:40 }} /> */}
        <View style={{padding:8,borderRadius:8,backgroundColor:props.color}}>
          <Icon name={props.iconName} size={25} style={{fontWeight:'bold'}} color="#fff" />
        </View>
        <Text style={{fontSize: 25, marginLeft: 25, color: '#2e7575'}}>
          {props.text}
        </Text>
        <Icon
          name="chevron-right"
          size={25}
          color="#2e7575"
          style={{right: 0, top: 19, position: 'absolute'}}
        />
      </View>
    </TouchableOpacity>
  );
};

const BorderComponent = () => {
  return <View style={{borderTopWidth: 1, borderColor: '#2e7575'}}></View>;
};

class Setting extends React.Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor:'#fff',height:'100%'}}>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text
              style={{
                fontSize: 40,
                color: '#182b56',
                letterSpacing: 1,
                fontWeight: 'bold',
              }}>
              Settings
            </Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <BorderComponent />
            <SubComponent text="Profile" iconName="user-o" color='#b4daf7'/>
            <BorderComponent />

            <SubComponent text="Terms & Conditions" iconName="file-text-o" color='#f7d8b4'/>
            <BorderComponent />

            <SubComponent text="Contact & FAQs " iconName="envelope-o" color='#b4f7c3' />
            <BorderComponent />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Setting;

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'green'
    marginHorizontal: 40,
    // marginVertical:40
    // margin:40
  },
  title: {
    marginVertical: 40,
  },
});
