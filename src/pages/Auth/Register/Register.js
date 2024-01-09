import { View, Image, Text } from 'react-native'
import React from 'react'
import styles from './Register.Styles'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import * as yup from 'yup'
import { Formik } from 'formik'
import {auth} from '../../../../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Register = ({ navigation }) => {

  function initialValues() {
    username = '',
    email = '',
    password = '',
    confirmPassword = ''
  }

  function CreateUser(values) {
    console.log(values)
    createUserWithEmailAndPassword(auth, values.email, values.password)
    .then((user)=>{
      navigation.navigate('LogIn')
    })
    .catch((err)=>{
      console.log('bir hata oluştu')
      console.log(err)
    })
  }
  function goLogIn() {
    navigation.navigate('LogIn')
  }

  const schemaRegister = yup.object({
    username: yup.string()
    .required('Zorunlu alan')
    .min(3, 'Geçersiz isim'),
    email: yup
      .string()
      .email()
      .required('Zorunlu alan'),
    password: yup
      .string()
      .required('Zorunlu alan')
      .matches(
        /^(?=.*[a-z])/,
        " Bir küçük harf içermeli"
      )
      .matches(
        /^(?=.*[A-Z])/,
        "Bir Büyük harf içermeli"
      )
      .matches(
        /^(?=.*[0-9])/,
        "Bir Sayı harf içermeli"
      )
      .matches(
        /^(?=.*[!@#\$%\^&\*])/,
        "Özel karakter harf içermeli"
      ),
    confirmPassword: yup
      .string()
      .required('Zorunlu alan')
      .oneOf([yup.ref("password"), null], "Yanlış paralo")
  });
  


  return (
    <View style={styles.container}>
          <View style={styles.textcontainer}>
        <Text style={styles.text}>Kahve Zamanı</Text>
        </View>
      <View style={styles.innercontainer}>
        <Formik
          initialValues={initialValues}
          onSubmit={CreateUser}
          validationSchema={schemaRegister}>

          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <>
              <Input
                placeholder={'İsim'}
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
                placeholder={'Şifre'}
                onChangeText={handleChange('password')}
                value={values.password} />
              {errors.password && touched.password &&
                 <Text style={styles.message}>{errors.password}</Text>}
              <Input
                placeholder={'Şifre'}
                onChangeText={handleChange('confirmPassword')}
                value={values.confirmPassword} />
              {errors.confirmPassword && touched.confirmPassword &&
                 <Text style={styles.message}>{errors.confirmPassword}</Text>}
              <Button
                THEME={'Primary'}
                ButtonName={'Kayıt Ol'}
                handlePress={handleSubmit} />
            </>
          )}
        </Formik>
        <Button
          THEME={'Secondary'}
          ButtonName={'Giriş'}
          handlePress={goLogIn} />
      </View>
    </View>
  )
}

export default Register
