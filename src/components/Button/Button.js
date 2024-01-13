import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './Button.Styles'
const Button = ({ ButtonName, handlePress, THEME }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles[THEME].container} >
        <Text style={styles[THEME].name}>{ButtonName}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button
