import { StyleSheet } from "react-native";
import Color from "../../../styles/Color";

export default StyleSheet.create({
    container:{
        marginRight:20,
        marginLeft:20,
        marginTop:20,
        paddingRight:20,
        paddingLeft:20,
        paddingTop:5,
        paddingBottom:5,
        flexDirection:'row',
        borderWidth:1,
        alignItems:'center',
        borderColor:Color.Brown,
        borderRadius:20,
    },
    icon:{
        marginRight:20,
    },
    text:{
        color:Color.DarkBrown  
    }
})