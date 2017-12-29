import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import {
  Header,
} from '../../../components';

import { IMAGES } from '../../../assets/style';
import styles from './style';

class Filter extends Component {

  onPressBtnRow = () => {
    console.log('11');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          rightBtn='Done'
          backBtn={() => Actions.pop()}
          title='Types'
        />
        <ScrollView style={styles.scroll}>
          <View style={styles.content}>
            <TouchableOpacity
              onPress={this.onPressBtnRow}
              style={styles.btnRow}
            >
              <Text style={styles.name}>
                Choose all
              </Text>
              <Image
                source={IMAGES.icon_check2}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Filter;