import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Settings.Styles'
import Button from '../../components/Button'
import { auth } from '../../../firebaseConfig'
import UserModal from '../../components/Modal/UserModal'
import { useTranslation } from 'react-i18next'
import i18next from '../../Translate/i18n'
import LanguageButton from '../../components/SettingsScreen/LanguageButton'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage, setUser } from '../../Context/Slice'
const Settings = () => {
  const [modalisVisible, setModalisVisible] = useState(false)
  const { t } = useTranslation();
  const language = useSelector(state => state.user.t)
  function LogOut() {
    auth.signOut();
  }
  
  function handleInputToggle() {
    setModalisVisible(!modalisVisible)
  }
  
  const dispatch = useDispatch();

  const languagetr = () => {
    dispatch(
      setLanguage({
        t: 'tr',
      }))
    //i18next.changeLanguage('tr')
  }

  const languageen = () => {
    dispatch(
      setLanguage({
        t: 'en'
      }))
    //i18next.changeLanguage('en')
  }
  useEffect(()=>{
    i18next.changeLanguage(language)
  }, [language])
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={handleInputToggle}>
          <View style={styles.userContainer}>
            <Text style={styles.languageText}>
              {t('BilgileriniziGiriniz')}
            </Text>
          </View>
        </TouchableOpacity>
        <UserModal
          visible={modalisVisible}
          closeModal={handleInputToggle}
        />

        <View style={styles.languageContainer}>
          <Text style={styles.languageText}>
            {t('UygulamaDiliniSeçiniz')}
          </Text>
          <View style={styles.Box}>
            <LanguageButton title={t('Türkçe')} handlePress={languagetr} />
            <LanguageButton title={t('İngilizce')} handlePress={languageen} />

          </View>
        </View>
        <View style={styles.information}>
          <View style={styles.informationContainer}>
            <Text style={styles.informationText}>{t("KahveSeverlere")} </Text>
            <Image source={require('../../Assets/coffee-cup-4.png')} style={styles.image} />
          </View>
          <Text style={styles.informationText}>
            {t("text1")}
          </Text>
          <Text style={styles.informationText}>
            {t("text2")}
          </Text>

          <Text style={styles.informationText}>
            {t("text3")}
          </Text>
          <Text style={styles.informationText}>
          {t("text4")}
          </Text>
        </View>
      </View>

      <View style={styles.logOut}>
        <Button
          THEME={'Primary'}
          ButtonName={t('ÇıkışYap')}
          handlePress={LogOut}
        />
      </View>

    </SafeAreaView>
  )
}

export default Settings


