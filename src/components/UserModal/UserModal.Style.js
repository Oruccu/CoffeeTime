import { StyleSheet, Dimensions } from "react-native";
import Color from "../../styles/Color";
HEİGHT = Dimensions.get('screen').height
WIDTH = Dimensions.get('screen').width
export default StyleSheet.create({
    container:{
        height:HEİGHT/3.5,   
        backgroundColor:Color.Cream,
        borderRadius:30,
    },

})