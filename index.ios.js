/**
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class test_react_native_app extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome, styles.huy]}>
         LALALAL
         <Image
         style={{ height: 50, width: 50 }}
         source={{ uri: 'data:image/png;base64,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'}}></Image>
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'green',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  huy: {
    color: '#3891FF',
  }
});

AppRegistry.registerComponent('test_react_native_app', () => test_react_native_app);
