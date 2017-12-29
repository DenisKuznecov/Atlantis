import React from 'react';

import {
  View,
  TextInput,
  Image,
} from 'react-native';
import { COLORS } from '../../assets/style';
import styles from './style';

export default (props) => {
  const styleInput = [
    styles.container,
    props.customStyleInput,
    props.textarea && styles.textarea,
  ];
  const styleTextInput = [
    styles.styleTextInput,
    props.customStyleText,
    props.textarea && styles.textarea,
  ];
  return (
    <View style={styleInput}>
      {
        props.iconLeft ?
        <Image
          source={props.icon}
        /> : null
      }
      <TextInput
        multiline={props.textarea}
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
        placeholderTextColor={COLORS.placeholder}
        underlineColorAndroid="transparent"
        selectionColor={COLORS.placeholder}
        style={styleTextInput}
      />
    </View>
  );
}