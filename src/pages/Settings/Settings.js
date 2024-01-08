import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './Settings.Styles'
import Button from '../../components/Button'
import { auth } from '../../../firebaseConfig'
import CheckBox from 'expo-checkbox'
import Color from '../../styles/Color'
import UserModal from '../../components/Modal/UserModal'


const Settings = () => {
  const [languagetr, setLanguagetr] = useState(false)
  const [languageen, setLanguageen] = useState(false)
  const [modalisVisible, setModalisVisible] = useState(false)

  function LogOut() {
    auth.signOut();
  }

  function handleInputToggle() {
    setModalisVisible(!modalisVisible)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={handleInputToggle}>
          <View style={styles.userContainer}>
            <Text style={styles.languageText}>
              Bilgilerinizi Giriniz...
            </Text>
          </View>
        </TouchableOpacity>
        
        <UserModal
          visible={modalisVisible}
          closeModal={handleInputToggle}
       />
    
        <View style={styles.languageContainer}>
          <Text style={styles.languageText}>
            Uygulama Dilini Seçiniz...
          </Text>
          <View style={styles.Box}>
            <Text style={styles.languageText}>
              İngilizce
            </Text>
            <CheckBox
              style={styles.checkBox}
              value={languageen}
              onValueChange={setLanguageen}
              color={setLanguageen ? Color.Brown : undefined}
              disabled={languagetr == true}
            />
            <Text style={styles.languageText}>
              Türkçe
            </Text>
            <CheckBox
              style={styles.checkBox}
              value={languagetr}
              onValueChange={setLanguagetr}
              color={setLanguagetr ? Color.Brown : undefined}
              disabled={languageen == true}
            />
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


