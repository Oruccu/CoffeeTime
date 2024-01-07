import { StyleSheet, Dimensions } from "react-native";
import Color from "../../styles/Color";
const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
      },
      image: {
          width: WIDTH,
          height: HEIGHT / 3.5
      },
      dropcontainer: {
          flexDirection:'row',
          marginRight:10,
          marginLeft:10,
          justifyContent:'center',
          alignItems:'center',
      },
      coffecupcontainer:{
          flex:1,
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center'
      },
      coffeetext:{
        marginRight:10
      },
      text:{
        fontSize:20,
      },
      Answer:{
        marginTop:30,
        marginLeft:20,
        flex:1
      },
      AnswerText:{
        fontSize:20,
        color:Color.DarkBrown
      }
 
})