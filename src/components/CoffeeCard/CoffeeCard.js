import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './CoffeeCard.Style'
import { formatDistance, parseISO, } from 'date-fns'
import { tr } from 'date-fns/locale'

const CoffeeCard = ({ usedCoffee }) => {

  const formatedDate = formatDistance(parseISO(usedCoffee.date), new Date(), {
    addSuffix: true,
    locale: tr
  });

  return (

    <View style={styles.container}>
      <View>
        <Text style={styles.coffeeName}>
          {usedCoffee.coffeeName}
        </Text>
        <Text style={styles.text}>
          Bardak Boyutu: {usedCoffee.CupSize}
        </Text>
      </View>
      <Text style={styles.text}>
        Kahve Adedi: {usedCoffee.coffeequantity}
      </Text>
      <Text style={styles.text}>
        Tüketilen Kafein Miktarı: {usedCoffee.coffeine}
      </Text>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{formatedDate}</Text>
      </View>
    </View>
  )
}

export default CoffeeCard

