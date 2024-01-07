import { StyleSheet } from "react-native";
import Color from '../../../styles/Color'
export default StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:10,
        borderBottomWidth:1,
        padding:10,
        borderColor:Color.LightBrown
    },
    sizeContainer:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        marginLeft:30,
    },
    imageSmall:{
        height:40,
        width:40,
    },
    imageMedium:{
        height:55,
        width:55,
    },
    imageLarge:{
        height:65,
        width:65,
        
    },
    imageContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'baseline'
    },
    size:{
        fontSize:20,
        color:Color.DarkBrown
    }
})