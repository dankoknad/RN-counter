import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class VerticalSeparator extends Component {
  render() {
    return (
      <View style={{height: this.props.height}}></View>
    );
  }
}

// export default const VerticalSeparator = (props) => <View style={{height: this.props.height}} ></View>

export default VerticalSeparator
