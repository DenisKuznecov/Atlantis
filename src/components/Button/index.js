import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

import styles from './style';

export default (props) => {
  const customStyle = [
    styles.btn,
    props.orange && styles.orange,
    props.blue && styles.blue,
    props.customStyle && props.customStyle,
    props.marginRight && {marginRight: props.marginRight},
  ];
  return (
    <TouchableOpacity
      style={customStyle}
      onPress={props.onPress}
    >
      <Text style={styles.btnText}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
}