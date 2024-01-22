import { View, Text, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Modal from 'react-native-modal'
import styles from './CoffeineModal.style'
import {PieChart} from "react-native-chart-kit";
import Color from '../../../styles/Color'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import i18next from '../../../Translate/i18n'
import useFetch from '../../../utils/useFecth';
import useFetchFilter from '../../../utils/useFetchFilter'
const CoffeineModal = ({ visible, onClose }) => {

  const {loading, coffeeData} = useFetchFilter();
  const screenWidth = Dimensions.get("window").width;

  const language = useSelector(state => state.user.t)
  const { t } = useTranslation();

  

  useEffect(()=>{
    i18next.changeLanguage(language)
  }, [language])
  


  const newCoffeeData = coffeeData.map((item) => item.pushData.coffeine)
  

  var TotalCoffee = 0

  for (let i = 0; i < newCoffeeData.length; i++) {
    const numberData = Number(newCoffeeData[i])
    TotalCoffee = TotalCoffee + numberData
  }

  if(TotalCoffee<400){
    var UsedCoffeine = 400-TotalCoffee
  }
 
  
  const data = [
    {
      name: t("mgKafein"),
      population: TotalCoffee,
      color: '#567189',
      legendFontColor: "#567189",
      legendFontSize: 12,
    },
    {
      name: t("mgTüketilen"),
      population: 400,
      color: '#EDE4E0',
      legendFontColor: "#567189",
      legendFontSize: 12,
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
            <Text style={styles.title}>{t("KafeinAnalizi")}</Text>
            </View>
            <Image source={require('../../../Assets/coffee.png')} style={styles.image}/>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>
              {t("BugünTüketilenKafeinOranı")}{TotalCoffee} 
            </Text>
            <Text style={styles.title}>
              {t("TüketmenizGerekenKafein")} {UsedCoffeine} 
              </Text>
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