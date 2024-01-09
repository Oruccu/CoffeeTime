import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../styles/Color";
HEIGHT = Dimensions.get('screen').height

export default StyleSheet.create({
    modal:{ 

    },
    container:{
        height:HEIGHT/2,   
        backgroundColor:Color.Cream,
        padding:10,
        borderRadius:30
    },
    title:{
        fontSize:15,
        color:Color.DarkBrown
    }
})