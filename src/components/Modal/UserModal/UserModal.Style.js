import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../styles/Color";
HEİGHT = Dimensions.get('screen').height
WIDTH = Dimensions.get('screen').width
export default StyleSheet.create({
    container:{
        height:HEİGHT/3,   
        backgroundColor:Color.Cream,
        borderRadius:30,
        justifyContent:'center'
    },
    message: {
        marginLeft: 15,
        color: Color.Brown,
    },
    image:{
        width:50,
        height:50
    },
    imageContainer:{
        justifyContent:'center',
        alignItems:'center'
    }

})