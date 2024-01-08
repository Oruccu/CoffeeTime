import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './CaffeinebyAge.Styles'
import Modal from 'react-native-modal'
const CaffeinebyAge = ({ visible, closeModal }) => {
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      onSwipeComplete={closeModal}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}>
      <View>
        <ScrollView>
          <Text>
            Amerikan Gıda ve İlaç Dairesi (FDA) ve Diyetisyenler Akademisi, genellikle aşağıdaki önerileri yapar:
          </Text>
          <Text>
            Yetişkinler İçin Günlük Tüketim Miktarı: Günlük olarak yetişkinlerin genellikle 400 miligram (yaklaşık 4 fincan kahve) kafein tüketmesi önerilir.
          </Text>
          <Text>
            Hamile ve Emziren Kadınlar: Hamile ve emziren kadınlar için günlük kafein alımını sınırlamak önerilir. Genellikle 200-300 miligram arasında bir günlük sınırlama önerilebilir.
          </Text>
          <Text>
            Çocuklar ve Gençler: Çocuklar ve gençlerde kafein duyarlılığı farklılık gösterebilir. Bu nedenle, genellikle çocuklar ve gençler için daha düşük bir günlük kafein sınırlaması önerilir.
          </Text>
        </ScrollView>
      </View>
    </Modal>
  )
}

export default CaffeinebyAge