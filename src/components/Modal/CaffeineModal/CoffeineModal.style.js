import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../styles/Color";
HEIGHT = Dimensions.get('screen').height

export default StyleSheet.create({
    container:{
        height:HEIGHT/2.3,   
        backgroundColor:Color.Cream,
        padding:10,
        borderRadius:30,
    },
    title:{
        margin:10,
        fontSize:19,
        color:Color.DarkBrown
    },
    LineChart:{
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:Color.DarkBrown,
        borderRadius:30
    },
    titleContainer:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    image:{
        width:40,
        height:40
    },
    innerContainer:{
        justifyContent:'center',

    }
})