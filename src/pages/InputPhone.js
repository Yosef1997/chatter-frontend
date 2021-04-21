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
import PickerLocation from '../components/PickerLocation';
import {connect} from 'react-redux';
import {signin, detailUser} from '../components/Redux/Action/auth';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };
  doLogin = async () => {
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
        <InputCustom
          placeholder="Phone number"
          inputStyle={styles.inputStyle}
          keyboardType="number-pad"
          container={styles.inputForm}
        />
        <View style={styles.btnForm}>
          <ButtonCircle onPress={this.doLogin}>Next</ButtonCircle>
        </View>
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
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {signin, detailUser};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
