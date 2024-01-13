import { StyleSheet, Dimensions } from "react-native";
import Colors from '../../styles/Color'

const Witdh = Dimensions.get('window').width
const baseStyles= StyleSheet.create({
    container:{
        borderWidth:1,
        margin:10,
        borderRadius:20,
        alignItems:'center',
        padding:10,
    },
    name:{
        fontSize:16,
    }
})

export default {
    Primary: StyleSheet.create({
        container:{
            ...baseStyles.container,
            backgroundColor:Colors.Brown,
            borderColor:Colors.Brown
        },
        name:{
            ...baseStyles.name,
            color:Colors.Cream,
        },
      
    }),
    Secondary: StyleSheet.create({
        container:{
            ...baseStyles.container,
            borderColor:Colors.Brown
        },
        name:{
            ...baseStyles.name,
            color:Colors.Brown,
            
        },
    }),

}