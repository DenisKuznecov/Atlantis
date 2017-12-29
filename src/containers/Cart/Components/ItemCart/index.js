import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import {
  SelectDate,
  StepperInput,
} from '../../../../components';

import { IMAGES } from '../../../../assets/style';
import styles from './style';

export default (props) => {
  return (
    <View style={[styles.wrapItem, props.customStyle && props.customStyle]}>
      {
        props.subStatusText ?
        <Text style={styles.subStatusText}>
          {props.subStatusText}
        </Text> : null
      }
      <View style={[styles.countryRow, props.subTextCountryRow && styles.styleMargin]}>
        <View style={styles.wrapAvatar}>
          <Image
            source={IMAGES.post_image}
            style={styles.picture}
          />
        </View>
        <View style={styles.countryInfo}>
          <Text style={styles.countryTitle}>
            {props.title}
          </Text>
          <Text style={styles.discription}>
            {props.discription}
          </Text>
        </View>
      </View>
      {
        props.subTextCountryRow ?
        <View style={styles.subTextRow}>
          <Text style={styles.subTextCountry}>
            {props.subTextCountryRow}
          </Text>
        </View> : null
      }
      <View style={styles.wrapFilters}>
        <SelectDate
          customStyle={styles.customstyle}
        />
        <Text style={styles.filterTitle}>
          Guests
        </Text>
        <StepperInput
          title='Adult'
          icon={IMAGES.icon_grayUser}
        />
        <StepperInput
          title='Children'
          icon={IMAGES.icon_grayUser}
        />
        <StepperInput
          title='Babies'
          icon={IMAGES.icon_grayCart}
        />
        <View style={styles.resultRow}>
          <Text style={styles.filterTitle}>
            Amount
          </Text>
          <Text style={styles.filterPrice}>
            $ 70
          </Text>
        </View>
      </View>
    </View>
  );
};