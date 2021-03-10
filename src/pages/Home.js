import React, {Component} from 'react';
import {Text, View} from 'react-native';
import CardProfile from '../components/CardCustom';

export default class Home extends Component {
  render() {
    return (
      <View>
        <CardProfile />
      </View>
    );
  }
}
