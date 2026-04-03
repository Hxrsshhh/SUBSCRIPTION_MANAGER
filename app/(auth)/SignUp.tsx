import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignUp = () => {
  return (
    <View className='h-screen-safe bg-green-200'>
      <Text>Sign-Up</Text>
      <Link href='/(auth)/SignIn' className='bg-green-500 p-3 rounded-2xl mt-4' >Go to Sign In</Link>
    </View>
  )
}

export default SignUp