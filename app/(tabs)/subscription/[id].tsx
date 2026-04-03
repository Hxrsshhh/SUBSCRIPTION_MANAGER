import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Subscriptiondetail = () => {

  const { id } = useLocalSearchParams<{id:string}>();
  return (
    <View>
      <Text>subscription detail : {id}</Text>
    </View>
  )
}

export default Subscriptiondetail