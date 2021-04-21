import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class app extends Component {
  render() {
    return (
      <View style={this.props.container}>
        <Text>{this.props.text}</Text>
        <TouchableOpacity>
          <Icon
            name={this.props.Icon}
            size={this.props.size}
            style={this.props.iconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name={this.props.Icon2}
            size={this.props.size2}
            style={this.props.iconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name={this.props.Icon3}
            size={this.props.size3}
            style={this.props.iconStyle}
          />
        </TouchableOpacity>
        <TextInput
          style={this.props.inputStyle}
          placeholder={this.props.placeholder}
          keyboardType={this.props.keyboardType}
          onChangeText={this.props.onChangeText}
          value={this.props.value}
        />
      </View>
    );
  }
}
