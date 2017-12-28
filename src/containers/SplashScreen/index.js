import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'
import { Actions } from 'react-native-router-flux';

import {
  Button,
  Modal,
} from '../../components';
import { IMAGES } from '../../assets/style';
import styles from './style';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalLogin: false,
      modalSignUp: false,
    }
  }

  handleClickLogin = () => {
    this.setState({ modalLogin: !this.state.modalLogin });
  }

  handleClickSignIn = () => {
    this.setState({ modalSignUp: !this.state.modalSignUp });
  }

  closeModalLogin = () => {
    this.setState({ modalLogin: false });
  }

  closeModalSignUp = () => {
    this.setState({ modalSignUp: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundScreen}
          source={IMAGES.splash_screen}
        />
        <View style={styles.content}>
          <TouchableOpacity onPress={() => Actions.Home()}>
           <Image
            source={IMAGES.icon_logo}
            style={styles.imageLogo}
           />
          </TouchableOpacity>
          <View style={styles.footer}>
            <Button
              orange
              name='Login'
              marginRight={25}
              onPress={this.handleClickLogin}
            />
            <Button
              blue
              name='Sign Up'
              onPress={this.handleClickSignIn}
            />
          </View>
        </View>
        {
          this.state.modalLogin ?
          <Modal
            btnOrange
            textBtn='Login'
            placeholderLogin='Email'
            placeholderPass='Password'
            closeModal={this.closeModalLogin}
          /> : null
        }
        {
          this.state.modalSignUp ?
          <Modal
            btnBlue
            textBtn='Sign Up'
            placeholderLogin='Email'
            placeholderPass='Password'
            closeModal={this.closeModalSignUp}
          /> : null
        }
      </View>
    );
  }
};
