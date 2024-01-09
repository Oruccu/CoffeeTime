import { FlatList, SafeAreaView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Health.Styles'
import { database } from "../../../firebaseConfig";
import { useSelector } from 'react-redux'
import ParseData from '../../utils/ParseData'
import CoffeeCard from '../../components/CoffeeCard'
import { onValue, ref } from 'firebase/database'
import Loading from '../../components/Loading';
import FloatingButton from '../../components/FloatingButton'
import CoffeineModal from '../../components/Modal/CaffeineModal/CoffeineModal';
const Health = () => {
  const [coffeeData, setCoffeeData] = useState([])
  const [loading, setLoading] = useState(false);
  const UserData = useSelector(state => state.user)
  const [modalisVisible, setModalisVisible] = useState(false)

  useEffect(() => {
    setLoading(true)
    const refData = ref(database, 'UsedCoffe/')
    onValue(refData, (snapshot) => {
      const data = snapshot.val();
      //console.log(data)
      const parsedData = ParseData(data)
      //console.log(parsedData);
      setCoffeeData(parsedData)
      setLoading(false)
    })
  }, [])

  const renderData = ({ item }) => 
  <CoffeeCard usedCoffee={item.pushData} id={item.id}/>
  
  if(loading== true){
    return <Loading/>
  }
  
  function handleToggle() {
    setModalisVisible(!modalisVisible)
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
      <Text style={styles.data}>Hoşgeldin {UserData.user.name}</Text>
      </View>
      <FlatList
        data={coffeeData}
        renderItem={renderData} />
      <FloatingButton 
      PressIcon={handleToggle}/>
      <CoffeineModal visible={modalisVisible} onClose={handleToggle}
      />
    </SafeAreaView>
  )
}

export default Health




