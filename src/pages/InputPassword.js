import React, {Component} from 'react';
import {LogBox} from 'react-native';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// import Logo from '../assets/chatter.png';
import Header from '../components/Header';
import InputCustom from '../components/InputCustom';
import ButtonCircle from '../components/ButtonCircle';
import {connect} from 'react-redux';
import {signin, detailUser} from '../components/Redux/Action/auth';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };
  doLogin = async () => {
    this.props.navigation.navigate('InputPhone');
  };

  render() {
    return (
      <ScrollView style={styles.backImgage}>
        <Header back="chevron-back" size3={25} />
        <Text style={styles.title}>Create Password</Text>
        <Text style={styles.subTitle}>
          Using at least one latter, one number, and four other character
        </Text>
        <InputCustom
          container={styles.inputForm}
          placeholder="Password"
          inputStyle={styles.inputStyle}
        />
        <InputCustom
          container={styles.inputForm}
          placeholder="Repeat password"
          inputStyle={styles.inputStyle}
        />

        <View style={styles.btnForm}>
          <ButtonCircle onPress={this.doLogin}>Next</ButtonCircle>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backImgage: {
    backgroundColor: '#d9ecf2',
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
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {signin, detailUser};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
