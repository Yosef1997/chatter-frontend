import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// import Logo from '../assets/chatter.png';
import Header from '../components/Header';
import Button from '../components/Button';
import {connect} from 'react-redux';
import {signin, detailUser} from '../components/Redux/Action/auth';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };
  doLogin = async () => {
    this.props.navigation.navigate('Login');
    // const {email, password} = this.state;
    // await this.props.signin(email, password);
    // await this.props.detailUser(this.props.auth.user.id);
    // if (this.props.auth.token !== null) {
    //   this.props.navigation.navigate('BottomTab');
    // }
  };

  render() {
    return (
      <ScrollView style={styles.backImgage}>
        <Header back="chevron-back" size3={25} cardText={styles.cardText} />
        <Text style={styles.title}>Log in to Chatter</Text>
        <Text style={styles.subTitle}>
          Log in with your registered phonre number to get{'\n'}started
        </Text>
        <Text style={styles.subTitle}>
          If you linked your account to Facebook, you can{'\n'}also log in that
          way
        </Text>
        <View style={styles.btnForm}>
          <Button onPress={this.doLogin}>Log in with phone number</Button>
        </View>
        <TouchableOpacity style={styles.btnFacebookForm}>
          <Text style={styles.btnFacebook}>Continue with Facebook</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cardText: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  backImgage: {
    backgroundColor: '#d9ecf2',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '300',
    marginTop: 10,
    paddingHorizontal: 16,
  },
  btnForm: {
    paddingHorizontal: 16,
    marginTop: 350,
  },
  btnFacebookForm: {
    marginHorizontal: 16,
    marginTop: 15,
    paddingVertical: 16,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  btnFacebook: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {signin, detailUser};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
