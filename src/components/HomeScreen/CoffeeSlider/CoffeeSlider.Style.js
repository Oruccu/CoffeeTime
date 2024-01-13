import { StyleSheet } from "react-native";
import Color from "../../../styles/Color";

export default StyleSheet.create({
    dataContainer:{
        width:50,
        height:50,
        borderWidth:0.2,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        borderColor:Color.DarkBrown
    },
    data:{
        fontSize:20,
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