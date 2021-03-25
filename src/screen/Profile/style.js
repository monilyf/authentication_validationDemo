import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      // marginHorizontal:40,
      marginVertical: 40,
      // flex:1,
      // alignItems:'center',
      // justifyContent:'center'
    },
    values: {
      marginHorizontal: 40,
      paddingVertical:20,
    },
    centerValues: {
      // flex:1,
      alignItems: 'center',
    },
    backgroundStyle: {
      // flex:1,
      marginTop: 10,
      backgroundColor: '#ffefa1',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    header: {
      fontSize: 25,
      textAlign: 'center',
    },
    underLine: {
      marginVertical: 10,
      borderWidth: 2,
      borderColor: '#8e7f7f',
      borderRadius: 10,
      width: 40,
      alignItems: 'center',
    },
    
    logoutbtn:{
        alignItems:'flex-end'
    },
    logout: {
      marginBottom: 4,
      color: '#fff',
      fontSize: 20,
      textAlign: 'right',
      letterSpacing: 1,
      paddingVertical:20,
      paddingHorizontal:40,
      backgroundColor:'#ff4401',
      borderTopLeftRadius:30
    },
  });

  export default styles;