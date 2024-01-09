import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal'
import Input from '../../Input'
import styles from './UserModal.Style'
import Button from '../../Button'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../../Context/Slice'

const UserModal = ({ visible, closeModal }) => {
    const language = useSelector(state => state.t)
    
    function initialValues() {
        userName = '',
        userAge = ''
        userWeight = ''
    }

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
                            <Input
                                placeholder={'Adınızı giriniz'}
                                onChangeText={handleChange('userName')}
                                value={values.userName} />
                            {errors.userName && touched.userName &&
                                <Text style={styles.message}>{errors.userName}</Text>}
                            <Input
                                placeholder={'Yaşınızı giriniz'}
                                onChangeText={handleChange('userAge')}
                                value={values.userAge} />
                            {errors.userAge && touched.userAge &&
                                <Text style={styles.message}>{errors.userAge}</Text>}
                            <Input
                                placeholder={'Kilonuzu giriniz'}
                                onChangeText={handleChange('userWeight')}
                                value={values.userWeight} />
                            {errors.userWeight && touched.userWeight &&
                                <Text style={styles.message}>{errors.userWeight}</Text>}
                            <Button
                                ButtonName={'Kaydet'}
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

