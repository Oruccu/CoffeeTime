import { FlatList, SafeAreaView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Health.Styles'
import { database, auth } from "../../../firebaseConfig";
import { useSelector } from 'react-redux'
import ParseData from '../../utils/ParseData'
import CoffeeCard from '../../components/HealthScreen/CoffeeCard'
import { onValue, ref } from 'firebase/database'
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import FloatingButton from '../../components/HealthScreen/FloatingButton'
import CoffeineModal from '../../components/Modal/CaffeineModal/CoffeineModal';
const Health = () => {
  const [coffeeData, setCoffeeData] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const UserData = useSelector(state => state.user)
  const [modalisVisible, setModalisVisible] = useState(false)
  const userId = auth.currentUser.uid

  useEffect(() => {
      setError(true)
      const refData = ref(database, `UsedCoffe/${userId}`)
      onValue(refData, (snapshot) => {
        const data = snapshot.val();
        if (data != null) {
          const parsedData = ParseData(data)
          console.log(parsedData);
          setCoffeeData(parsedData)
          setError(false)
        }
      }) 
  }, [])
  const renderData = ({ item }) =>
    <CoffeeCard usedCoffee={item.pushData} id={item.id} />

  if (loading == true) {
    return <Loading />
  }

  function handleToggle() {
    setModalisVisible(!modalisVisible)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.data}>Hoşgeldin {UserData.user.name}</Text>
      </View>
      {
        !error ? (
          <>
            <FlatList
              data={coffeeData}
              renderItem={renderData} />
            <FloatingButton
              PressIcon={handleToggle} />
            <CoffeineModal visible={modalisVisible} onClose={handleToggle}
            />
          </>
        ) : (
          <Error />
        )
      }
    </SafeAreaView>
  )
}

export default Health




