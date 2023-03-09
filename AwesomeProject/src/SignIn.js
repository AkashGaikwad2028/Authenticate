import React,{useState}from 'react'
import {View,Text, Button, ImageBackground, TouchableOpacity} from "react-native"
export default function SignIn({onSignIn,navigation}) {
    // const{ onSignIn } = route.params;
    const [show,setShow]=useState(false)

    const ShowModal=()=>{
      setShow(!show)
    }
    
  return (
   <View style={{flex:1,position:'relative'}}>
    <ImageBackground source={require("../src/Image/Moto.png")} style={{flex:1}} resizeMode="stretch" />
   <View style={{position:"absolute",width:"100%",borderRadius:50,borderTopRadius:300,top:10,flexDirection:"row",justifyContent:"center"}}>
   <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:10}}>
    <Text style={{fontSize:70,color:"white",fontWeight:"600"}}>P</Text>
    <Text style={{fontSize:60,color:"white",fontWeight:"600"}}>U</Text>
    <Text style={{fontSize:50,color:"white",fontWeight:"600"}}>B</Text>
    <Text style={{fontSize:40,color:"white",fontWeight:"600"}}>L</Text>
    <Text style={{fontSize:35,color:"white",fontWeight:"600"}}>I</Text>
    <Text style={{fontSize:30,color:"white",fontWeight:"600"}}>C</Text>
    </View>
    <Text style={{fontSize:25,color:"white",position:"relative",top:30}}>-</Text>
    <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginLeft:10}}>
    <Text style={{fontSize:30,color:"white",fontWeight:"600"}}>S</Text>
    <Text style={{fontSize:35,color:"white",fontWeight:"600"}}>I</Text>
    <Text style={{fontSize:40,color:"white",fontWeight:"600"}}>G</Text>
    <Text style={{fontSize:50,color:"white",fontWeight:"600"}}>N</Text>
    <Text style={{fontSize:60,color:"white",fontWeight:"600"}}>I</Text>
    <Text style={{fontSize:70,color:"white",fontWeight:"600"}}>N</Text>
    </View>
   </View>
   <View style={{backgroundColor:"#333300"}}>
    <TouchableOpacity onPress={ShowModal} style={{position:"absolute",width:100,height:100,backgroundColor:"#000033",borderWidth:2,borderColor:"white",left:150,bottom:330,borderRadius:300}}>
      <Text style={{color:"white",fontSize:15,position:"relative",textAlign:"center",top:40}}>Press...</Text>
    </TouchableOpacity>
   </View>
   { show && (
    <> <TouchableOpacity style={{backgroundColor:"red",width:200,padding:20,borderRadius:50}}><Text style={{textAlign:"center",color:"white",fontSize:18}}>SignIn</Text></TouchableOpacity>
 <Text> or </Text>
 <TouchableOpacity onPress={()=> navigation.navigate("SignUp")} style={{backgroundColor:"red",width:200,padding:20,borderRadius:50}}><Text style={{textAlign:"center",color:"white",fontSize:18}}>Sign-Up</Text></TouchableOpacity>
 <TouchableOpacity onPress={()=> navigation.navigate("PasswordForget")} style={{backgroundColor:"red",width:200,padding:20,borderRadius:50}}><Text style={{textAlign:"center",color:"white",fontSize:18}}>Sign-Up</Text></TouchableOpacity>
 </>
   )
   }
   
   </View>
  )
}
