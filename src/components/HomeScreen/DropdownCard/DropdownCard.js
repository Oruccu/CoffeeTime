import { View } from 'react-native'
import React, { useState } from 'react'
import styles from './Dropdown.Style'
import Icon from '@expo/vector-icons/FontAwesome'
import { Dropdown } from 'react-native-element-dropdown';
import Color from '../../../styles/Color'

const DropdownCard = ({ data, label, value, changeData }) => {
  const [isFocus, setIsFocus] = useState(false);


  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        maxHeight={200}
        data={data}
        labelField={label}
        valueField="value"
        placeholder={'Kahveni seç'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onChange={changeData}
        renderLeftIcon={() => (
          <Icon
            style={styles.icon}
            color={Color.Brown}
            name="coffee"
            size={20}
          />
        )}
      />
    </View>
  )
}

export default DropdownCard

