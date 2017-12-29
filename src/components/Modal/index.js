import React from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Input,
  Button,
} from '../../components';

//import { IMAGES } from '../../assets/style';
import styles from './style';

export default (props) => {
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={true}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.modalTitle}>
            Login
          </Text>
          <View style={styles.wrapInputs}>
            <Input
              placeholder={props.placeholderLogin}
              //iconLeft={IMAGES.icon_email}
            />
            <Input
              placeholder={props.placeholderPass}
            />
          </View>
          <View style={styles.wrapBtn}>
            <Button
              orange={props.btnOrange}
              blue={props.btnBlue}
              name={props.textBtn}
            />
          </View>
          <TouchableOpacity
            style={styles.btnClose}
            onPress={props.closeModal}
          >
            <Icon
              name='close'
              style={styles.iconCloseBtn}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}