import { FlatList, SafeAreaView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Health.Styles'
import { database, auth } from "../../../firebaseConfig";
import { useSelector } from 'react-redux'
import ParseData from '../../utils/ParseData'
import CoffeeCard from '../../components/HealthScreen/CoffeeCard'
import { onValue, ref, remove } from 'firebase/database'
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import FloatingButton from '../../components/HealthScreen/FloatingButton'
import CoffeineModal from '../../components/Modal/CaffeineModal/CoffeineModal';
import { useTranslation } from 'react-i18next'
import i18next from '../../Translate/i18n'
import Icon from '@expo/vector-icons/MaterialIcons'


const Health = () => {
  const [coffeeData, setCoffeeData] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const UserData = useSelector(state => state.user)
  const [modalisVisible, setModalisVisible] = useState(false)
  const userId = auth.currentUser.uid
  const language = useSelector(state => state.user.t)
  const { t } = useTranslation();

  useEffect(() => {
      setError(true)
      const refData = ref(database, `UsedCoffe/${userId}`)
      onValue(refData, (snapshot) => {
        const data = snapshot.val();
        if (data != null) {
          const parsedData = ParseData(data)
          console.log(parsedData);
          setCoffeeData(parsedData)
          setError(false)
        }
      }) 
  }, [])

  useEffect(()=>{
    i18next.changeLanguage(language)
  }, [language])


  const handleSwipeoutPress = () => {
   console.log('silll')
  };
  
  const SwipeOutDelete =[
    {
      text: 'Sil',
      onPress: (index) => handleSwipeoutPress(index),
      component: (
        <View style={styles.iconContainer}>
          <Icon name="delete" size={40} color={'#936b5b'} />
        </View>
      ),
    },
  ];



  const renderData = ({ item }) =>
    <CoffeeCard 
    usedCoffee={item.pushData} 
    id={item.id} 
    SwipeOut={SwipeOutDelete}  />

  if (loading == true) {
    return <Loading />
  }

  function handleToggle() {
    setModalisVisible(!modalisVisible)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.data}>{t("Hoşgeldin")} {UserData.user.name}</Text>
      </View>
      {
        !error ? (
          <>
            <FlatList
              data={coffeeData}
              renderItem={renderData} />
            <FloatingButton
              PressIcon={handleToggle} />
            <CoffeineModal 
            visible={modalisVisible} 
            onClose={handleToggle}
            />
          </>
        ) : (
          <Error />
        )
      }
    </SafeAreaView>
  )
}

export default Health

/**
 * const handleSwipeoutPress = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);

    // Firebase veritabanından da silme işlemi
    const databaseRef = firebase.database().ref('/kartlar');
    databaseRef.child(data[index].id).remove()
      .then(() => {
        console.log('Veri başarıyla silindi.');
      })
      .catch((error) => {
        console.error('Veri silinirken bir hata oluştu:', error);
      });
  };
 */


