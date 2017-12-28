import React, { Component } from 'react';
import { Router } from 'react-native-router-flux';
import {
  View,
} from 'react-native';

import scenes from './scenes';

class Content extends Component {
  lockBackButton = () => true;
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Router
          scenes={scenes}
          onBackAndroid={this.lockBackButton}
          backAndroidHandler={this.lockBackButton}
        />
      </View>
    );
  }
}


export default Content;
