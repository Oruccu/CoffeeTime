import { Image, View } from 'react-native'
import React from 'react'
import styles from './ImageCard.Styles'

const ImageCard = ({title}) => {
    return (
        <View style={styles.container} >
            <Image style={styles.image} source={require('../../../Assets/coffee-5.jpg')}/>
        </View>
    )
}

export default ImageCard

