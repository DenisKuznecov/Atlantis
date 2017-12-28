import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import {
  Header,
  Input,
  Button,
  StatusBar,
  SelectBtn,
} from '../../../components';

import styles from './style';

class Ordering extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backBtn={() => Actions.pop()}
          title='Ordering'
        />
        <ScrollView style={styles.scroll}>
          <View style={styles.content}>
            <StatusBar
              fill={2}
              customStyle={styles.styleStatusBar}
            />
            <View style={styles.wrapTitle}>
              <Text style={styles.title}>
                Personal information
              </Text>
            </View>
            <View style={styles.wrapInputs}>
              <Input
                placeholder='Tourist surname'
                customStyleText={styles.input}
              />
              <Input
                placeholder='Tourist name'
                customStyleText={styles.input}
              />
              <Input
                placeholder='Tourist phone'
                customStyleText={styles.input}
              />
              <SelectBtn
                title='Citizenship'
                customStyle={styles.input}
              />
              <Input
                placeholder='Tourist email'
                customStyleText={styles.input}
              />
              <Input
                textarea
                placeholder='Comments…'
                customStyleText={styles.input}
                customStyle={styles.textarea}
              />
            </View>
            <Button
              orange
              name='Confirm'
              onPress={() => Actions.Confirmation()}
              customStyle={styles.customStyleBtn}
            />
            <TouchableOpacity
              onPress={() => Actions.pop()}
              style={styles.footerBtn}
            >
              <Text style={styles.footerBtnText}>
                Back to shopping cart
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Ordering;