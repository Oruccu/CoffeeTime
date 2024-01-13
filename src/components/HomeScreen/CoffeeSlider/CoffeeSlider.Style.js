import { StyleSheet } from "react-native";
import Color from "../../../styles/Color";

export default StyleSheet.create({
    dataContainer:{
        width:70,
        height:70,
        borderWidth:0.5,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:35,
        borderColor:Color.DarkBrown,
    },
    data:{
        fontSize:23,
        color:Color.Brown,
        fontWeight:'bold'
    },
    container:{
        justifyContent:'center',
        alignItems:'center',
        margin:10
    },
    titleContainer:{
        marginTop:5
    },
    title:{
        color:Color.DarkBrown
    }
})