import React from 'react';
import {
  FlatList,
  Image,
  Linking,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import Routes from '../../router/routes';
import Profile from '../Profile'
import { connect } from 'react-redux';
import {fetchUserRequest} from '../../redux/reducer/FetchAPI/actions'
// const DATA = [
//   {
//     id: '1',
//     title: 'C',
//     founder: "Dennis Ritchie",
//     link:'https://www.learn-c.org/',
//     logo: require('../../assets/images/c.png'),
//     description:"C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions."
//   },
//   {
//     id: '2',
//     title: 'C++',
//     founder:'Bjarne Stroustrup',
//     link:'https://www.w3schools.com/cpp/',
//     logo: require('../../assets/images/c++.png'),
//     description:"C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or 'C with Classes'"
//   },
//   {
//     id: '3',
//     title: 'Java',
//     founder:'James Gosling',
//     link:'https://www.javatpoint.com/java-tutorial',
//     logo: require('../../assets/images/java.png'),
//     description:"Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. ... Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture."
//   },
//   {
//     id: '4',
//     title: 'JavaScript',
//     founder:'Brendan Eich',
//     link:'https://www.learn-js.org/',
//     logo: require('../../assets/images/js.png'),
//     description:"JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions."
//   },
//   // {
//   //   id: '5',
//   //   title: 'Python',
//   //   logo: require('../assets/images/user1.png'),
//   // },
// ];


const Item = ({item, onPress}) => (
  <View style={[styles.detailList, styles.item]}>
    <Image source={{uri: item.url}} style={styles.imgStyle} />
    <View style={styles.textView}>
      <Text style={styles.title}>{item.title}</Text>
      {/* <Text style={styles.primaryText}>{item.founder}</Text> */}
    </View>
    <TouchableOpacity onPress={onPress} style={styles.rightIcon}>
      <Icon name="chevron-right" size={40} color="#2e7575" />
    </TouchableOpacity>
  </View>
);
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apiData: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     this.setState({apiData: responseJson});
    //   })
    //   .catch(error => console.log(error))
    //   .finally(() => this.setState({isLoading: false}));
    // console.log('from home', this.state.apiData.title);
    console.log('hello from ComponentDidMount')
    this.props.fetchUserRequest()
  }

  render(props) {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      );
    }
    // const {apiData,isLoading}=this.state;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.props.data}
          renderItem={({item}) => (
            <Item
              item={item}
              onPress={() =>
                this.props.navigation.navigate(Routes.Details, item)
              }
            />
          )}
          keyExtractor={item => item.id}
          // extraData={this.selectedId}
        />
        <View></View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps=state=>{
  console.log('mapStatetoProps--state--',state)
  console.log('mapStatetoProps--state--fetchApiReducer',state.fetchApiReducer)
  return({
    data:state.fetchApiReducer.data,
    error:state.fetchApiReducer.error,
  })
}

const mapDispatchToProps=dispatch=>{
  console.log('Dispatch  --')
 return({
   
   fetchUserRequest:()=>dispatch(fetchUserRequest())
 })
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);
