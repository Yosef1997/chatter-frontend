import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  ActivityIndicator,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import ProfilImg from '../assets/F9.jpg';
import Button from '../components/Button';
import Header from '../components/Header';
import ModalCamera from '../components/ModalCamera';
import Modal from '../components/ModalName';
import {connect} from 'react-redux';
import {updateUser} from '../components/Redux/Action/auth';

class Profil extends Component {
  state = {
    modalVisible: false,
    isLoading: false,
    isMessage: false,
  };
  nameValidation(values) {
    const errors = {};
    const {name} = values;
    if (name.length < 3) {
      errors.msg = 'Name have minimum 3 characters';
    }
    return errors;
  }
  phoneValidation(values) {
    const errors = {};
    const {phone} = values;
    if (phone.length < 11) {
      errors.msg = 'Minimum 11 numbers';
    }
    return errors;
  }
  doUpdate = async (values) => {
    const {token} = this.props.auth;
    this.setState({isLoading: true});
    await this.props.updateUser(token, {
      id: this.props.auth.user.id,
      name: values.name,
      status: values.status,
      phone: values.phone,
      userID: values.userID,
    });
    setTimeout(() => {
      this.setState({isLoading: false, isMessage: true});
    }, 2000);
    setTimeout(() => {
      this.setState({isMessage: false});
    }, 5000);
    this.setState({modalVisible: false});
  };

  render() {
    return (
      <ScrollView style={styles.backImgage}>
        <Header label="Profile" cardText={styles.cardText} />
        <ModalCamera source={ProfilImg} />
        {/* <Modal
          label="Name"
          message="Write your name"
          onPress={() =>
            this.setState({modalVisible: !this.state.modalVisible})
          }
          modalVisible={this.state.modalVisible}
          inputText={this.props.auth.user.name}
          initialValues={{name: this.props.auth.user.name}}
          validate={(values) => this.nameValidation(values)}
          onSubmit={(values, {resetForm}) => {
            this.setState({isLoading: true});
            this.doUpdate(values);
            setTimeout(() => {
              resetForm();
            }, 500);
          }}>
          {({values, errors, handleChange, handleBlur, handleSubmit}) => (
            <>
              <TextInput
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                keyboardType={this.props.keyboardType}
                style={styles.input}
              />
              {errors.msg && <Text style={styles.textError}>{errors.msg}</Text>}
              {this.state.isLoading === true ? (
                <ActivityIndicator size="large" color="#ff1616" />
              ) : (
                <View style={styles.btnForm}>
                  {values.name === '' || errors.msg ? (
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
            </>
          )}
        </Modal>

        <Modal
          label="Status"
          message="Write your status"
          modalVisible={this.state.modalVisible}
          initialValues={{status: this.props.auth.user.status}}
          onSubmit={(values, {resetForm}) => {
            this.setState({isLoading: true});
            this.doUpdate(values);
            setTimeout(() => {
              resetForm();
            }, 500);
          }}>
          {({values, handleChange, handleBlur, handleSubmit}) => (
            <>
              <TextInput
                onChangeText={handleChange('status')}
                onBlur={handleBlur('status')}
                value={values.status}
                keyboardType={this.props.keyboardType}
                style={styles.input}
              />
              {this.state.isLoading === true ? (
                <ActivityIndicator size="large" color="#ff1616" />
              ) : (
                <View style={styles.btnForm}>
                  <Button disabled={false} onPress={handleSubmit}>
                    Submit
                  </Button>
                </View>
              )}
            </>
          )}
        </Modal>

        <Modal
          label="Phone Number"
          message="Write your phone number"
          modalVisible={this.state.modalVisible}
          initialValues={{phone: ''}}
          validate={(values) => this.phoneValidation(values)}
          onSubmit={(values, {resetForm}) => {
            this.setState({isLoading: true});
            this.doUpdate(values);
            setTimeout(() => {
              resetForm();
            }, 500);
          }}>
          {({values, errors, handleChange, handleBlur, handleSubmit}) => (
            <>
              <TextInput
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
                keyboardType={this.props.keyboardType}
                style={styles.input}
              />
              {errors.msg && <Text style={styles.textError}>{errors.msg}</Text>}
              {this.state.isLoading === true ? (
                <ActivityIndicator size="large" color="#ff1616" />
              ) : (
                <View style={styles.btnForm}>
                  {values.phone === '' || errors.msg ? (
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
            </>
          )}
        </Modal>

        <Modal
          label="User ID"
          message="Write your User ID"
          modalVisible={this.state.modalVisible}
          initialValues={{userID: ''}}
          onSubmit={(values, {resetForm}) => {
            this.setState({isLoading: true});
            this.doUpdate(values);
            setTimeout(() => {
              resetForm();
            }, 500);
          }}>
          {({values, handleChange, handleBlur, handleSubmit}) => (
            <>
              <TextInput
                onChangeText={handleChange('userID')}
                onBlur={handleBlur('userID')}
                value={values.userID}
                keyboardType={this.props.keyboardType}
                style={styles.input}
              />
              {this.state.isLoading === true ? (
                <ActivityIndicator size="large" color="#ff1616" />
              ) : (
                <View style={styles.btnForm}>
                  {values.userID === '' ? (
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
            </>
          )}
        </Modal> */}
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
    width: 200,
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
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = {updateUser};
export default connect(mapStateToProps, mapDispatchToProps)(Profil);
