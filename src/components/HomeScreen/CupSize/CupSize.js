import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './CupSize.Style'
const CupSize = ({ Small, Medium, Large, THEME }) => {
  return (
    <View style={styles['Primary'].container}>
      <View style={styles['Primary'].sizeContainer}>
        <Text style={styles['Primary'].sizeText}>Size</Text>
      </View>
      <View style={styles['Primary'].innerContainer}>
        <TouchableOpacity onPress={Small}>
          <View style={styles[THEME].imageContainer} >
          <Image style={styles['Primary'].imageSmall} source={require('../../../Assets/coffee-cup-4.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Medium} >
          <View style={styles[THEME].imageContainer}>
          <Image style={styles['Primary'].imageMedium} source={require('../../../Assets/coffee-cup-4.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Large} >
          <View style={styles[THEME].imageContainer}>
          <Image style={styles['Primary'].imageLarge} source={require('../../../Assets/coffee-cup-4.png')} />
          </View >
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CupSize

