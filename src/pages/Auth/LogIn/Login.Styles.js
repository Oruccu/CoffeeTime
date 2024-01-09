import { StyleSheet, Dimensions, Platform } from "react-native";
import Color from "../../../styles/Color";
const HEIGHT = Dimensions.get('screen').height
export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    innercontainer: {
        flex:1,
        margin:10,
        marginTop:30
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
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        marginTop:200
    }
})