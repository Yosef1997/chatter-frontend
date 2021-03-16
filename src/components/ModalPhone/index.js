import React, {Component} from 'react';
import {
  Modal,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {updateUser} from '../Redux/Action/auth';

class index extends Component {
  state = {
    modalVisible: false,
    phone: '',
    inputPhone: this.props.inputText,
  };

  setModalVisible = async (visible) => {
    this.setState({modalVisible: visible});
  };
  closeModal = async () => {
    const {phone} = this.state;
    const {id} = this.props.auth.user;
    const {token} = this.props.auth;
    const data = new FormData();
    data.append('phone', phone);
    await this.props.updateUser(token, id, data);
    this.setState({modalVisible: false, inputPhone: this.state.phone});
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
              <Text style={styles.modalText}>{this.props.label}</Text>
              <Text style={styles.text2Style}>{this.props.message}</Text>
              <TextInput
                onChangeText={(phone) => this.setState({phone})}
                keyboardType={this.props.keyboardType}
                style={styles.input}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={this.closeModal}>
                <Text style={styles.btnModal}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}>
          <Text style={styles.textStyle}>{this.props.label}</Text>
          <Text style={styles.text2Style}>{this.state.inputPhone}</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 35,
    backgroundColor: 'white',
    alignItems: 'center',
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
    width: 200,
  },
  btnModal: {
    fontWeight: 'bold',
    color: 'white',
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = {updateUser};
export default connect(mapStateToProps, mapDispatchToProps)(index);
