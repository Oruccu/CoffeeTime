import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './CoffeeSlider.Style'

const CoffeeSlider = ({ data, title }) => {

  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <Text style={styles.data}>{data}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text>{title}</Text>
      </View>
    </View>
  )
}

export default CoffeeSlider

