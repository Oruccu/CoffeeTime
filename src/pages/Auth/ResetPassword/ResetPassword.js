import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../../../components/Input'
import styles from './ResetPassword.Stye'
import Button from '../../../components/Button'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../../../firebaseConfig'
import MessagesModal from '../../../components/Modal/MessagesModal/MessagesModal'
const ReserPassword = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [success, setSuccess] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const changeText = (item) => {
        setEmail(item)
    }

    const resetPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, email)
                .then(() => {
                    setIsVisible(!isVisible)
                    setSuccess(true)
                });
            setError(null);
            setSubmitted(true);

        } catch (error) {
            setIsVisible(!isVisible)
            setSuccess(false)
            if (error.code === 'auth/user-not-found') {

            } else {
                setError('There was a problem with your request');
            }
            console.log(error)
        }
    }
    function closeModal(params) {
        setIsVisible(!isVisible)
    }
    return (
        <View style={styles.container} >
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../../../Assets/Coffee-6.png')} />
            </View>
            <View style={styles.innerContainer}>
                <Input
                    placeholder={'E-Mail'}
                    onChangeText={changeText}
                />
                <Button
                    THEME={'Primary'}
                    ButtonName={'Şifremi Yenile'}
                    handlePress={resetPassword} />
            </View>

            <MessagesModal
                visible={isVisible}
                onClose={closeModal}
                messages={
                    success == true ?
                        'Lütfen mailinizi kontrol ediniz'
                        :
                        'Kayıtlı E-Posta giriniz'} />
        </View>
    )
}

export default ReserPassword

