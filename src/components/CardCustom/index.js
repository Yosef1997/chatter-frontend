import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class index extends Component {
  render() {
    return (
      <View style={this.props.parent}>
        <View style={styles.card}>
          <Icon name={this.props.icon1} size={this.props.size} />
          <Text style={this.props.textStyle}>{this.props.text}</Text>
        </View>
        <Image source={this.props.source} style={this.props.image} />
        <View style={styles.cardText}>
          <Text style={styles.label}>{this.props.label}</Text>
          <Text style={styles.message}>{this.props.message}</Text>
        </View>
        <TouchableOpacity onPress={this.props.onPress}>
          <Icon name={this.props.icon2} size={this.props.size} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
  },
  cardText: {
    flex: 1,
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
