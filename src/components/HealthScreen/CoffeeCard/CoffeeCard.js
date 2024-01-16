import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import styles from './CoffeeCard.Style'
import { formatDistance, parseISO, } from 'date-fns'
import { tr, en } from 'date-fns/locale'
import Icon from '@expo/vector-icons/AntDesign'
import Color from '../../../styles/Color'
import { remove, ref } from 'firebase/database';
import { database } from '../../../../firebaseConfig';
import { useTranslation } from 'react-i18next'
import i18next from '../../../Translate/i18n'
import { useSelector } from 'react-redux'
import Swipeout from 'react-native-swipeout'
const CoffeeCard = ({ usedCoffee, id, SwipeOut }) => {
  const language = useSelector(state => state.user.t)
  const { t } = useTranslation();

  const formatedDate = formatDistance(parseISO(usedCoffee.date),
    new Date(), {
    addSuffix: true,
    locale: language == 'tr' ? tr : en
  });

  useEffect(() => {
    i18next.changeLanguage(language)
  }, [language])


  //remove(ref(database, 'REFERENCE_PATH'));
  function deleteData() {
    console.log(id)
    remove(ref(database, `Coffee/${id}`))
  }

  return (
    <Swipeout
      right={SwipeOut}
      autoClose={true}
      backgroundColor='#fffefc'>
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
    </Swipeout>
  )
}

export default CoffeeCard

