import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './LanguageButton.style'
const LanguageButton = ({ title, handlePress }) => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default LanguageButton