import React from 'react'
import {View,Text,Button} from "react-native"

export default function SignUpScreen({onSignUp}) {
  return (
    <View>
<Text>SignUp Screen</Text>
<Button title='SignUp' onPress={onSignUp} />
    </View>
  )
}
