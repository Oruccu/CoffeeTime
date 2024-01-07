import { SafeAreaView, Image, Text, View } from "react-native";
import React, { useState } from "react";
import styles from './Home.Styles'
import CoffeeButton from '../../components/HomeScreen/CoffeeButton'
import DropdownCard from '../../components/HomeScreen/DropdownCard';
import CupSize from '../../components/HomeScreen/CupSize'
import Button from '../../components/Button'
import { auth , database } from "../../../firebaseConfig";

const Home = () => {
  const data = [
    { label: 'Espresso', value: '1' },
    { label: 'Americano', value: '2' },
    { label: 'Cappuccino', value: '3' },
    { label: 'Frappe', value: '4' },
    { label: 'Latte', value: '5' },
    { label: 'Macchiato', value: '6' },
    { label: 'Mocha', value: '7' },
    { label: 'Marocchino', value: '8' },
    { label: 'Filtre Kahve', value: '9' },
    { label: 'Soğuk Kahve', value: '10' },
  ];

  const [coffee, setCoffe] = useState(0)
  const [value, setValue] = useState(null);
  const [small, setSmall] = useState(false);
  const [medium, setMedium] = useState(false);
  const [large, setLarge] = useState(false);
  const [caffeine, setCaffeine] = useState(0);

  function Decrement() {
    if (coffee > 0) {
      setCoffe(coffee - 1)
    }
  }

  function Increment() {
    setCoffe(coffee + 1)
  }

  const Calculate = () => {
    if(small == true){
      if(value == 1){
        console.log('burada')
        setCaffeine(50)
      }
    }
  }

  
  function selectCoffee(item) {
    setValue(item.value)
    console.log(item)
  }
  return (
    <SafeAreaView style={styles.container} >
      <Image style={styles.image} source={require('../../Assets/coffeecard1.jpg')} />
      <View style={styles.dropcontainer}>
        <DropdownCard
          data={data}
          value={value}
          label='label'
          changeData={selectCoffee} />
        <View style={styles.coffecupcontainer}>
          <View style={styles.coffeetext}>
            <Text style={styles.text}>{coffee}</Text>
          </View>
          <CoffeeButton
            text={'+'}
            onPress={Increment}
            THEME={'Left'} />
          <CoffeeButton
            text={'-'}
            onPress={Decrement}
            THEME={'Right'} />
        </View>
      </View>
      <CupSize
        Small={(item) => {
          setSmall(!small)
          setMedium(false)
          setLarge(false)
        }}
        Medium={(item) => {
          setMedium(!medium)
          setSmall(false)
          setLarge(false)
        }}
        Large={(item) => {
          setLarge(!large)
          setSmall(false)
          setMedium(false)
        }} />
      <View style={styles.Answer}>
        <Text style={styles.AnswerText}>Tüketilen kafein oranı: {caffeine} </Text>
      </View>
      <Button THEME={'Secondary'} ButtonName={'Hesapla'} handlePress={Calculate} />
    </SafeAreaView>
  );
};

export default Home;

/**
 * Espresso
 * Americano
 * Cappuccino
 * Frappe
 * Latte
 * Macchiato
 * Mocha
 * Marocchino
 * Filtre Kahve
 * Soğuk Kahve
 */
