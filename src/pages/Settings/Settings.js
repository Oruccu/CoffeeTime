import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './Settings.Styles'
import Button from '../../components/Button'
import { auth } from '../../../firebaseConfig'
import UserModal from '../../components/Modal/UserModal'
import { useTranslation } from 'react-i18next'
import i18next from '../../Translate/i18n'
import LanguageButton from '../../components/SettingsScreen/LanguageButton'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../../Context/Slice'
const Settings = () => {
  const [modalisVisible, setModalisVisible] = useState(false)
  const {t} = useTranslation();
  const dispatch = useDispatch();

  function LogOut() {
    auth.signOut();
  }

  function handleInputToggle() {
    setModalisVisible(!modalisVisible)
  }

  const languagetr = () =>{
    dispatch(
      setLanguage({
          selectLanguage: 'tr'
      }))
    i18next.changeLanguage('tr')
  }

  const languageen = () =>{
    dispatch(
      setLanguage({
        selectLanguage: 'en'
      })) 
    i18next.changeLanguage('en')
  }

  const language = useSelector(state => state.selectLanguage)
  console.log(language)

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
            <LanguageButton title={t('Türkçe')} handlePress={languagetr}/>
            <LanguageButton title={t('İngilizce')} handlePress={languageen}/>
         
          </View>
        </View>
        <View style={styles.information}>
          <Text>
            Bilgi;
            Kahve Severlere </Text>
        </View>
      </View>
    
      <View style={styles.logOut}>
        <Button
          THEME={'Primary'}
          ButtonName={'Çıkış Yap'}
          handlePress={LogOut}
        />
      </View>

    </SafeAreaView>
  )
}

export default Settings


