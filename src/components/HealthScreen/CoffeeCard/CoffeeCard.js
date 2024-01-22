import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import styles from './CoffeeCard.Style'
import { formatDistance, parseISO, } from 'date-fns'
import { tr, en } from 'date-fns/locale'
import { ref, remove } from 'firebase/database';
import { database, auth } from '../../../../firebaseConfig';
import { useTranslation } from 'react-i18next'
import i18next from '../../../Translate/i18n'
import { useSelector } from 'react-redux'
import Swipeout from 'react-native-swipeout'
const CoffeeCard = ({ usedCoffee, id, SwipeOut }) => {

  const language = useSelector(state => state.user.t)
  const userId = auth.currentUser.uid
  const { t } = useTranslation();

  const formatedDate = formatDistance(parseISO(usedCoffee.date),
    new Date(), {
    addSuffix: true,
    locale: language == 'tr' ? tr : en
  });

  useEffect(() => {
    i18next.changeLanguage(language)
  }, [language])


 
  function deleteData(id) {
   
  }
  
  
  return (
    <TouchableOpacity onPress={deleteData}>

      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.coffeeName}>
            {usedCoffee.coffeeName}
          </Text>
        </View>
        <View style={styles.information}>
          <Text style={styles.text}>
            {t("KahveAdedi")} {usedCoffee.coffeequantity}
          </Text>
          <Text style={styles.text}>
            {t("TüketilenKafeinMiktarı")} {usedCoffee.coffeine}
          </Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{formatedDate}</Text>
        </View>
      </View>
    </TouchableOpacity>
   
  )
}

export default CoffeeCard

