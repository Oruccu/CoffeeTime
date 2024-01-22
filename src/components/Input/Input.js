import { TextInput, View } from 'react-native'
import React from 'react'
import styles from './Input.Styles'
const Input = ({ onChangeText, placeholder, value, isSecure }) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        secureTextEntry={isSecure}
        autoCapitalize='none'
        placeholderTextColor={'#979AAA'}
      />
    </View>
  )
}

export default Input

