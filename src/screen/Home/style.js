import StyleSheet from 'react-native'
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      borderRadius: 7,
      borderColor: '#edffec',
      marginHorizontal: 16,
      shadowColor: 'red',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
    title: {
      fontSize: 20,
      marginLeft: 30,
      // marginTop: 20,
    },
    detailList: {
      flexDirection: 'row',
    },
    imgStyle: {
      height: 50,
      width: 50,
    },
    rightIcon: {marginTop: 8, position: 'absolute', right: 0},
  });
  