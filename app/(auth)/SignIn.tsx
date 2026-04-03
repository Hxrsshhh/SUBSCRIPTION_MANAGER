import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignIn = () => {
  return (
    <View className='h-screen-safe bg-green-200'>
      <Text>sign-in</Text>
      <Link href='/(auth)/SignUp' className='bg-green-500 p-3 rounded-2xl mt-4' >Go to Sign Up</Link>

       <Link href="/" className='bg-green-500 p-3 rounded-2xl mt-4' >back to home</Link>
    </View>
  )
}

export default SignIn