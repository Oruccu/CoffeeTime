import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal'
import Input from '../Input'
import styles from './UserModal.Style'
import Button from '../Button'

const UserModal = ({ visible, closeModal }) => {

const [userName, setUserName] = useState('');
const [userAge, setUserAge] = useState('');
const [userWeight, setUserWeight] = useState('');


    return (
        <View style={styles.modalContainer}>

            <Modal
                style={styles.modal}
                isVisible={visible}
                onSwipeComplete={closeModal}
                onBackdropPress={closeModal}
                onBackButtonPress={closeModal}
            >
                <View style={styles.container}>
                    <Input placeholder={'Adınızı giriniz'} onChangeText={setUserName} value={userName} />
                    <Input placeholder={'Yaşınızı giriniz'} onChangeText={setUserAge} value={userAge}/>
                    <Input placeholder={'Kilonuzu giriniz'} onChangeText={setUserWeight} value={userWeight} />
                    <Button ButtonName={'Kaydet'} THEME={'Secondary'} />
                </View>
            </Modal>
        </View>
    )
}

export default UserModal

