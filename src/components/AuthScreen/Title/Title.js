import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './Title.Styles'
const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        Bir kahveye ne dersin!</Text>
      </View>
  )
}

export default Title

