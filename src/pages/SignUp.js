import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import BackImg from '../assets/background.jpg';
import Logo from '../assets/chatter.png';
import InputCustom from '../components/InputCustom';
import InputPassword from '../components/InputPassword';

export default class SignUp extends Component {
  render() {
    return (
      <ImageBackground source={BackImg} style={styles.backImgage}>
        <View style={styles.bg1}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.bg4}>
          <Text style={styles.title}>Sign Up</Text>
        </View>
        <View style={styles.bg2}>
          <Text style={styles.text}>Name</Text>
          <InputCustom container={styles.container} inputStyle={styles.input} />
        </View>
        <View style={styles.bg2}>
          <Text style={styles.text}>Email</Text>
          <InputCustom container={styles.container} inputStyle={styles.input} />
        </View>
        <View style={styles.bg2}>
          <Text style={styles.text}>Password</Text>
          <InputPassword container={styles.container} />
        </View>
        <TouchableOpacity style={styles.bg3}>
          <Text style={styles.btnfont}>Join the chatter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SignIn')}
          style={styles.bg5}>
          <Text style={styles.toLogin}>Sign In</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  backImgage: {
    flex: 1,
    resizeMode: 'cover',
    flexDirection: 'column',
  },
  bg1: {
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  bg2: {
    backgroundColor: 'white',
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 12,
    padding: 10,
  },
  bg3: {
    backgroundColor: '#ff1616',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 12,
    padding: 10,
  },
  logo: {
    height: 50,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnfont: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bg4: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 12,
    padding: 10,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  toLogin: {
    color: 'white',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  bg5: {
    alignItems: 'center',
    marginTop: 20,
  },
});
