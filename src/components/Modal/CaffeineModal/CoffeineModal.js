import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Modal from 'react-native-modal'
import styles from './CoffeineModal.style'
import { onValue, ref } from 'firebase/database'
import { database, auth } from '../../../../firebaseConfig'
import ParseData from '../../../utils/ParseData'
const CoffeineModal = ({ visible, onClose }) => {
  const [coffeeData, setCoffeeData] = useState([])
  const [loading, setLoading] = useState(false);
  const userId = auth.currentUser.uid
  useEffect(() => {
    setLoading(true)
    const refData = ref(database, `UsedCoffe/${userId}`)
    onValue(refData, (snapshot) => {
      const data = snapshot.val();
      const parsedData = ParseData(data)
      setCoffeeData(parsedData)
      setLoading(false)
    })
  }, [])

  const newCoffeeData = coffeeData.map((item) => item.pushData.coffeine)
  const TimeData = coffeeData.map((item) => item.pushData.date)
  var TotalCoffee = 0
  
  for (let i = 0; i < newCoffeeData.length; i++) {
    const numberData = Number(newCoffeeData[i])
    TotalCoffee = TotalCoffee + numberData
  }

  return (
    <View>
      <Modal
        style={styles.modal}
        isVisible={visible}
        onBackdropPress={onClose}
        onSwipeComplete={onClose}
        onBackButtonPress={onClose}>
        <View style={styles.container}>
          <View>
          <Text style={styles.title}>Bugün Tüketilen Kafein Oranı:  {TotalCoffee} </Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default CoffeineModal