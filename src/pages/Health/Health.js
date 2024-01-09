import { FlatList, SafeAreaView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Health.Styles'
import { auth, database } from "../../../firebaseConfig";
import { useSelector } from 'react-redux'
import ParseData from '../../utils/ParseData'
import CoffeeCard from '../../components/CoffeeCard'
import { onValue, ref } from 'firebase/database'

const Health = () => {

  const [coffeeData, setCoffeeData] = useState([])
  const UserData = useSelector(state => state.user)

  useEffect(() => {
    const refData = ref(database, 'UsedCoffe/')
    onValue(refData, (snapshot) => {
      const data = snapshot.val();
      //console.log(data)
      const parsedData = ParseData(data)
      console.log(parsedData);
      setCoffeeData(parsedData)
    })
  }, [])

  const renderData = ({ item }) => <CoffeeCard usedCoffee={item.pushData} id={item.id}/>
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.data}>Hoşgeldin {UserData.user.name}</Text>
      <FlatList
        data={coffeeData}
        renderItem={renderData} />
    </SafeAreaView>
  )
}

export default Health




