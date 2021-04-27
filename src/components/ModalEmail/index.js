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
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {updateUser} from '../Redux/Action/auth';

class index extends Component {
  state = {
    modalVisible: false,
    inputEmail: this.props.inputText,
    isLoading: false,
    isMessage: false,
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
      errors.msg = 'Email invalid';
    }
    return errors;
  }

  doUpdate = async (values) => {
    const {user} = this.props.auth;
    const {token} = this.props.auth;
    await this.props.updateUser(token, {id: user.id, email: values.email});
    setTimeout(() => {
      this.setState({
        isLoading: false,
        isMessage: true,
        inputEmail: values.email,
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
          <Formik
            initialValues={{
              email: '',
            }}
            validate={(values) => this.emailValidation(values)}
            onSubmit={(values) => {
              this.setState({isLoading: true});
              this.doUpdate(values);
            }}>
            {({values, errors, handleChange, handleBlur, handleSubmit}) => (
              <>
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
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      keyboardType="email-address"
                      value={values.email}
                      style={styles.input}
                    />
                    {errors.msg && (
                      <Text style={styles.textError}>{errors.msg}</Text>
                    )}
                    {this.props.auth.message !== '' && this.state.isMessage ? (
                      <Text style={styles.textSuccess}>
                        {this.props.auth.message}
                      </Text>
                    ) : null}
                    {this.props.auth.errorMsg !== '' && this.state.isMessage ? (
                      <Text style={styles.textError}>
                        {this.props.auth.errorMsg}
                      </Text>
                    ) : null}
                    {this.state.isLoading === true ? (
                      <ActivityIndicator size="large" color="#ff1616" />
                    ) : (
                      <View style={styles.btnForm}>
                        {values.email === '' || errors.msg ? (
                          <Button disabled={true} onPress={handleSubmit}>
                            Submit
                          </Button>
                        ) : (
                          <Button disabled={false} onPress={handleSubmit}>
                            Submit
                          </Button>
                        )}
                      </View>
                    )}
                  </View>
                </View>
              </>
            )}
          </Formik>
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
