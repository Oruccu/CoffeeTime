import { FlatList, SafeAreaView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Health.Styles'
import { database, auth } from "../../../firebaseConfig";
import { useSelector } from 'react-redux'
import CoffeeCard from '../../components/HealthScreen/CoffeeCard'
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import FloatingButton from '../../components/HealthScreen/FloatingButton'
import CoffeineModal from '../../components/Modal/CaffeineModal/CoffeineModal';
import { useTranslation } from 'react-i18next'
import i18next from '../../Translate/i18n'
import useFetch from '../../utils/useFecth';
import useFetchFilter from '../../utils/useFetchFilter';

const Health = () => {
  const { coffeeData, loading, error } = useFetch();
  const UserData = useSelector(state => state.user)
  const [modalisVisible, setModalisVisible] = useState(false)
  const language = useSelector(state => state.user.t)
  const { t } = useTranslation();


  useEffect(() => {
    i18next.changeLanguage(language)
  }, [language])

  const renderData = ({ item }) =>
    <CoffeeCard
      usedCoffee={item && item.pushData ? item.pushData : null}
      id={item && item.id ? item.id : null}
    />

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
              renderItem={renderData}
            />
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


