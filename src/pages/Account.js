import React, {Component} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import BackImg from '../assets/background.jpg';
import Header from '../components/Header';
import ModalEmail from '../components/ModalEmail';
import ModalPassword from '../components/ModalPassword';
import {connect} from 'react-redux';
import {signout, detailUser} from '../components/Redux/Action/auth';

class Account extends Component {
  async componentDidMount() {
    await this.props.detailUser(this.props.auth.user.id);
  }
  doLogout = () => {
    this.props.signout();
  };
  render() {
    return (
      <ImageBackground source={BackImg} style={styles.backImgage}>
        <Header label="Account" />
        <ModalEmail
          label="Email"
          message="Write your email"
          inputText={this.props.auth.detailUser.email}
          keyboardType="email-address"
        />
        <ModalPassword
          label="Password"
          message="Write your password"
          modal={styles.btn}
          textInputProps={{secureTextEntry: true}}
        />
        <TouchableOpacity onPress={this.doLogout} style={styles.btn}>
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = {signout, detailUser};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
