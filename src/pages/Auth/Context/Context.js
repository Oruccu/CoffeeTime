import { SafeAreaView, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ImageCard from '../../../components/AuthScreen/ImageCard'
import styles from './Context.Styles'
import Button from '../../../components/Button'
import Title from '../../../components/AuthScreen/Title'
import AuthGoogle from '../../../components/AuthScreen/AuthGoogle'
import { useSelector } from 'react-redux'
import i18next from '../../../Translate/i18n'
import { useTranslation } from 'react-i18next'

const Context = ({navigation}) => {
  const language = useSelector(state => state.user.t)
  const { t } = useTranslation();

  useEffect(()=>{
    i18next.changeLanguage(language)
  }, [language])

  function Register() {
    navigation.navigate('Register')
  }

  function LogIn() {
    navigation.navigate('LogIn')  
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageCard/>
      <Title/>
      <View style={styles.btnContainer}>
      <Button ButtonName={t('KayıtOl')} THEME={'Primary'} handlePress={Register}/>
      <Button ButtonName={t('GirişYap')} THEME={'Secondary'} handlePress={LogIn}/>
      </View>
      <AuthGoogle/>
    </SafeAreaView>
  )
}

export default Context

 