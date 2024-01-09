import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Modal from 'react-native-modal'
import styles from './CoffeineModal.style'
import { onValue, ref } from 'firebase/database'
import { database } from '../../../../firebaseConfig'
import ParseData from '../../../utils/ParseData'
const CoffeineModal = ({ visible, onClose }) => {
  const [coffeeData, setCoffeeData] = useState([])
  const [loading, setLoading] = useState(false);

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
  const newData = coffeeData.map((item) => item.pushData.coffeine)
  var TotalCoffee = 0
  for (let i = 0; i < newData.length; i++) {
    const numberData = Number(newData[i])
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
          <Text>Bugün Tüketilen Kafein Oranı </Text>
        </View>
      </Modal>
    </View>
  )
}

export default CoffeineModal