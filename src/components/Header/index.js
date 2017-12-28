import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { COLORS, IMAGES } from '../../assets/style';
import styles from './style';

export default (props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.leftCol, props.rightBtn && styles.customWidth]}>
        {
          props.backBtn ?
          <TouchableOpacity
            onPress={props.backBtn}
          >
            <Image
              style={styles.iconBack}
              source={IMAGES.icon_back}
            />
          </TouchableOpacity> : null
        }
      </View>
      <Text style={styles.title}>
        {props.title}
      </Text>
      <View style={[styles.rightCol, props.rightBtn && styles.customWidth]}>
        {
          props.rightBtn ?
          <TouchableOpacity onPress={props.rightBtnOnPress}>
            <Text style={styles.btnText}>
              {props.rightBtn}
            </Text>
          </TouchableOpacity> : null
        }
        {
          props.icon ?
          <TouchableOpacity
            style={styles.btnIcon}
            onPress={props.onPressCart}
          >
            <Image
              source={props.icon}
            />
          </TouchableOpacity> : null
        }
      </View>
    </View>
  );
}