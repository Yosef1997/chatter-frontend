import React, {Component} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import BackImg from '../assets/background.jpg';
import Header from '../components/Header';
import Modal from '../components/ModalCustom';

export default class Account extends Component {
  render() {
    return (
      <ImageBackground source={BackImg} style={styles.backImgage}>
        <Header label="Account" />
        <Modal
          label="Email"
          message="Write your email"
          modal={styles.btn}
          textInputProps={{keyboardType: 'email-address'}}
        />
        <Modal
          label="Password"
          message="Write your password"
          modal={styles.btn}
          textInputProps={{secureTextEntry: true}}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnfnt}>Sign Out</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backImgage: {
    flex: 1,
  },
  btn: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginTop: 10,
    padding: 10,
    borderRadius: 12,
  },
  btnfnt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
