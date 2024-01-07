import { Image, View } from 'react-native'
import React from 'react'
import styles from './ImageCard.Styles'

const ImageCard = ({title}) => {
    return (
        <View style={styles.container} >
            <Image style={styles.image} source={require('../../../Assets/image-1.jpeg')}/>
        </View>
    )
}

export default ImageCard

