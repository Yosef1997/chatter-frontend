import React, {Component} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import BackImg from '../assets/background.jpg';
import CardSetting from '../components/CardCustom';

export default class Profil extends Component {
  render() {
    return (
      <ScrollView style={styles.backImgage}>
        <Header label="Setting" icon="ellipsis-vertical-outline" size={25} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Profil')}>
          <CardSetting
            icon1="person"
            text="Profile"
            size={20}
            card={styles.card}
            textStyle={styles.textStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Account')}>
          <CardSetting
            icon1="shield"
            text="Account"
            size={20}
            card={styles.card}
            textStyle={styles.textStyle}
          />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backImgage: {
    backgroundColor: '#d9ecf2',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    borderRadius: 12,
  },
  textStyle: {
    fontSize: 16,
    marginLeft: 10,
  },
});
