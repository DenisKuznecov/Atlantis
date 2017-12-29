import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Input,
} from '../../components';
import { IMAGES } from '../../assets/style';
import styles from './style';

class StepperInput extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 0,
    }
  }

  inputCounter = (a) => {
    switch(a) {
      case 'max': {
        this.setState({
          inputValue: this.state.inputValue + 1,
        });
        break;
      }
      case "min": {
        if (this.state.inputValue > 0) {
          this.setState({
            inputValue: this.state.inputValue - 1,
          });
        }
        break;
      }
      default: break;
    }
  }

  render() {
    const {
      title,
      icon,
    } = this.props;
    return (
      <View style={styles.wrap}>
        <View style={styles.leftCol}>
          {
            icon ?
            <Image
              style={styles.icon}
              source={icon}
            /> : null
          }
          {
            title ?
            <Text style={styles.title}>
              {title}
            </Text> : null
          }
        </View>
        <View style={styles.rightCol}>
          <Text style={styles.price}>
            $ 20
          </Text>
          <View style={styles.wrapInput}>
            <TouchableOpacity
              onPress={() => this.inputCounter('min')}
              style={styles.btnMin}
            >
              <Image
                source={IMAGES.icon_min}
              />
            </TouchableOpacity>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.styleInput}
              value={String(this.state.inputValue)}
            />
            <TouchableOpacity
              onPress={() => this.inputCounter('max')}
              style={styles.btnMax}
            >
              <Image
                source={IMAGES.icon_plus}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default StepperInput;