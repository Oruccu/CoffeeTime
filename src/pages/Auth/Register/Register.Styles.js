import { StyleSheet, Platform } from "react-native";
import Color from "../../../styles/Color";
export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    image: {
        height:300,
        width:500
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
        fontSize: 40,
        color: Color.Brown,
        fontWeight:'bold'
    },
    textcontainer: {
        justifyContent:'center',
        alignItems:'center',
        marginTop:50
    },
    image:{
        height:100,
        width:100,
    }
})