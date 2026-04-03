import { Link } from 'expo-router'
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class onboarding extends Component {
  render() {
    return (
      <View className='h-screen-safe bg-red-200'>
        <Text> onboarding Screen </Text>
         <Link href='/(auth)/SignUp' className="bg-primary rounded-2xl p-3 text-white mt-4" >Sign Up</Link>
          <Link href='/(auth)/SignIn' className="bg-primary rounded-2xl p-3 text-white mt-4" >Sign In</Link>
      </View>
    )
  }
}

export default onboarding
