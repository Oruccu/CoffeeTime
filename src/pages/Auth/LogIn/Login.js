import { View, Image, Text, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import styles from './Login.Styles'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { auth } from '../../../../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
const Login = ({ navigation }) => {

  function initialValues() {
    email = '',
      password = ''
    confirmPassword = ''
  }

  function SingIn(values) {
    signInWithEmailAndPassword(auth, values.email, values.password).then(() => {
      navigation.navigate('Root')
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
      .email('Geçersiz E-Mail')
      .required('Zorunlu alan'),
    password: Yup
      .string()
      .required('Zorunlu alan')
  })

  return (

      <View style={styles.container}>
        <Image
          source={require('../../../Assets/mobile-1.jpeg')} style={styles.image} />
        <View style={styles.textcontainer}>
          <Text style={styles.text}>Kahve Zamanı</Text>
        </View>
        <View style={styles.innercontainer}>
        

          <Formik
            initialValues={initialValues}
            onSubmit={SingIn}
            validationSchema={LoginSchema}>
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <>
                <Input
                  placeholder={'E-Mail'}
                  onChangeText={handleChange('email')}
                  value={values.email} />
                {errors.email && touched.email && <Text style={styles.message}>{errors.email}</Text>}
                <Input
                  placeholder={'Şifre'}
                  onChangeText={handleChange('password')}
                  value={values.password}
                  isSecure />
                {errors.password && touched.password && <Text style={styles.message}>{errors.password}</Text>}
                <Button
                  ButtonName={'Giriş'}
                  THEME={'Primary'}
                  handlePress={handleSubmit} />
              </>
            )}
          </Formik>
          <Button
            ButtonName={'Kayıt Ol'}
            THEME={'Secondary'}
            handlePress={goRegister} />
            
        </View>
      </View>
   
  )
}

export default Login

