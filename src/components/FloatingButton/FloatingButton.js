import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './FloatingButton.Style'
const FloatingButton = ({PressIcon}) => {
    return (
        <TouchableOpacity onPress={PressIcon}>
            <View style={styles.container}>
                <Image
                    source={require('../../Assets/coffee.png')}
                    style={styles.image} />
            </View>
        </TouchableOpacity>
    )
}

export default FloatingButton