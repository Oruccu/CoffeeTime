import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import styles from './Success.Style'
const Success = () => {
  return (
    <View style={styles.animationContainer}>
       <LottieView
        autoPlay
        style={ styles.lottie}
        source={require('../../Assets/Animation/Success.json')}
      />
    </View>
  )
}

export default Success

