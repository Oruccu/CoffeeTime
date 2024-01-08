import { StyleSheet } from "react-native";
import Color from '../../styles/Color'
export default StyleSheet.create({
    container:{
        margin:5,
        padding:10,
        borderWidth:1,
        borderColor:Color.Brown,
        borderRadius:20,
        flex:1
    },
    text:{
        color:Color.DarkBrown
    },
    coffeeName:{
        color:Color.DarkBrown,
        fontSize:20
    },
    time:{
        color:Color.Brown,
    },
    timeContainer:{
        alignItems:'flex-end',

    }
})