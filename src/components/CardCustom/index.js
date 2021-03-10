import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import ProfileImg from '../../assets/F9.jpg';
import Icon from 'react-native-vector-icons/AntDesign';

export default class index extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Image source={ProfileImg} style={styles.cardImg} />
        <View style={styles.cardText}>
          <Text style={styles.label}>{this.props.label}</Text>
          <Text style={styles.message}>{this.props.message}</Text>
        </View>
        <Icon
          name={this.props.icon}
          size={this.props.size}
          style={styles.icon}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  cardText: {
    flex: 1,
    marginLeft: 10,
  },
  cardImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
