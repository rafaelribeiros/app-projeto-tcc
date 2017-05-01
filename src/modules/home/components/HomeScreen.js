import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ alignItems: 'center' }}><Text>Olá Carlos</Text></View>
    );
  }
}
export default HomeScreen;
