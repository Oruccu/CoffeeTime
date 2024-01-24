import { Text, View } from 'react-native'
import React from 'react'
import styles from './MessagesModal.Styles'
import Modal from 'react-native-modal'
const MessagesModal = ({ visible, onClose, messages }) => {
    return (
        <View >
            <Modal
                style={styles.modal}
                isVisible={visible}
                onBackdropPress={onClose}
                onSwipeComplete={onClose}
                onBackButtonPress={onClose}>
                <View style={styles.messagesContainer}>
                    <Text style={styles.text}>{messages}</Text>
                </View>
            </Modal>
        </View>
    )
}

export default MessagesModal


