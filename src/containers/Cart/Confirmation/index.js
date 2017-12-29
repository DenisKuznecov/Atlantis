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
  Button,
  StatusBar,
} from '../../../components';

import styles from './style';

class Confirmation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backBtn={() => Actions.pop()}
          title='Confirmation'
        />
        <ScrollView style={styles.scroll}>
          <View style={styles.content}>
            <StatusBar
              fill={3}
              customStyle={styles.styleStatusBar}
            />
            <View style={styles.wrapTitle}>
              <Text style={styles.title}>
                Please check and confirm your order
              </Text>
              <Text style={styles.titleCountry}>
                Golan heights. Sanctuary of Banias. Israel
              </Text>
              <Text style={styles.title}>
                Akko, Rimonim Palm Beach
              </Text>
            </View>
            <View style={styles.infoRow}>
              <View style={styles.infoLeft}>
                <Text style={styles.infoText}>
                  25-11-2017, 05:40
                </Text>
              </View>
            </View>
            <View style={styles.infoRow}>
              <View style={[styles.infoLeft, styles.styleFlex]}>
                <Text style={styles.infoTextMedium}>
                  Quantity:
                </Text>
                <Text style={styles.infoTextNumber}>
                   3
                </Text>
              </View>
              <View style={styles.infoRight}>
                <Text style={styles.infoText}>
                  $ 210
                </Text>
              </View>
            </View>
            <View style={styles.infoRow}>
              <View style={[styles.infoLeft, styles.styleFlex]}>
                <Text style={styles.infoTextMedium}>
                  Total
                </Text>
              </View>
              <View style={styles.infoRight}>
                <Text style={styles.infoText}>
                  $ 750
                </Text>
              </View>
            </View>
            <View style={styles.infoRow}>
              <View>
                <Text style={[styles.infoTextMedium, styles.marginB]}>
                  Personal information
                </Text>
                <Text style={styles.infoText}>
                  Maurice Armstrong, Italy
                </Text>
              </View>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}>
                garth.block@gmail.com
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoText}>
                851-561-1230
              </Text>
            </View>
            <Button
              orange
              name='Order'
              onPress={() => Actions.Thanks()}
              customStyle={styles.customStyleBtn}
            />
            <TouchableOpacity
              onPress={() => Actions.pop()}
              style={styles.footerBtn}
            >
              <Text style={styles.footerBtnText}>
                Back to ordering
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Confirmation;