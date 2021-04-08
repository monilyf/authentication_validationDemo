import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    // marginTop: 10,
  },
  item: {
    flex:1,
    // backgroundColor:'#fff',
    marginTop: 20,
    // backgroundColor: '#e0f4f4',
    padding: 20,
    marginVertical: 8,
    borderRadius: 3,
    borderColor: '#edffec',
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },
  primaryText:{
    fontSize:16,
    // marginTop:7,
    color:'#68abab',
   
  },
  title: {
    fontSize: 18,
    fontWeight:'bold',
    color:'#68abab',
    // marginTop: 20,
    // width:'45%'
    // marginHorizontal:50
    // marginRight:50
    // justifyContent:'center'
   

  },
  textView:{marginLeft: 30,paddingBottom:0,width:'65%'},
  detailList: {
    flexDirection: 'row',
  },
  imgStyle: {
    height: 50,
    width: 50,
  },
  rightIcon: {
    // marginTop: 25,
    justifyContent:'center',
  },
});

  
  export default styles;