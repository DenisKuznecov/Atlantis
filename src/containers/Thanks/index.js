import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Button from '../../components/Button';
import { IMAGES } from '../../assets/style';
import styles from './style';

class Thanks extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>
            Thanks for your order!
          </Text>
          <Text style={styles.subTitle}>
            We will contact you soon.
          </Text>
          <Image
            source={IMAGES.icon_check}
          />
        </View>
        <Button
          blue
          name='Back to main page'
          onPress={() => Actions.Home()}
          customStyle={styles.customStyleBtn}
        />
      </View>
    );
  }
}

export default Thanks;
