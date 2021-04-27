import React, {Component} from 'react';
import {ScrollView, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Header from '../components/Header';
import ModalEmail from '../components/ModalEmail';
import ModalPassword from '../components/ModalPassword';
import {connect} from 'react-redux';
import {signout} from '../components/Redux/Action/auth';

class Account extends Component {
  // async componentDidMount() {
  //   await this.props.detailUser(this.props.auth.user.id);
  // }
  doLogout = () => {
    this.props.signout();
  };
  render() {
    return (
      <ScrollView style={styles.backImgage}>
        <Header label="Account" cardText={styles.cardText} />
        <ModalEmail
          label="Email"
          message="Write your email"
          inputText={this.props.auth.user.email}
          keyboardType="email-address"
        />
        <ModalPassword
          label="Password"
          message="Write your password"
          textInputProps={{secureTextEntry: true}}
        />
        <TouchableOpacity onPress={this.doLogout} style={styles.btn}>
          <Text style={styles.btnfnt}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cardText: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  backImgage: {
    flex: 1,
    backgroundColor: '#d9ecf2',
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
const mapDispatchToProps = {signout};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
