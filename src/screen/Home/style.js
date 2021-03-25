import {StyleSheet} from 'react-native'

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
    marginTop:7,
    color:'#68abab',
   
  },
  title: {
    fontSize: 20,
    fontWeight:'bold',
    color:'#68abab',
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

  
  export default styles;