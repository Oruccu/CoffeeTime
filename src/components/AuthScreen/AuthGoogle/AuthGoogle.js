import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './AuthGoogle.Styles'
import Icon from '@expo/vector-icons/AntDesign'
const AuthGoogle = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.icon}>
                    <Icon name='google' size={30} color={'#7ab3ef'} />
                </View>
                <Text style={styles.text}>Google ile giriş yap</Text>
            </View>
        </TouchableOpacity>
    )
}

export default AuthGoogle

