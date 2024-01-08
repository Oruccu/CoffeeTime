import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import styles from './Health.Styles'
import Button from '../../components/Button'
import { useSelector } from 'react-redux'

const Health = () => {
  const UserData = useSelector(state => state.user)
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hoşgeldin {UserData.user.name}</Text>
      <Text>{UserData.user.age}</Text>
      <Text>{UserData.user.weight}</Text>
      </SafeAreaView>
  )
}

export default Health



