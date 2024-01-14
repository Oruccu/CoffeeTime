import { View, Text, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Modal from 'react-native-modal'
import styles from './CoffeineModal.style'
import { onValue, ref } from 'firebase/database'
import { database, auth } from '../../../../firebaseConfig'
import ParseData from '../../../utils/ParseData'
import {PieChart} from "react-native-chart-kit";
import Color from '../../../styles/Color'
import { format, parseISO, subDays, formatRelative } from 'date-fns'
import { number } from 'yup'
import { useSelector } from 'react-redux'

const CoffeineModal = ({ visible, onClose }) => {
  const [coffeeData, setCoffeeData] = useState([])
  const [loading, setLoading] = useState(false);
  const userId = auth.currentUser.uid
  const screenWidth = Dimensions.get("window").width;
  const UserAge = useSelector(state => state.age)

  useEffect(() => {
    setLoading(true)
    const refData = ref(database, `UsedCoffe/${userId}`)
    onValue(refData, (snapshot) => {
      const data = snapshot.val();
      if (data != null) {
        const parsedData = ParseData(data)
        setCoffeeData(parsedData)
        setLoading(false)
      }
    })
  }, [])

  const newCoffeeData = coffeeData.map((item) => item.pushData.coffeine)
  const ChartLabels = Math.floor(number(newCoffeeData))

  const TimeData = coffeeData.map((item) => item.pushData.date)

  var TotalCoffee = 0

  for (let i = 0; i < newCoffeeData.length; i++) {
    const numberData = Number(newCoffeeData[i])
    TotalCoffee = TotalCoffee + numberData
  }

  if(TotalCoffee<400){
    var UsedCoffeine = 400-TotalCoffee
  }
  console.log(UsedCoffeine)
  
  const data = [
    {
      name: "mg Kafein",
      population: TotalCoffee,
      color: '#567189',
      legendFontColor: "#567189",
      legendFontSize: 15
    },
    {
      name: "mg Kalan",
      population: UsedCoffeine,
      color: '#EDE4E0',
      legendFontColor: "#567189",
      legendFontSize: 15
    },
  ];

  return (
    <View>
      <Modal
        style={styles.modal}
        isVisible={visible}
        onBackdropPress={onClose}
        onSwipeComplete={onClose}
        onBackButtonPress={onClose}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <View style={styles.titleContainer}>
            <Text style={styles.title}>Kafein Analizi</Text>
            </View>
            <Image source={require('../../../Assets/coffee.png')} style={styles.image}/>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Bugün Tüketilen Kafein Oranı:  {TotalCoffee} </Text>
            <Text style={styles.title}>Tüketmeniz Gereken Kafein: {UsedCoffeine} </Text>
          </View>

          <View style={styles.LineChart} >
            <PieChart
              data={data}
              width={screenWidth / 1.2}
              height={220}
              accessor={"population"}
              backgroundColor={"transparent"}
              paddingLeft={"15"}
              absolute
              chartConfig={{
                backgroundColor: Color.Brown,
                backgroundGradientFrom: Color.Brown,
                backgroundGradientTo: Color.Brown,
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 30,
                }
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default CoffeineModal