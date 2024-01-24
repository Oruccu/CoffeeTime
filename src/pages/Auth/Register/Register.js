import { View, Image, Text } from 'react-native'
import React, { useEffect } from 'react'
import styles from './Register.Styles'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import * as yup from 'yup'
import { Formik } from 'formik'
import { auth } from '../../../../firebaseConfig'
import { createUserWithEmailAndPassword, sendEmailVerification, sendSignInLinkToEmail } from 'firebase/auth'
import i18next from '../../../Translate/i18n'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
const Register = ({ navigation }) => {
  const language = useSelector(state => state.user.t)
  const { t } = useTranslation();

  useEffect(() => {
    i18next.changeLanguage(language)
  }, [language])

  function initialValues() {
    username = '',
      email = '',
      password = '',
      confirmPassword = ''
  }

  function CreateUser(values) {
    console.log(values)
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((user) => {
        sendSignInLinkToEmail(auth, values.email, actionCodeSettings)
          .then(() => {
            console.log('başarılı')
            navigation.navigate('LogIn')
          }).catch((err) => {
            console.log('hata oluştu')
          })
      })
      .catch((err) => {
        console.log('bir hata oluştu')
        console.log(err)
      })
  }
  function goLogIn() {
    navigation.navigate('LogIn')
  }

  const schemaRegister = yup.object({
    username: yup.string()
      .required(t('ZorunluAlan'))
      .min(3, t('Geçersizisim')),
    email: yup
      .string()
      .email(t('GeçersizE-Mail'))
      .required(t('Zorunlualan')),
    password: yup
      .string()
      .required(t('Zorunlualan'))
      .matches(
        /^(?=.*[a-z])/,
        t("Birküçükharfiçermeli")
      )
      .matches(
        /^(?=.*[A-Z])/,
        t("Birbüyükharfiçermeli")
      )
      .matches(
        /^(?=.*[0-9])/,
        t("Birsayıiçermeli")
      )
      .matches(
        /^(?=.*[!@#\$%\^&\*])/,
        t("Özelkarakterharfiçermeli")
      ),
    confirmPassword: yup
      .string()
      .required(t('Zorunlualan'))
      .oneOf([yup.ref("password"), null], t("Uyumsuzşifre"))
  });



  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
        <Image style={styles.image} source={require('../../../Assets/coffee.png')} />
        <Text style={styles.text}>{t("KahveZamanı")}</Text>
      </View>
      <View style={styles.innercontainer}>
        <Formik
          initialValues={initialValues}
          onSubmit={CreateUser}
          validationSchema={schemaRegister}>

          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <>
              <Input
                placeholder={t('İsim')}
                onChangeText={handleChange('username')}
                value={values.username} />
              {errors.username && touched.username &&
                <Text style={styles.message}>{errors.username}</Text>}
              <Input
                placeholder={'E-Mail'}
                onChangeText={handleChange('email')}
                value={values.email} />
              {errors.email && touched.email &&
                <Text style={styles.message}>{errors.email}</Text>}
              <Input
                placeholder={t('Şifre')}
                onChangeText={handleChange('password')}
                value={values.password} />
              {errors.password && touched.password &&
                <Text style={styles.message}>{errors.password}</Text>}
              <Input
                placeholder={t('Şifre')}
                onChangeText={handleChange('confirmPassword')}
                value={values.confirmPassword} />
              {errors.confirmPassword && touched.confirmPassword &&
                <Text style={styles.message}>{errors.confirmPassword}</Text>}
              <Button
                THEME={'Primary'}
                ButtonName={t('KayıtOl')}
                handlePress={handleSubmit} />
            </>
          )}
        </Formik>
        <Button
          THEME={'Secondary'}
          ButtonName={t('GirişYap')}
          handlePress={goLogIn} />
      </View>
    </View>
  )
}

export default Register
