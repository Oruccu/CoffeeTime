import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import styles from './Title.Styles'

import { useSelector } from 'react-redux'
import i18next from '../../../Translate/i18n'
import { useTranslation } from 'react-i18next'

const Title = () => {
  const language = useSelector(state => state.user.t)
  const { t } = useTranslation();

  useEffect(()=>{
    i18next.changeLanguage(language)
  }, [language])

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        {t("Birkahveyenedersin!")}
      </Text>
      </View>
  )
}

export default Title

