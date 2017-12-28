import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './style';

export default (props) => {
  const stylesFirstItem = [
    styles.statusItem,
    (props.fill === 1 || props.fill === 2 || props.fill === 3) && styles.activeItem,
  ];
  const stylesSecondItem = [
    styles.statusItem,
    (props.fill === 2 || props.fill === 3) && styles.activeItem,
  ];
  const stylesThirdItem = [
    styles.statusItem,
    props.fill === 3 && styles.activeItem,
  ];
  const styleLine = [
    styles.line,
    (props.fill === 2 || props.fill === 3) && styles.activeLine,
  ];
  const styleItemText = [
    styles.itemText,
    (props.fill === 1 || props.fill === 2 || props.fill === 3) && styles.activeText,
  ];
  const styleSecondText = [
    styles.itemText,
    (props.fill === 2 || props.fill === 3) && styles.activeText,
  ];
  const stylesThirdText = [
    styles.itemText,
    props.fill === 3 && styles.activeText,
  ];
  return (
    <View style={[styles.wrap, props.customStyle && props.customStyle]}>
      <View style={stylesFirstItem}>
        <Text style={styleItemText}>1</Text>
      </View>
      <View style={styleLine}></View>
      <View style={stylesSecondItem}>
        <Text style={styleSecondText}>2</Text>
      </View>
      <View style={[styles.line, props.fill === 3 && styles.activeLine]}></View>
      <View style={stylesThirdItem}>
        <Text style={stylesThirdText}>3</Text>
      </View>
    </View>
  );
};