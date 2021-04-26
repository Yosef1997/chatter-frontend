import React, {Component} from 'react';
// import {LogBox} from 'react-native';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
// import Logo from '../assets/chatter.png';
import Header from '../components/Header';
import InputCustom from '../components/InputPassword';
import ButtonCircle from '../components/ButtonCircle';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {dataRegister} from '../components/Redux/Action/auth';

class SignIn extends Component {
  state = {
    isLoading: false,
    isMessage: false,
  };

  passwordValidation(values) {
    const errors = {};
    const {password, repeatPassword} = values;
    if (!password) {
      errors.msg = 'Password required';
    } else if (password.length < 8) {
      errors.msg = 'Password should have eight characters';
    } else if (password !== repeatPassword) {
      errors.msg = "Repeat password doesn't match password";
    }
    return errors;
  }

  doLogin = async (values) => {
    this.setState({isLoading: true});
    await this.props.dataRegister({password: values.password});
    setTimeout(() => {
      this.setState({isLoading: false, isMessage: true});
    }, 2000);
    setTimeout(() => {
      this.setState({isMessage: false});
    }, 5000);
    this.props.navigation.navigate('InputPhone');
  };

  render() {
    return (
      <ScrollView style={styles.backImgage}>
        <Header back="chevron-back" size3={25} cardText={styles.cardText} />
        <Text style={styles.title}>Create Password</Text>
        <Text style={styles.subTitle}>
          Using at least one latter, one number, and four other character
        </Text>
        <Formik
          initialValues={{password: '', repeatPassword: ''}}
          validate={(values) => this.passwordValidation(values)}
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
                container={styles.inputForm}
                placeholder="Password"
                inputStyle={styles.inputStyle}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />
              <InputCustom
                container={styles.inputForm}
                placeholder="Repeat password"
                inputStyle={styles.inputStyle}
                value={values.repeatPassword}
                onChangeText={handleChange('repeatPassword')}
                onBlur={handleBlur('repeatPassword')}
              />
              {errors.msg ? (
                <Text style={styles.textError}>{errors.msg}</Text>
              ) : null}
              {this.state.isLoading === true ? (
                <ActivityIndicator size="large" color="#ff1616" />
              ) : (
                <View style={styles.btnForm}>
                  {values.password === '' ||
                  values.repeatPassword === '' ||
                  errors.msg ? (
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
  backImgage: {
    backgroundColor: '#d9ecf2',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cameraForm: {
    borderWidth: 0.5,
    width: 100,
    height: 100,
    borderRadius: 100,
    paddingVertical: 30,
    paddingHorizontal: 25,
    marginTop: 16,
    marginLeft: 16,
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
  inputStyle: {
    borderBottomWidth: 1,
    marginHorizontal: 16,
    flex: 1,
    marginTop: 30,
  },
  inputForm: {
    flexDirection: 'row',
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

const mapDispatchToProps = {dataRegister};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
