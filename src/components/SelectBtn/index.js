import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import Picker from 'react-native-picker';

import { IMAGES } from '../../assets/style';
import styles from './style';

class SelectBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: null,
    };
  }
  openSelectDate = () => {
    let data = ['17 December 2017', '17 December 2017'];
    Picker.init({
      pickerData: data,
      selectedValue: [],
      onPickerConfirm: data => {
        this.setState({
          selectValue: data,
        });
        this.props.data = this.selectValue;
      },
      onPickerCancel: data => {
        console.log('2',data);
      },
      onPickerSelect: data => {
        console.log('33',data);
      }
    });
    Picker.show();
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.wrap, this.props.customStyle]}
        onPress={this.openSelectDate}
      >
        <Text style={[styles.title, this.state.selectValue && styles.activeTitle]}>
          {this.state.selectValue || this.props.title}
        </Text>
        <Image
          source={IMAGES.icon_arrowDown}
        />
      </TouchableOpacity>
    );
  }
}

export default SelectBtn;