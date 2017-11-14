import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native'

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }

  setValue = (field, value) => {
    this.setState({
      [field]: value, 
    });
  }

  render() {
    return (
      <View>
        <Text>Test</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={value => this.setValue('email', value)}
          value={this.state.email}
        />
      </View>
    );
  }
};
