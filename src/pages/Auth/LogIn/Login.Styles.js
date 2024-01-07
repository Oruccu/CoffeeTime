import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../styles/Color";
const HEIGHT = Dimensions.get('screen').height
export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    image: {
        borderBottomLeftRadius: 500,
        resizeMode:'cover',
        maxHeight:HEIGHT/2.6

    },
    innercontainer: {
        margin:10,

    },
    message: {
        marginLeft: 15,
        color: Color.Brown,
    },
    btn: {
        marginTop: 20
    },
    text: {
        fontSize: 27,
        color: Color.Brown,
    },
    textcontainer: {
        marginLeft: 15
    }
})