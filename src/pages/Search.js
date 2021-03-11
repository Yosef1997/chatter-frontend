import React, {Component} from 'react';
import {ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import BackImg from '../assets/background.jpg';
import Header from '../components/Header';
import SearchBar from '../components/InputCustom';
import ProfileImg from '../assets/F9.jpg';
import CardChat from '../components/CardCustom';

export default class Search extends Component {
  render() {
    return (
      <ImageBackground source={BackImg} style={styles.backImgage}>
        <Header label="Search" />
        <SearchBar
          Icon="search1"
          size={15}
          container={styles.container}
          inputStyle={styles.input}
          iconStyle={styles.icon}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Message')}>
          <CardChat
            source={ProfileImg}
            label="Yosef"
            message="hello"
            style={styles.card}
            image={styles.cardImg}
          />
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  backImgage: {
    flex: 1,
  },
  input: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  cardImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  icon: {
    marginLeft: 15,
  },
});
