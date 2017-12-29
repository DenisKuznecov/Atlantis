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
  SelectBtn,
  Button,
  SelectDate,
} from '../../../components';
import { IMAGES } from '../../../assets/style';
import styles from './style';

class Filter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          rightBtn='Done'
          backBtn={() => Actions.pop()}
          title='Filter'
        />
        <ScrollView style={styles.scroll}>
          <View style={styles.content}>
            <View style={[styles.titleRow, styles.marginB]}>
              <Text style={styles.title}>
                From
              </Text>
            </View>
            <SelectBtn
              title='City of departure'
              customStyle={styles.styleSelectBtn}

            />
            <SelectBtn
              title='Place of departure'
              customStyle={styles.styleSelectBtn}
            />
            <SelectBtn
              title='Venue'
              customStyle={styles.styleSelectBtn}
            />
            <View style={styles.titleRow}>
              <Text style={styles.title}>
                Dates
              </Text>
            </View>
            <SelectDate
              placeholder='14 Jul 2017 - 21 Jul 2017'
              customStyle={styles.customStyleDate}
            />
            <View style={[styles.titleRow, styles.customMargin]}>
              <Text style={styles.title}>
                Types
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => Actions.Types()}
              style={styles.wrap}
            >
              <Text style={styles.titleBtn}>
                All types are selected
              </Text>
              <Image
                source={IMAGES.icon_arrowDown}
              />
            </TouchableOpacity>
            <View style={[styles.titleRow, styles.customMargin]}>
              <Text style={styles.title}>
                To
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => Actions.Directions()}
              style={styles.wrap}
            >
              <Text style={styles.titleBtn}>
                All directions are selected
              </Text>
              <Image
                source={IMAGES.icon_arrowDown}
              />
            </TouchableOpacity>
            <Button
              orange
              name='Clean the filter'
              onPress={() => Actions.Thanks()}
              customStyle={styles.customStyleBtn}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Filter;