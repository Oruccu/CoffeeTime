import { FlatList, SafeAreaView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Health.Styles'
import { auth, database } from "../../../firebaseConfig";
import { useSelector } from 'react-redux'
import ParseData from '../../utils/ParseData'
import CoffeeCard from '../../components/CoffeeCard'
import { onValue, ref } from 'firebase/database'
import Loading from '../../components/Loading';
const Health = () => {

  const [coffeeData, setCoffeeData] = useState([])
  const UserData = useSelector(state => state.user)
  const [loading, setLoading] = useState(false);

  

  useEffect(() => {
    setLoading(true)
    const refData = ref(database, 'UsedCoffe/')
    onValue(refData, (snapshot) => {
      const data = snapshot.val();
      //console.log(data)
      const parsedData = ParseData(data)
      console.log(parsedData);
      setCoffeeData(parsedData)
      setLoading(false)
    })
  }, [])

  const renderData = ({ item }) => <CoffeeCard usedCoffee={item.pushData} id={item.id}/>
  
  if(loading== true){
    return <Loading/>
  }
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




