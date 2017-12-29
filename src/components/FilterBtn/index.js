import React from  'react';
import {
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import { IMAGES } from '../../assets/style';
import styles from './style';

export default props => (
  <TouchableOpacity
    onPress={props.onPress}
    style={styles.wrap}>
    <Image
      source={IMAGES.icon_filter}
      style={styles.iconFilter}
    />
    <Text style={styles.text}>
      Filter
    </Text>
  </TouchableOpacity>
)