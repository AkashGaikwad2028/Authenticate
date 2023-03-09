import React, { useState } from 'react'
import {View,Text, Button} from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PublicScreen from './src/PublicScreen'
import HomeScreen from './src/HomeScreen'
import SignIn from './src/SignIn'
import SignUpScreen from './src/SignUpScreen'
import PasswordForgetScreen from './src/PasswordForgetScreen'

const Stack = createNativeStackNavigator()

export default function App() {

  const [IsAuthnticated,setAuthenticated]=useState(false)
 
  const HandelSignIn=()=>{
    console.log("isAuthenticated")
    setAuthenticated(true)
  }
  

const HandelSignout=()=>{
  console.log("handel-signOut")
  setAuthenticated(false)
}
console.log("isAuthenticated",IsAuthnticated)

const HandelSignup=()=>{
  setAuthenticated(true)
}


  return (
<NavigationContainer>
  <Stack.Navigator>
    {IsAuthnticated ? (
        <Stack.Screen name ="HomeScreen" component={HomeScreen}
        options={{
          headerRight:()=>(
            <Button onPress={HandelSignout} title="Sign Out"/>
          )
        }} 
        />
    ):(
      <>
    <Stack.Screen name ="PublicScreen" component={PublicScreen} options={{animationTypeForReplace:"pop" ,headerShown:false}}/>
      <Stack.Screen name="SignIn" options={{headerShown:false}}>
        {
          (props)=>(
            <SignIn {...props} onSignIn={HandelSignIn}></SignIn>
          )
        } 
      </Stack.Screen>
      <Stack.Screen name="SignUp">
        {
          (props)=>(
            <SignUpScreen {...props} onSignUp={HandelSignup}></SignUpScreen>
          )
        } 
      </Stack.Screen>
      <Stack.Screen name="PasswordForget" component={PasswordForgetScreen}/>
      </>
      
    )}
  </Stack.Navigator>
</NavigationContainer>
  )
}
