import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './CoffeeButton.Style'
const CoffeeButton = ({text, onPress, THEME}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles[THEME].container}>
                <Text style={styles[THEME].text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CoffeeButton

