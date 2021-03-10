import React, {Component} from 'react';
import {ImageBackground, View, StyleSheet} from 'react-native';
import Search from '../components/InputCustom';
import CardProfile from '../components/CardCustom';
import BackImg from '../assets/background.jpg';
import Picker from '../components/Picker';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={BackImg} style={styles.backImgage}>
          <CardProfile label="Yosef" message="hello" icon="setting" size={25} />
          <Search Icon="search1" />
          <Picker icon1="persons" text="Groups" />
          <Picker icon1="person" text="Friends" />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImgage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
