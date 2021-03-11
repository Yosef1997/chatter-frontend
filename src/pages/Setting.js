import React, {Component} from 'react';
import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import BackImg from '../assets/background.jpg';
import CardSetting from '../components/CardCustom';

export default class Profil extends Component {
  render() {
    return (
      <ImageBackground source={BackImg} style={styles.backImgage}>
        <Header label="Setting" icon="ellipsis-vertical-outline" size={25} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Account')}>
          <CardSetting
            icon1="person"
            text="Account"
            size={20}
            card={styles.card}
            textStyle={styles.textStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <CardSetting
            icon1="shield"
            text="Privacy"
            size={20}
            card={styles.card}
            textStyle={styles.textStyle}
          />
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backImgage: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'flex-start',
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
