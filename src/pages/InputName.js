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
import Icon from 'react-native-vector-icons/EvilIcons';
import {connect} from 'react-redux';
import {signin, detailUser} from '../components/Redux/Action/auth';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };
  doLogin = async () => {
    this.props.navigation.navigate('InputPassword');
  };

  render() {
    return (
      <ScrollView style={styles.backImgage}>
        <Header back="chevron-back" size3={25} cardText={styles.cardText} />
        <Text style={styles.title}>Create new account</Text>
        <Text style={styles.subTitle}>
          Other Chatter's user can see your name and profile
        </Text>
        <TouchableOpacity style={styles.cameraForm}>
          <Icon name="camera" size={50} />
        </TouchableOpacity>
        <InputCustom
          container={styles.inputForm}
          placeholder="Full name"
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
