import React, { Component } from 'react';
import { View } from 'react-native'
import Content from './app';
export default class extends Component {
  render() {
    const container = { flex: 1 };
    return (
      <View style={container}>
        <Content />
      </View>
    );
  }
};
