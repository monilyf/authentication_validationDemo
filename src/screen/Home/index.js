<<<<<<< HEAD
import React from 'react';
import {
  FlatList,
  Image,
  Linking,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style'
import Routes from '../../router/routes';
const DATA = [
  {
    id: '1',
    title: 'C',
    founder: "Dennis Ritchie",
    link:'https://www.learn-c.org/',
    logo: require('../../assets/images/c.png'),
    description:"C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions."
  },
  {
    id: '2',
    title: 'C++',
    founder:'Bjarne Stroustrup',
    link:'https://www.w3schools.com/cpp/',
    logo: require('../../assets/images/c++.png'),
    description:"C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or 'C with Classes'"
  },
  {
    id: '3',
    title: 'Java',
    founder:'James Gosling',
    link:'https://www.javatpoint.com/java-tutorial',
    logo: require('../../assets/images/java.png'),
    description:"Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. ... Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture."
  },
  {
    id: '4',
    title: 'JavaScript',
    founder:'Brendan Eich',
    link:'https://www.learn-js.org/',
    logo: require('../../assets/images/js.png'),
    description:"JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions."
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
     <View style={{flexDirection:'column',marginLeft: 30,marginTop:0}}>
     <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.primaryText}>{item.founder}</Text>
     </View>
      <TouchableOpacity onPress={onPress} style={styles.rightIcon} >
      <Icon name="chevron-right" size={40} color='#2e7575'/>
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
  console.log('from home')

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <Item
              item={item}
              onPress={() => this.props.navigation.navigate(Routes.Details   ,item)}
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

export default Home;
=======
import React from 'react';
import {
  FlatList,
  Image,
  Linking,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style'
const DATA = [
  {
    id: '1',
    title: 'C',
    founder: "Dennis Ritchie",
    link:'https://www.learn-c.org/',
    logo: require('../../assets/images/c.png'),
    description:"C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions."
  },
  {
    id: '2',
    title: 'C++',
    founder:'Bjarne Stroustrup',
    link:'https://www.w3schools.com/cpp/',
    logo: require('../../assets/images/c++.png'),
    description:"C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or 'C with Classes'"
  },
  {
    id: '3',
    title: 'Java',
    founder:'James Gosling',
    link:'https://www.javatpoint.com/java-tutorial',
    logo: require('../../assets/images/java.png'),
    description:"Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. ... Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture."
  },
  {
    id: '4',
    title: 'JavaScript',
    founder:'Brendan Eich',
    link:'https://www.learn-js.org/',
    logo: require('../../assets/images/js.png'),
    description:"JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions."
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
     <View style={{flexDirection:'column',marginLeft: 30,marginTop:0}}>
     <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.primaryText}>{item.founder}</Text>
     </View>
      <TouchableOpacity onPress={onPress} style={styles.rightIcon} >
      <Icon name="chevron-right" size={40} color='#2e7575'/>
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
              onPress={() => this.props.navigation.navigate('Details',item)}
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

export default Home;
>>>>>>> c6b6b7943909f6a3bd95a12249d6bfeebf4a92dc
