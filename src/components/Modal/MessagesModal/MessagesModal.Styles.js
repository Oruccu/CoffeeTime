import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../styles/Color";
HEIGHT = Dimensions.get('screen').height
export default StyleSheet.create({
    messagesContainer:{
        height:HEIGHT/4,   
        backgroundColor:Color.Cream,
        padding:10,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        margin:10,
        fontSize:20,
        color:Color.DarkBrown
    }

})