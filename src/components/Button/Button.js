import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './Button.Styles'
const Button = ({ButtonName, handlePress, THEME}) => {
  return (
    <View style={styles[THEME].container} >
      <TouchableOpacity onPress={handlePress}>
        <View style={styles[THEME].btnContainer}>
          <Text style={styles[THEME].name}>{ButtonName}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Button
