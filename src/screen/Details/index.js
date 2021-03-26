
import React from 'react'
import { View, Text,StyleSheet,Image,Linking } from 'react-native'
import SubmitButton from '../../Components/SubmitButton'



const Details = (props) => {
    const {title,founder,description,logo,link}=props.route.params;
    // console.log(title,founder,logo)
    var url=JSON.stringify({link});
    console.log(link)
    console.log(typeof(url),url)

    
    return (
        <View
        style={styles.container}>
            <Image style={styles.headBG} resizeMode='cover' source={require('../../assets/images/HeadBG.jpg')}/>
            <View style={styles.descriptionContainer}>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={logo}/>
            </View>

            <View style={{marginHorizontal:30,bottom:40}}>
            <Text style={{fontSize:22,color:'#000'}}>By {' '}<Text style={styles.founder}>{founder}</Text></Text>
            </View>
           
            <Text style={styles.desc}>{description}</Text>
            <SubmitButton
                  onPress={ ()=> Linking.openURL(link) } 
                  buttonText="Learn More"
                />


            </View>

        </View>
    )
}

export default Details


const styles = StyleSheet.create({
    container:{
        // backgroundColor: '#000',
            // flex: 1,
    },
imageContainer:{
    alignItems:'center',
  
    // alignItems:'center'
},
headBG:{
    height:210,
    width:'100%',
    alignItems:'center',
},
image:{
    height:120,
    width:100,
    // position:'relative',
    bottom:60,
    // backgroundColor:'red'
},
descriptionContainer:{

    width:'100%',
    height:700,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    backgroundColor:'#fff',
    position:'absolute',
    top:190
},
founder:{
   
    fontSize:26,
    fontWeight:'bold',
    letterSpacing:1,
    color:'#000',
    // marginBottom:15

},
desc:
{
    fontSize:16,
    marginHorizontal:30,
    color:'#003a79',
    lineHeight:30,
    marginBottom:30
    
    
}
});
