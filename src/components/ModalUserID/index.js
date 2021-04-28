import React, {Component} from 'react';
import {
  Modal,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  View,
  ActivityIndicator,
} from 'react-native';
import Button from '../Button';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {updateUser} from '../Redux/Action/auth';

class index extends Component {
  state = {
    modalVisible: false,
    inputText: this.props.inputText,
    userID: '',
    isLoading: false,
    isMessage: false,
  };

  setModalVisible = async (visible) => {
    this.setState({modalVisible: visible});
  };

  updateUserID = async () => {
    this.setState({isLoading: true});
    const {user} = this.props.auth;
    const {token} = this.props.auth;
    const {userID} = this.state;
    await this.props.updateUser(token, {
      id: user.id,
      userID: userID,
    });
    setTimeout(() => {
      this.setState({
        isLoading: false,
        isMessage: true,
        inputText: userID,
      });
    }, 2000);
    setTimeout(() => {
      this.setState({
        isMessage: false,
        modalVisible: false,
      });
    }, 4000);
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{alignItems: 'flex-end'}}>
                <Pressable onPress={() => this.setModalVisible(false)}>
                  <Icon name="close" size={25} />
                </Pressable>
              </View>
              <Text style={styles.modalText}>{this.props.label}</Text>
              <Text style={styles.text2Style}>{this.props.message}</Text>
              <TextInput
                onChangeText={(userID) => this.setState({userID})}
                style={styles.input}
              />
              {this.props.auth.message !== '' && this.state.isMessage ? (
                <Text style={styles.textSuccess}>
                  {this.props.auth.message}
                </Text>
              ) : null}
              {this.props.auth.errorMsg !== '' && this.state.isMessage ? (
                <Text style={styles.textError}>{this.props.auth.errorMsg}</Text>
              ) : null}
              {this.state.isLoading === true ? (
                <ActivityIndicator size="large" color="#ff1616" />
              ) : (
                <View style={styles.btnForm}>
                  {this.state.userID === '' ? (
                    <Button disabled={true} onPress={this.updateUserID}>
                      Submit
                    </Button>
                  ) : (
                    <Button disabled={false} onPress={this.updateUserID}>
                      Submit
                    </Button>
                  )}
                </View>
              )}
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}>
          <Text style={styles.textStyle}>{this.props.label}</Text>
          <Text style={styles.text2Style}>{this.state.inputText}</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 35,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 12,
    padding: 10,
    elevation: 2,
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: 'white',
  },
  buttonClose: {
    backgroundColor: '#ff1616',
  },
  textStyle: {
    fontWeight: 'bold',
  },
  text2Style: {
    fontSize: 14,
    fontWeight: '600',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
  },
  btnModal: {
    fontWeight: 'bold',
    color: 'white',
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
export default connect(mapStateToProps, mapDispatchToProps)(index);
