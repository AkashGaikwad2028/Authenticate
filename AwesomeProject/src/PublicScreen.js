import React from 'react'
import {View,Text,Button, ImageBackground, TouchableOpacity} from "react-native"

export default function PublicScreen({navigation}) {
  return (
 <View style={{flex:1,position:"relative"}}>
    <ImageBackground source={require("../src/Image/Cigrate.jpg")} style={{flex:1}}/>
    <Text style={{position:"absolute",bottom:400,color:"red",fontSize:25,fontWeight:"bold",marginHorizontal:50, backgroundColor:"white",padding:10,borderRadius:10}}>Public Landing Screen</Text>
    <TouchableOpacity  onPress={()=>navigation.navigate("SignIn")} style={{width:200,position:"absolute",bottom:300,left:90,backgroundColor:"white",padding:15,borderRadius:50}}><Text style={{fontSize:18,color:"black",textAlign:"center",fontWeight:"bold"}}>Go To SignIn</Text></TouchableOpacity>
 </View>
 
  )
}
