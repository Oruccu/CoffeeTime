import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import styles from './Loading.Style'
const Loading = () => {
  return (
    <View style={styles.animationContainer}>
       <LottieView
        autoPlay
        ref={animation}
        style={ styles.lottie}
        source={require('../../Assets/Animation/Loading.json')}
      />
    </View>
  )
}

export default Loading

