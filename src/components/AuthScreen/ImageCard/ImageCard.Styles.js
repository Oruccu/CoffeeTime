import { StyleSheet, Dimensions } from "react-native";

const Height = Dimensions.get('window').height
const Width = Dimensions.get('window').width
export default StyleSheet.create({
    container:{
        alignItems:'center'
    },
    image:{
        height:Height/3,
        resizeMode:'contain',
    }
})