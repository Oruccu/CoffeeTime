import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import ImageCard from '../../../components/AuthScreen/ImageCard'
import styles from './Context.Styles'
import Button from '../../../components/Button'
import Title from '../../../components/AuthScreen/Title'
import AuthGoogle from '../../../components/AuthScreen/AuthGoogle'
const Context = ({navigation}) => {

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
      <Button ButtonName={'Kayıt Ol'} THEME={'Primary'} handlePress={Register}/>
      <Button ButtonName={'Giriş Yap'} THEME={'Secondary'} handlePress={LogIn}/>
      </View>
      <AuthGoogle/>
    </SafeAreaView>
  )
}

export default Context

 