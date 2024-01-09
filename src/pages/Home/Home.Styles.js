import { StyleSheet, Dimensions } from "react-native";
import Color from "../../styles/Color";
const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height
export default StyleSheet.create({
    container: {
        width:WIDTH,
        height:HEIGHT/1.5,
        backgroundColor:Color.Cream,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
      },
      test:{
        flex:1
      },
      image: {
         flex:1
      },
      coffeedrop:{
        flex:1
      },
      coffecupcontainer:{
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          flex:1
      },
      innercontainer: {
          flexDirection:'row',
          marginRight:15,
          marginLeft:20,
          justifyContent:'center',
          alignItems:'center',
          marginTop:20
      },
      coffeetext:{
        marginRight:10
      },
      text:{
        fontSize:20,
      },
      Answer:{
        flex:1,
        marginHorizontal:20,
        flexDirection:'row',
      },
      AnswerText:{
        fontSize:20,
        color:Color.DarkBrown
      },
      btn:{
        justifyContent:'flex-end',
      },
      textContainer:{
        flex:1
      } 
 
})