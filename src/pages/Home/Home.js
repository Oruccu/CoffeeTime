import { SafeAreaView, Image, Text, View, Alert, TouchableOpacity, } from "react-native";
import React, { useState, useEffect } from "react";
import styles from './Home.Styles'
import CoffeeButton from '../../components/HomeScreen/CoffeeButton'
import DropdownCard from '../../components/HomeScreen/DropdownCard';
import CupSize from '../../components/HomeScreen/CupSize'
import Button from '../../components/Button'
import { database, auth } from "../../../firebaseConfig";
import { onValue, push, ref, set } from "firebase/database";
import ParseData from '../../utils/ParseData'
import CoffeeSlider from "../../components/HomeScreen/CoffeeSlider";
import { useTranslation } from 'react-i18next'
import i18next from '../../Translate/i18n'
import { useSelector } from "react-redux";
import useFecth from "../../utils/useFecth";
import useFecthFilter from "../../utils/useFetchFilter";
import UserModal from "../../components/Modal/UserModal/UserModal";

const Home = () => {

  const language = useSelector(state => state.user.t)
  const name = useSelector(state => state.user.user.name)
  console.log(name)
  const { t } = useTranslation();
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
    { label: 'Türk Kahve', value: '11' },
  ];
  const [coffee, setCoffe] = useState(0);
  const [value, setValue] = useState(null);
  const [small, setSmall] = useState(false);
  const [medium, setMedium] = useState(false);
  const [large, setLarge] = useState(false);
  const [coffeine, setCoffeine] = useState(0);
  const [coffeeName, setCoffeeName] = useState('');
  const { coffeeData } = useFecthFilter();
  const [modalisVisible, setModalisVisible] = useState(false)

  var cup = '';
  const userMail = auth.currentUser.email
  const userId = auth.currentUser.uid

  function selectCoffee(item) {
    setValue(item.value)
    setCoffeeName(item.label)

  }
  useEffect(() => {
    i18next.changeLanguage(language)
  }, [language])

  const Calculate = () => {
    if (small == 0 && medium == 0 && large == 0) {
      return Alert.alert(t('Kahvenizinboyutunuseçiniz'))
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
    try {
      const refData = ref(database, `Coffee/CoffeData/${value}/${cup}`)
      onValue(refData, (snapshot) => {
        const data = snapshot.val();
        const newdata = data * coffee
        setCoffeine(newdata)
      })

    } catch (error) {
      consol.log(error)
    }
    setSmall(false)
    setMedium(false)
    setLarge(false)
  }

 
  function handleInputToggle() {
    if (name == undefined ) {
      setModalisVisible(true)
    }
    else{
      setModalisVisible(false)
    }
  }
  const SaveData = () => {
    if (name == undefined ) {
      setModalisVisible(!modalisVisible)
    }
    const pushData = {
      user: userMail,
      coffeine: coffeine,
      coffeeName: coffeeName,
      date: new Date().toISOString(),
      coffeequantity: coffee,
      CupSize: cup
    }
    if (coffeine != 0) {
      try {
        push(ref(database, `UsedCoffe/${userId}`), { pushData })
      } catch (error) {
        console.log(err)
      }
    }
    setCoffeine(0)
    setCoffe(0)
  }

  const newCoffeeData = coffeeData.map((item) => item.pushData.coffeine)
  const SubCoffee = coffeeData.map((item) => item.pushData.coffeequantity)
  var TotalCoffee = 0
  var ScorCoffee = 0
  for (let i = 0; i < newCoffeeData.length; i++) {
    const numberData = Number(newCoffeeData[i])
    TotalCoffee = TotalCoffee + numberData
  }
  for (let i = 0; i < SubCoffee.length; i++) {
    const Coffee = Number(SubCoffee[i])
    ScorCoffee = ScorCoffee + Coffee
  }

  function Decrement() {
    if (coffee > 0) {
      setCoffe(coffee - 1)
    }
  }
  function Increment() {
    setCoffe(coffee + 1)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text
          style={styles.titleApp}>
          {t("KAHVEZAMANI")}
        </Text>
      </View>
      <View>
        <View style={styles.SelectContainer}>
          <View style={styles.coffeedrop} >
            <DropdownCard
              data={data}
              value={value}
              label='label'
              changeData={selectCoffee} />
          </View>
          <View style={styles.coffecupcontainer}>
            <View style={styles.coffeetext}>
              <Text style={styles.coffeineText}>{coffee}</Text>
            </View>
            <CoffeeButton
              text={'-'}
              onPress={Decrement}
              THEME={'Left'} />
            <CoffeeButton
              text={'+'}
              onPress={Increment}
              THEME={'Right'} />
          </View>
        </View>
        <View>

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
            }} THEME={'Primary'} />
        </View>
        <View style={styles.CoffeineContainer}>
          <Text style={styles.coffeineText}>
            {t("KafeinOranı")} {coffeine}
          </Text>
        </View>
        <Button
          THEME={'Secondary'}
          ButtonName={t('Hesapla')}
          handlePress={Calculate} />
        <Button
          THEME={'Secondary'}
          ButtonName={t('Kaydet')}
          handlePress={SaveData} />
      </View>
      <UserModal
        visible={modalisVisible}
        closeModal={handleInputToggle}
         />
      <View style={styles.tabContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../Assets/coffee-5.jpg')} />
        </View>
        <View style={styles.dataContainer}>
          <CoffeeSlider data={TotalCoffee} title={t('Kafein')} />
          <CoffeeSlider data={ScorCoffee} title={t('Kahve')} />
          <CoffeeSlider data={coffeine} title={t('Sonuç')} />
        </View>
      </View>

    </SafeAreaView>

  );
};

export default Home;
