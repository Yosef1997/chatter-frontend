import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class index extends Component {
  render() {
    return (
      <View style={this.props.cardText}>
        <TouchableOpacity onPress={this.props.goBack}>
          <Icon
            name={this.props.back}
            size={this.props.size3}
            style={this.props.icon3}
          />
        </TouchableOpacity>

        <Text style={styles.label}>{this.props.label}</Text>
        <TouchableOpacity>
          <Icon
            name={this.props.icon}
            size={this.props.size}
            style={this.props.icon1}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name={this.props.icon2}
            size={this.props.size2}
            style={this.props.icon2}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 36,
    fontWeight: 'bold',
    flex: 1,
    color: '#ff1616',
  },
});
