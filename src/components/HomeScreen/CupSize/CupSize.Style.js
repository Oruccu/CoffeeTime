import { StyleSheet } from "react-native";
import Color from '../../../styles/Color'
const baseStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
    },
    imageContainer: {
        flex: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sizeContainer: {
        flex: 1,
        alignItems: 'stretch',
        padding: 15,
        justifyContent: 'center',
        borderTopLeftRadius: 20,
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'baseline'
    },
    imageLarge: {
        height: 50,
        width: 40
    },
    imageMedium: {
        height: 44,
        width: 35
    },
    imageSmall: {
        height: 35,
        width: 30
    },
    sizeText: {
        color: Color.DarkBrown,
        fontSize: 24
    }
})
export default {
    Primary: StyleSheet.create({
        container: {
            ...baseStyle.container
        },
        imageContainer: {
            ...baseStyle.imageContainer
        },
        sizeContainer: {
            ...baseStyle.sizeContainer
        },
        innerContainer: {
            ...baseStyle.innerContainer
        },
        imageLarge: {
            ...baseStyle.imageLarge
        },
        imageMedium: {
            ...baseStyle.imageMedium
        },
        imageSmall: {
            ...baseStyle.imageSmall
        },
        sizeText: {
            ...baseStyle.sizeText
        }
    }),
    Secondary: StyleSheet.create({
        container: {
            ...baseStyle.container
        },
        imageContainer: {
            ...baseStyle.imageContainer,
            borderColor: Color.DarkBrown,
            borderRadius: 10,
            borderWidth: 0.2,
        },
        sizeContainer: {
            ...baseStyle.sizeContainer
        },
        innerContainer: {
            ...baseStyle.innerContainer
        },
        imageLarge: {
            ...baseStyle.imageLarge
        },
        imageMedium: {
            ...baseStyle.imageMedium
        },
        imageSmall: {
            ...baseStyle.imageSmall
        },
        sizeText: {
            ...baseStyle.sizeText
        }
    })
}