import { StyleSheet } from "react-native"
import Color from "../../styles/Color"
export default StyleSheet.create({
    container:{
        flex:1,     
    },
    innerContainer:{
        flex:1
    },
    languageText:{
        color:Color.DarkBrown,
        fontSize:20,
    },
    checkBox:{
        margin:10,
        padding:10
    },
    Box:{
        flexDirection:'row',
        justifyContent:'flex-start'

    },
    margin:{
        marginLeft:15
    },
    userContainer:{
        margin:10,
        padding:10,
        borderWidth:0.5,
        borderColor:Color.Brown,
        borderRadius:20

    },
    languageContainer:{
        padding:10,
        margin:10,
        borderWidth:1,
        borderColor:Color.Brown,
        borderRadius:20
    },
    information:{
        padding:10,
        margin:10,
        borderWidth:1,
        borderColor:Color.Brown,
        borderRadius:20
    }
})