import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Modal from 'react-native-modal'
import Input from '../../Input'
import styles from './UserModal.Style'
import Button from '../../Button'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../../Context/Slice'
import { useTranslation } from 'react-i18next'
import i18next from '../../../Translate/i18n'

const UserModal = ({ visible, closeModal }) => {
    const { t } = useTranslation();
    const language = useSelector(state => state.user.t)
    function initialValues() {
        userName = '',
            userAge = ''
        userWeight = ''
    }
    useEffect(()=>{
        i18next.changeLanguage(language)
      }, [language])
      

    const LoginSchema = yup.object().shape({
        userName: yup
            .string()
            .required('Zorunlu alan')
            .min(3, 'Geçersiz isim'),
        userAge: yup.number()
            .typeError('Sadece sayı yazılmalı')
            .positive('Negatif değer girilemez')
            .required('Zorunlu alan'),
        userWeight: yup.number()
            .typeError('Sadece sayı yazılmalı')
            .positive('Negatif değer girilemez')
            .required('Zorunlu alan'),
    })

    const dispatch = useDispatch();

    function SaveUser(values) {
        dispatch(
            setUser({
                name: values.userName,
                age: values.userAge,
                weight: values.userWeight
            }))
    }

    return (
        <View style={styles.modalContainer}>

            <Modal
                style={styles.modal}
                isVisible={visible}
                onSwipeComplete={closeModal}
                onBackdropPress={closeModal}
                onBackButtonPress={closeModal}
            >
                <Formik
                    initialValues={initialValues}
                    onSubmit={SaveUser}
                    validationSchema={LoginSchema}>
                    {({ handleChange, handleSubmit, values, errors, touched }) => (
                        <View style={styles.container}>
                            <View style={styles.imageContainer}>
                                <Image
                                    source={require('../../../Assets/coffee.png')}
                                    style={styles.image} />
                            </View>
                            <Input
                                placeholder={t('AdınızıGiriniz')}
                                onChangeText={handleChange('userName')}
                                value={values.userName}
                                 />
                            {errors.userName && touched.userName &&
                                <Text style={styles.message}>{errors.userName}</Text>}
                            <Input
                                placeholder={t('YaşınızıGiriniz')}
                                onChangeText={handleChange('userAge')}
                                value={values.userAge} />
                            {errors.userAge && touched.userAge &&
                                <Text style={styles.message}>{errors.userAge}</Text>}
                            <Input
                                placeholder={t('KilonuzuGiriniz')}
                                onChangeText={handleChange('userWeight')}
                                value={values.userWeight} />
                            {errors.userWeight && touched.userWeight &&
                                <Text style={styles.message}>{errors.userWeight}</Text>}
                            <Button
                                ButtonName={t('Kaydet')}
                                THEME={'Secondary'}
                                handlePress={handleSubmit} />
                        </View>
                    )}
                </Formik>
            </Modal>
        </View>
    )
}

export default UserModal

