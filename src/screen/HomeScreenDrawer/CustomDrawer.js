import { DrawerContentScrollView, DrawerItemList,DrawerItem } from '@react-navigation/drawer'
import React from 'react'
import { View, Text,Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Routes from '../../router/routes'

const CustomDrawer = ({...props}) => {
    return (
       <DrawerContentScrollView {...props}>
       <View style={{flex:1,alignItems:'center',margin:30}}>
           <Image source={require('../../assets/images/user.png')} style={{height:80,width:80}}/>
           <View style={{alignItems:'center',marginTop:20}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Olia Gozha</Text>
            <Text style={{fontSize:16,color:'#a5a5a5'}}>14,220 followers</Text>

           </View> 
       </View>
        <DrawerItemList {...props}/>
            <DrawerItem label='Sign out' icon={({color})=>(<Icon name='sign-out' size={25} color={color}/>)} />
        
       </DrawerContentScrollView>
    )
}

export default CustomDrawer
