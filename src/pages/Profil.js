import React, {Component} from 'react';
import {
  ImageBackground,
  // Modal,
  // Text,
  // TouchableOpacity,
  // View,
  StyleSheet,
  // Image,
} from 'react-native';
import BackImg from '../assets/background.jpg';
import Header from '../components/Header';
import ModalCamera from '../components/ModalCamera';
import ModalUserID from '../components/ModalUserID';
import ModalName from '../components/ModalName';
import ModalStatus from '../components/ModalStatus';
import ModalPhone from '../components/ModalPhone';
import {connect} from 'react-redux';
import {detailUser} from '../components/Redux/Action/auth';

class Profil extends Component {
  async componentDidMount() {
    const {id} = this.props.auth.user;
    await this.props.detailUser(id);
  }

  render() {
    return (
      <ImageBackground source={BackImg} style={styles.backImgage}>
        <Header label="Profile" />
        <ModalCamera />
        <ModalName
          label="Name"
          message="Write your name"
          inputText={this.props.auth.detailUser.name}
        />
        <ModalStatus
          label="Status"
          message="Write your status"
          inputText={this.props.auth.detailUser.status}
        />
        <ModalPhone
          label="Phone number"
          message="Write your Phone number"
          inputText={this.props.auth.detailUser.phone}
          keyboardType="numeric"
        />
        <ModalUserID
          label="User ID"
          message="Write your User ID"
          inputText={this.props.auth.detailUser.userID}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backImgage: {
    flex: 1,
  },
  // cardImg: {
  //   height: 150,
  //   width: 150,
  //   borderRadius: 150,
  //   opacity: 1,
  // },
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
  // centeredView: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: 22,
  // },
  // modalView: {
  //   margin: 20,
  //   backgroundColor: 'white',
  //   borderRadius: 20,
  //   padding: 35,
  //   alignItems: 'center',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5,
  // },
  // button: {
  //   borderRadius: 12,
  //   padding: 10,
  //   elevation: 2,
  //   marginBottom: 10,
  // },
  // buttonOpen: {
  //   backgroundColor: '#F194FF',
  // },
  // buttonClose: {
  //   backgroundColor: '#ff1616',
  // },
  // textStyle: {
  //   color: 'white',
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  // modalText: {
  //   marginBottom: 15,
  //   textAlign: 'center',
  // },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = {detailUser};
export default connect(mapStateToProps, mapDispatchToProps)(Profil);
