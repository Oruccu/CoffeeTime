import { StyleSheet, Dimensions } from "react-native";
import Color from "../../styles/Color";
const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height
export default StyleSheet.create({
  titleApp:{
    fontSize:25,
    fontWeight:'bold',
    color:Color.Brown
  },
  titleContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:30
  },
  container: {
    flex: 1,
    backgroundColor: Color.Cream,

  },
  SelectContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  coffeedrop: {
    flex: 1,
    marginLeft:20
  },
  coffecupcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  coffeineText: {
    fontSize: 23,
    color:Color.DarkBrown
  },
  coffeetext:{
    padding:10,
    fontSize:25
  },
  CoffeineContainer: {
    padding:10,
    marginLeft:10
  },
  buttonContainer: {
    marginRight:30,
    marginTop:20
  },
  tabContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10
  },
  dataContainer: {
    justifyContent: 'space-evenly',
    alignItems:'center',
    flex: 1,
    padding: 15,
    margin: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:20
  },
  image: {
    width: WIDTH/1.5 ,
    resizeMode: 'contain',
  },

})

/**

     
 */