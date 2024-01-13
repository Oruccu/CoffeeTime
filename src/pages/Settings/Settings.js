import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
  const { t } = useTranslation();
  const dispatch = useDispatch();

  function LogOut() {
    auth.signOut();
  }

  function handleInputToggle() {
    setModalisVisible(!modalisVisible)
  }

  const languagetr = () => {
    dispatch(
      setLanguage({
        selectLanguage: 'tr'
      }))
    i18next.changeLanguage('tr')
  }

  const languageen = () => {
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
            <LanguageButton title={t('Türkçe')} handlePress={languagetr} />
            <LanguageButton title={t('İngilizce')} handlePress={languageen} />

          </View>
        </View>
        <View style={styles.information}>
          <View style={styles.informationContainer}>
            <Text style={styles.informationText}>Kahve Severlere </Text>
            <Image source={require('../../Assets/coffee-cup-4.png')} style={styles.image} />
          </View>
          <Text style={styles.informationText}>
            Bu not bir kahve sever tarafından sana yazıldı.  Uygulamayı geliştirmek için yaptığım araştırmalarda bazı şeyler öğrenndim. Bunları seninle paylaşmak istiyorum.
          </Text>
          <Text style={styles.informationText}>
            Yetişkin bir bireyin tüketmesi gereken ortalama değer 400 miligram kafeindir. Bu ortalama 4 fincan kahve demektir. Tabi bu durum kiloya, varsa kişinin hastalığına ve vücut toleransına göre değişkenlik gösteriyor.
          </Text>

          <Text style={styles.informationText}>
            Her kahvede aynı oranda kafein bulunmadığını biliyorsundur. Bu durum kahve çekirdeğinin büyüklüğüne, türüne, demleme süresine ve kullanılan süt miktarına bağlı olarak değişebilir.
          </Text>
          <Text style={styles.informationText}>
            Buradaki hesaplanan değerler sana ortalama bir değer verecektir. Kafein oranın sürekli fazla ise uygulamaya güven ve tüketimini azalt.
          </Text>
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


