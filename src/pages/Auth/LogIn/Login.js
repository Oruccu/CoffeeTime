import { View, Image, Text, KeyboardAvoidingView, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import styles from './Login.Styles'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { auth } from '../../../../firebaseConfig'
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
import { useTranslation } from 'react-i18next'
import i18next from '../../../Translate/i18n'
import { useSelector } from 'react-redux'

const Login = ({ navigation }) => {
  const language = useSelector(state => state.user.t)
  const { t } = useTranslation();

  useEffect(() => {
    i18next.changeLanguage(language)
  }, [language])

  function initialValues() {
    email = '',
      password = ''
    confirmPassword = ''
  }

  function SingIn(values) {
    signInWithEmailAndPassword(auth, values.email, values.password).then(() => {
      
      //navigation.navigate('Root')
    }).catch((err) => {
      console.log(err)
    })
  }

  function goRegister() {
    navigation.navigate('Register')
  }

  const LoginSchema = Yup.object().shape({
    email: Yup
      .string()
      .email(t('GeçersizE-Mail'))
      .required(t('ZorunluAlan')),
    password: Yup
      .string()
      .required(t('ZorunluAlan'))
  })

function resetPassword() {
  navigation.navigate('ResetPassword')
}

return (
  <View style={styles.container}>
    <View style={styles.textcontainer}>
      <Image style={styles.image} source={require('../../../Assets/coffee.png')} />
      <Text style={styles.text}>{t("KahveZamanı")}</Text>
    </View>
    <View style={styles.innercontainer}>
      <KeyboardAvoidingView>
        <Formik
          initialValues={initialValues}
          onSubmit={SingIn}
          validationSchema={LoginSchema}>
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <>

              <Input
                placeholder={t('E-Mail')}
                onChangeText={handleChange('email')}
                value={values.email} />
              {errors.email && touched.email && <Text style={styles.message}>{errors.email}</Text>}
              <Input
                placeholder={t('Şifre')}
                onChangeText={handleChange('password')}
                value={values.password}
                isSecure />
              {errors.password && touched.password && <Text style={styles.message}>{errors.password}</Text>}
              <Button
                ButtonName={t('GirişYap')}
                THEME={'Primary'}
                handlePress={handleSubmit} />
            </>
          )}
        </Formik>
        <Button
          ButtonName={t('KayıtOl')}
          THEME={'Secondary'}
          handlePress={goRegister} />
        <View style={styles.forgotPassword}>
          <TouchableOpacity onPress={resetPassword}>
            <Text style={styles.resetPassword}>
              Şifremi Unuttum
            </Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>

    </View>
  </View>


)
}

export default Login

