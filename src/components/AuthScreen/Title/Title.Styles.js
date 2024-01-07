import { StyleSheet, Platform } from "react-native";
import Color from "../../../styles/Color";
export default StyleSheet.create({
    title:{
        color:Color.Brown, 
        ...Platform.select({
            ios: {
                fontSize:35,
            },
            android: {
                fontSize:30,
            },
          }),
    },
    titleContainer:{
        margin:30,
    }
})