import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
} from 'react-native';
// import Logo from '../assets/chatter.png';
import Header from '../components/Header';
import InputCustom from '../components/InputCustom';
import ButtonCircle from '../components/ButtonCircle';
import Icon from 'react-native-vector-icons/EvilIcons';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {dataRegister} from '../components/Redux/Action/auth';

class SignIn extends Component {
  state = {
    isLoading: false,
    isMessage: false,
  };

  nameValidation(values) {
    const errors = {};
    const {name} = values;
    if (!name) {
      errors.msg = 'Name required';
    } else if (name.length < 3) {
      errors.msg = 'Name should have three characters';
    }
    return errors;
  }

  doLogin = async (values) => {
    this.setState({isLoading: true});
    await this.props.dataRegister({name: values.name});
    setTimeout(() => {
      this.setState({isLoading: false, isMessage: true});
    }, 2000);
    setTimeout(() => {
      this.setState({isMessage: false});
    }, 5000);
    this.props.navigation.navigate('InputPassword');
  };

  render() {
    return (
      <ScrollView style={styles.backImgage}>
        <Header
          goBack={() => this.props.navigation.goBack()}
          back="chevron-back"
          size3={25}
          cardText={styles.cardText}
        />
        <Text style={styles.title}>Create new account</Text>
        <Text style={styles.subTitle}>
          Other Chatter's user can see your name and profile
        </Text>
        {this.state.isLoading === true && <ActivityIndicator color="#ff1616" />}
        {this.state.message !== '' && this.state.type === 'danger' ? (
          <Text style={styles.textError}>{this.state.message}</Text>
        ) : (
          <Text style={styles.textSuccess}>{this.state.message}</Text>
        )}

        <Formik
          initialValues={{name: ''}}
          validate={(values) => this.nameValidation(values)}
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
                placeholder="Full name"
                inputStyle={styles.inputStyle}
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
              />
              {errors.msg ? (
                <Text style={styles.textError}>{errors.msg}</Text>
              ) : null}
              {this.state.isLoading === true ? (
                <ActivityIndicator size="large" color="#ff1616" />
              ) : (
                <View style={styles.btnForm}>
                  {values.name === '' ? (
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
    marginBottom: 20,
  },
  textError: {
    fontSize: 14,
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  textSuccess: {
    fontSize: 14,
    color: 'green',
    textAlign: 'center',
    marginTop: 10,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {dataRegister};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
