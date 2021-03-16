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
        <View style={styles.bg1}>
          <TouchableOpacity>
            <Image source={ProfilImg} style={styles.cardImg} />
          </TouchableOpacity>
        </View>
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = {detailUser};
export default connect(mapStateToProps, mapDispatchToProps)(Profil);
