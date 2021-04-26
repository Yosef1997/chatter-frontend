import React, {Component} from 'react';
import {LogBox} from 'react-native';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
// import Logo from '../assets/chatter.png';
import Header from '../components/Header';
import InputCustom from '../components/InputCustom';
import ButtonCircle from '../components/ButtonCircle';
import PickerLocation from '../components/PickerLocation';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {signup} from '../components/Redux/Action/auth';

class SignIn extends Component {
  state = {
    isLoading: false,
    isMessage: false,
  };

  phoneValidation(values) {
    const errors = {};
    const {phone} = values;
    if (!phone) {
      errors.msg = 'phone required';
    } else if (phone.length <= 11) {
      errors.msg = 'phone should have eleven characters';
    }
    return errors;
  }

  doLogin = async (values) => {
    const {dataRegister} = this.props.auth;
    this.setState({isLoading: true});
    await this.props.signup({
      picture: dataRegister.picture,
      name: dataRegister.name,
      password: dataRegister.password,
      phone: values.phone,
    });
    setTimeout(() => {
      this.setState({isLoading: false, isMessage: true});
    }, 2000);
    setTimeout(() => {
      this.setState({isMessage: false});
    }, 5000);

    this.props.navigation.navigate('BottomTab');
  };

  render() {
    return (
      <ScrollView style={styles.backImgage}>
        <Header back="chevron-back" size3={25} cardText={styles.cardText} />
        <Text style={styles.title}>
          What's the phone number for this device
        </Text>
        <Text style={styles.subTitle}>
          By tapping arrow button, you accept Chatter's Terms and Conditions of
          Use and Privacy Policy.
        </Text>
        <PickerLocation text="Indonesia" />
        <Formik
          initialValues={{phone: ''}}
          validate={(values) => this.phoneValidation(values)}
          onSubmit={(values, {resetForm}) => {
            this.setState({isLoading: true});
            this.doLogin(values);
            setTimeout(() => {
              resetForm();
            }, 500);
          }}>
          {({values, errors, handleChange, handleBlur, handleSubmit}) => (
            <>
              <InputCustom
                placeholder="Phone number"
                inputStyle={styles.inputStyle}
                keyboardType="number-pad"
                container={styles.inputForm}
                value={values.phone}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
              />
              {errors.msg ? (
                <Text style={styles.textError}>{errors.msg}</Text>
              ) : null}
              {this.state.isLoading === true ? (
                <ActivityIndicator size="large" color="#ff1616" />
              ) : (
                <View style={styles.btnForm}>
                  {values.phone === '' || errors.msg ? (
                    <ButtonCircle disabled={true} onPress={handleSubmit} />
                  ) : (
                    <ButtonCircle disabled={false} onPress={handleSubmit} />
                  )}
                </View>
              )}
            </>
          )}
        </Formik>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cardText: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },

  inputForm: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  backImgage: {
    backgroundColor: '#d9ecf2',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '300',
    marginTop: 10,
    paddingHorizontal: 16,
  },
  btnForm: {
    paddingHorizontal: 16,
    marginTop: 50,
    alignItems: 'flex-end',
  },
  btnFacebookForm: {
    marginHorizontal: 16,
    marginTop: 15,
    paddingVertical: 16,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  btnFacebook: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputStyle: {
    borderBottomWidth: 1,
    marginHorizontal: 16,
    flex: 1,
    marginTop: 30,
  },
  textError: {
    fontSize: 14,
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {signup};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
