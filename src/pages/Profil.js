import React, {Component} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import BackImg from '../assets/background.jpg';
import Header from '../components/Header';
import ProfilImg from '../assets/F9.jpg';
import Modal from '../components/ModalCustom';

export default class Profil extends Component {
  render() {
    return (
      <ImageBackground source={BackImg} style={styles.backImgage}>
        <Header label="Profile" />
        <View style={styles.bg1}>
          <TouchableOpacity>
            <Image source={ProfilImg} style={styles.cardImg} />
          </TouchableOpacity>
        </View>
        <Modal label="Name" message="Write your name" modal={styles.btn} />
        <Modal label="Status" message="Write your status" modal={styles.btn} />
        <Modal
          label="Phone number"
          message="Write your Phone number"
          modal={styles.btn}
          textInputProps={{keyboardType: 'phone-pad'}}
        />
        <Modal
          label="User ID"
          message="Write your User ID"
          modal={styles.btn}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backImgage: {
    flex: 1,
  },
  cardImg: {
    height: 150,
    width: 150,
    borderRadius: 150,
    opacity: 1,
  },
  bg1: {
    backgroundColor: '#e6e4df',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 12,
  },
  btn: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginTop: 10,
    padding: 10,
    borderRadius: 12,
  },
});
