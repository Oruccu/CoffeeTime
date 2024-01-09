import { SafeAreaView, Image, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import styles from './Home.Styles'
import CoffeeButton from '../../components/HomeScreen/CoffeeButton'
import DropdownCard from '../../components/HomeScreen/DropdownCard';
import CupSize from '../../components/HomeScreen/CupSize'
import Button from '../../components/Button'
import { auth, database } from "../../../firebaseConfig";
import { onValue, push, ref, set } from "firebase/database";
import { useSelector } from "react-redux";

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
  const [coffeine, setCoffeine] = useState('');
  const [coffeeName, setCoffeeName] = useState('')
  var cup = '';

  function Decrement() {
    if (coffee > 0) {
      setCoffe(coffee - 1)
    }
  }

  function Increment() {
    setCoffe(coffee + 1)
  }

  const Calculate = () => {

    if (small == 0 && medium == 0 && large == 0) {
      return Alert.alert('Kahvenizin boyutunu seçiniz')
    }
    if (small == 1) {
      cup = 'Small'
    }
    if (medium == 1) {
      cup = 'Medium'
    }
    if (large == 1) {
      cup = 'Large'
    }


    const refData = ref(database, `Coffee/CoffeData/${value}/${cup}`)
    onValue(refData, (snapshot) => {
      const data = snapshot.val();
      const newdata= data * coffee 
      setCoffeine(newdata)
    })

  }

  function selectCoffee(item) {
    setValue(item.value)
    setCoffeeName(item.label)
  }

  const SaveData = ()=>{
    const pushData = {
      coffeine: coffeine,
      coffeeName: coffeeName,
      date: new Date().toISOString(),
      coffeequantity: coffee,
      CupSize: cup
    }
    if(coffeine!=0){
      push(ref(database, 'UsedCoffe/'), { pushData })
    }
    setCoffeine(0)
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
        <View style={styles.textContainer}>
        <Text style={styles.AnswerText}>
          Tüketilen kafein oranı: {coffeine}
        </Text>
        </View>
        <Button 
        THEME={'Primary'} 
        ButtonName={'Kaydet'} 
        handlePress={SaveData}/>
      </View>
      <View style={styles.btn}>
      <Button
        THEME={'Secondary'}
        ButtonName={'Hesapla'}
        handlePress={Calculate} />
        </View>
    </SafeAreaView>
  );
};

export default Home;