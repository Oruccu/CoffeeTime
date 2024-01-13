import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './CoffeeCard.Style'
import { formatDistance, parseISO, } from 'date-fns'
import { tr } from 'date-fns/locale'
import Icon from '@expo/vector-icons/AntDesign'
import Color from '../../../styles/Color'
import { remove, ref } from 'firebase/database';
import { database } from '../../../../firebaseConfig'
const CoffeeCard = ({ usedCoffee, id }) => {

  const formatedDate = formatDistance(parseISO(usedCoffee.date), new Date(), {
    addSuffix: true,
    locale: tr
  });
  //remove(ref(database, 'REFERENCE_PATH'));
  function deleteData() {
    console.log(id)
    remove(ref(database, `Coffee/${id}`))
  }

  return (

    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.coffeeName}>
          {usedCoffee.coffeeName}
        </Text>
      </View>
    </View>
  )
}

export default CoffeeCard

