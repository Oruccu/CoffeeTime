import { StyleSheet, Platform } from "react-native";
import Color from "../../../styles/Color";
export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    image: {
        flex: 1.4,
        borderBottomLeftRadius: 500,
        ...Platform.select({
            ios: {
                resizeMode: 'cover',
            },
            android: {
                width: 395,
                height: 500,
                marginLeft: 50,
            },
        }),
    },
    innercontainer: {
        ...Platform.select({
            ios: {
                flex: 2
            },
            android: {
                flex: 3,
            },
        }),
    },
    message: {
        marginLeft: 15,
        color: Color.Brown,
    },
    text: {
        fontSize: 27,
        color: Color.Brown,
    },
    textcontainer: {
        marginLeft: 15
    }
})