import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  ActivityIndicator,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import ModalCamera from '../components/ModalCamera';
import ModalName from '../components/ModalName';
import ModalPhone from '../components/ModalPhone';
import ModalStatus from '../components/ModalStatus';
import ModalUserID from '../components/ModalUserID';
import {connect} from 'react-redux';
import {updateUser} from '../components/Redux/Action/auth';

class Profil extends Component {
  state = {
    isLoading: false,
    isMessage: false,
  };

  render() {
    const {name, status, phone, userID} = this.props.auth.user;
    return (
      <ScrollView style={styles.backImgage}>
        <Header label="Profile" cardText={styles.cardText} />
        <ModalCamera />

        <ModalName label="Name" message="Write your name" inputText={name} />

        <ModalPhone
          label="Phone"
          message="Write your phone number"
          inputText={phone}
        />

        <ModalStatus
          label="Status"
          message="Write your status"
          inputText={status}
        />

        <ModalUserID
          label="User ID"
          message="Write your User ID"
          inputText={userID}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backImgage: {
    flex: 1,
    backgroundColor: '#d9ecf2',
  },
  cardText: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
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
  input: {
    borderBottomWidth: 1,
  },
  btnForm: {
    marginTop: 20,
  },
  textError: {
    fontSize: 11,
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  textSuccess: {
    fontSize: 11,
    color: 'green',
    textAlign: 'center',
    marginTop: 10,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = {updateUser};
export default connect(mapStateToProps, mapDispatchToProps)(Profil);
