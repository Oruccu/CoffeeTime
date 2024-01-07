import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './CupSize.Style'
const CupSize = ({Small, Medium, Large}) => {
  return (
    <View style={styles.container}>
      <View style={styles.sizeContainer}>
        <Text style={styles.size}>Size</Text>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={Small} >
          <View>
            <Image source={require('../../../Assets/coffeeCup.png')} style={styles.imageSmall} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Medium}>
          <View>
            <Image source={require('../../../Assets/coffeeCup.png')} style={styles.imageMedium} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Large} >
          <View>
            <Image source={require('../../../Assets/coffeeCup.png')} style={styles.imageLarge} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CupSize

