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
import ItemCart from '../Components/ItemCart';

import styles from './style';

class ShoppingCart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backBtn={() => Actions.pop()}
          title='Shopping cart'
        />
        <ScrollView style={styles.scroll}>
          <View style={styles.content}>
            <StatusBar
              fill={1}
              customStyle={styles.styleStatusBar}
            />
            <ItemCart
              title='Golan heights. Sanctuary
            of Banias. Israel'
              discription='Departure from: Colony Beach, Бат Ям (07:05)'
              subText='Group excursion'
            />
            <ItemCart
              title='Golan heights. Sanctuary
            of Banias. Israel'
              discription='Departure from: Colony Beach, Бат Ям (07:05)'
              subText='Individual excursion'
              subTextCountryRow='Golan heights. Sanctuary of Banias. Israel'
              customStyle={styles.styleItemCart}
            />
            <View style={styles.resultRow}>
              <Text style={styles.filterTitle}>
                Total
              </Text>
              <Text style={styles.filterPrice}>
                $ 750
              </Text>
            </View>
          </View>
          <Button
            orange
            onPress={() => Actions.Ordering()}
            name='Checkout'
            customStyle={styles.customStyleBtn}
          />
          <TouchableOpacity
            onPress={() => Actions.pop()}
            style={styles.footerBtn}
          >
            <Text style={styles.footerBtnText}>
              Back to excursions
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default ShoppingCart;