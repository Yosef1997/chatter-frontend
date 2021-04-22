import React, {Component} from 'react';
import {
  Modal,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import Button from '../Button';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {updateUser} from '../Redux/Action/auth';

class index extends Component {
  state = {
    modalVisible: false,
    inputEmail: this.props.inputText,
  };

  setModalVisible = async (visible) => {
    this.setState({modalVisible: visible});
  };

  emailValidation(values) {
    const re = /^(?!\.)((?!.*\.{2})[a-zA-Z0-9\u00E0-\u00FC.!#$%&'*+-/=?^_`{|}~\-\d]+)@(?!\.)([a-zA-Z0-9\u00E0-\u00FC\-\.\d]+)((\.([a-zA-Z]){2,63})+)$/i;
    const errors = {};
    const {email} = values;
    if (!email) {
      errors.msg = 'Email Required';
    } else if (re.test(email) === false) {
      errors.msg = 'Email inValid';
    }
    return errors;
  }

  doUpdate = async (values) => {
    const {user} = this.props.auth;
    const {token} = this.props.auth;
    await this.props.auth.updateUser(token, user.id, {email: values.email});
    this.setState({modalVisible: false});
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
              <Formik
                initialValues={{
                  email: '',
                }}
                validate={(values) => this.emailValidation(values)}
                onSubmit={(values, {resetForm}) => {
                  this.setState({isLoading: true});
                  this.doUpdate(values);
                  setTimeout(() => {
                    resetForm();
                  }, 500);
                }}>
                {({values, errors, handleChange, handleSubmit}) => (
                  <>
                    <Text style={styles.modalText}>{this.props.label}</Text>
                    <Text style={styles.text2Style}>{this.props.message}</Text>
                    <TextInput
                      onChangeText={handleChange('email')}
                      keyboardType="email-address"
                      value={values.email}
                      style={styles.input}
                    />
                    <Button onPress={handleSubmit}>Submit</Button>
                    {/* <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={handleSubmit}>
                      <Text style={styles.btnModal}>Submit</Text>
                    </Pressable> */}
                  </>
                )}
              </Formik>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}>
          <Text style={styles.textStyle}>{this.props.label}</Text>
          <Text style={styles.text2Style}>{this.state.inputEmail}</Text>
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
