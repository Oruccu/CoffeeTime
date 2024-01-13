import { StyleSheet } from "react-native";
import Color from '../../../styles/Color'
export default StyleSheet.create({
    container:{
        flex:1
    },
    dropdown: {
        height: 50,
        borderColor: Color.DarkBrown,
        borderWidth: 0.2,
        borderRadius: 8,
        paddingHorizontal: 8,
        flex:1,
        padding:15
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    dropcontainer: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    coffecupcontainer:{
        flex:1
    }
})