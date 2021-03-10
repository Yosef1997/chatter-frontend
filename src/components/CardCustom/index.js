import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import ProfileImg from '../../assets/F9.jpg';
import Icon from 'react-native-vector-icons/AntDesign';

export default class index extends Component {
  render() {
    return (
      <View>
        <Image source={ProfileImg} />
        <View>
          <Text>{this.props.label}</Text>
          <Text>{this.props.message}</Text>
        </View>
        <Icon name={this.props.icon} />
      </View>
    );
  }
}
