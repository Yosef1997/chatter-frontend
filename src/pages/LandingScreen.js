import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import logo from '../assets/chatter.png';
import Button from '../components/Button';

export default class LandingScreen extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Welcome to Chatter</Text>
        <Text style={styles.subTitle}>
          Free Messaging, voice, and video calss, and more
        </Text>
        <Button onPress={() => this.props.navigation.navigate('SignIn')}>
          Log In
        </Button>
        <TouchableOpacity>
          <Text style={styles.textSignUp}>Sign up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#d9ecf2',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logo: {
    width: 200,
    resizeMode: 'contain',
    marginTop: 150,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    color: 'grey',
    marginTop: 10,
    marginBottom: 250,
  },
  textSignUp: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 20,
  },
});
