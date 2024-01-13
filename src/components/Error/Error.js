import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import styles from './Error.Style'
const Error = () => {
  return (
    <View style={styles.animationContainer}>
       <LottieView
        autoPlay
        style={ styles.lottie}
        source={require('../../Assets/Animation/Error.json')}
      />
    </View>
  )
}

export default Error

