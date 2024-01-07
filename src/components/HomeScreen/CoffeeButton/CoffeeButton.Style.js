import { StyleSheet } from "react-native";
import Color from "../../../styles/Color";
const baseStyle = StyleSheet.create({
    container:{
        margin:2,
        padding:5,
        borderColor:Color.Brown,
        borderWidth:1,
        width:50,
        height:35,
        justifyContent:'center',
        alignItems:'center'
    },
})
export default{
 Right:
    StyleSheet.create({
        container:{
            ...baseStyle.container,
            borderTopRightRadius:20,
            borderBottomRightRadius:20,
        },
        text:{
            fontSize:15,

        }
    }),
Left :
StyleSheet.create({
    container:{
        ...baseStyle.container,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
    },
    text:{
        fontSize:15,
    }
}),
}