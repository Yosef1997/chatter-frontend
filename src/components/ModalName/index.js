import React, {Component} from 'react';
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {updateUser} from '../Redux/Action/auth';

class index extends Component {
  state = {
    modalVisible: this.props.modalVisible,
    inputName: this.props.inputText,
  };

  setModalVisible = async (visible) => {
    this.setState({modalVisible: visible});
  };
  closeModal = async () => {
    this.setState({modalVisible: false});
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          backdropOpacity={0.5}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{alignItems: 'flex-end'}}>
                <Pressable onPress={this.props.onPress}>
                  <Icon name="close" size={25} />
                </Pressable>
              </View>
              <Text style={styles.modalText}>{this.props.label}</Text>
              <Text style={styles.text2Style}>{this.props.message}</Text>
              <Formik
                initialValues={this.props.initialValues}
                validate={this.props.validate}
                onSubmit={this.props.onSubmit}>
                {this.props.children}
              </Formik>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={this.props.onPress}>
          <Text style={styles.textStyle}>{this.props.label}</Text>
          <Text style={styles.text2Style}>{this.state.inputName}</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
  btnForm: {
    marginTop: 20,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = {updateUser};
export default connect(mapStateToProps, mapDispatchToProps)(index);
