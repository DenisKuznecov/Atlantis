import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Picker from 'react-native-picker';

import { IMAGES } from '../../assets/style';
import styles from './style';

export default (props) => {

  openSelectDate = () => {
    let data = ['17 December 2017', '17 December 2017'];
    Picker.init({
      pickerData: data,
      selectedValue: [],
      onPickerConfirm: data => {
        console.log(data);
      },
      onPickerCancel: data => {
        console.log(data);
      },
      onPickerSelect: data => {
        console.log(data);
      }
    });
    Picker.show();
  }

  return (
    <View style={[styles.wrap, props.customStyle]}>
      {
        props.title ?
        <Text style={styles.selectTitle}>
          Date
        </Text> : null
      }
      <TouchableOpacity
        onPress={this.openSelectDate}
        style={styles.selectRow}
      >
        <Text style={styles.placeholder}>
          14 Jul 2017
        </Text>
        <Image
          source={IMAGES.icon_date}
          style={styles.styleIcon}
        />
      </TouchableOpacity>
    </View>
  );
}