import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import styles from './style'
const DATA = [
  {
    id: '1',
    title: 'C',
    founder: "Dennis Ritchie",

    logo: require('../../assets/images/c.png'),
  },
  {
    id: '2',
    title: 'C++',
    founder:'Bjarne Stroustrup',
    logo: require('../../assets/images/c++.png'),
  },
  {
    id: '3',
    title: 'Java',
    founder:'James Gosling',
    logo: require('../../assets/images/java.png'),
  },
  {
    id: '4',
    title: 'JavaScript',
    founder:'Brendan Eich',
    logo: require('../../assets/images/js.png'),
  },
  // {
  //   id: '5',
  //   title: 'Python',
  //   logo: require('../assets/images/user1.png'),
  // },
];

const Item = ({item, onPress, style}) => (
 
    <View style={[styles.detailList,styles.item]}>
      <Image source={item.logo} style={styles.imgStyle} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.primaryText}>{item.founder}</Text>
      <TouchableOpacity onPress={onPress} style={styles.rightIcon} >
      <Icon name="chevron-right" size={40} />
  </TouchableOpacity>

    </View>
);

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: '',
    };
  }

  render(props) {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <Item
              item={item}
              onPress={() => this.props.navigation.navigate('Details')}
            />
          )}
          keyExtractor={(item) => item.id}
          // extraData={this.selectedId}
        />
        <View></View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    // marginTop: 10,
  },
  item: {
    // backgroundColor:'#fff',
    marginTop: 20,
    backgroundColor: '#e0f4f4',
    padding: 20,
    marginVertical: 8,
    borderRadius: 7,
    borderColor: '#edffec',
    marginHorizontal: 16,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
  primaryText:{
    fontSize:16,
    marginTop:28,
    // marginLeft:-10
  },
  title: {
    fontSize: 20,
    marginLeft: 30,
    fontWeight:'bold'
    // marginTop: 20,
  },
  detailList: {
    flexDirection: 'row',
  },
  imgStyle: {
    height: 50,
    width: 50,
  },
  rightIcon: {marginTop: 25, position: 'absolute', right: 20},
});

export default Home;
