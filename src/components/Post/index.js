import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import Button from '../../components/Button';
import { IMAGES } from '../../assets/style';

import styles from './style';

export default props => (
  <TouchableOpacity
    onPress={props.onPressPost}
    style={styles.container}>
    <View style={styles.postImage}>
      <Image
        style={styles.image}
        source={props.postImage}
      />
      <View style={styles.footer}>
        <View style={styles.wrapColLeft}>
          {
            props.name ?
            <Text style={styles.leftText}>
              {props.name}
            </Text> : null
          }
        </View>
        <View style={styles.wrapPrices}>
          {
            props.homePrice ?
          <View style={styles.priceRow}>
            <Image
              source={IMAGES.icon_home}
              style={styles.icon}
            />
              <Text style={styles.price}>
                from $ {props.homePrice}
              </Text>
          </View> : null
          }
          {
            props.markerPrice ?
            <View style={[styles.priceRow, styles.marginB]}>
              <Image
                source={IMAGES.icon_location}
                style={styles.icon}
              />
                <Text style={styles.price}>
                  from ₪ {props.markerPrice}
                </Text>
            </View> : null
          }
          {
            props.userPrice ?
            <View style={[styles.priceRow, styles.marginB]}>
              <Image
                source={IMAGES.icon_user}
                style={styles.icon}
              />
              <Text style={styles.price}>
                $ {props.userPrice}
              </Text>
            </View> : null
          }
        </View>
      </View>
    </View>
    {
      props.title ?
      <Text style={styles.title}>
        {props.title}
      </Text> : null
    }
    {
      props.text ?
      <Text
        numberOfLines={5}
        style={styles.text}
      >
        {props.text}
      </Text> : null
    }
    <Button
      orange
      name='Add to basket'
    />
  </TouchableOpacity>
);