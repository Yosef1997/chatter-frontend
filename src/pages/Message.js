import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import InputMessage from '../components/InputCustom';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {createChat} from '../components/Redux/Action/chat';

class Message extends Component {
  state = {
    message: '',
  };

  sendChat = async () => {
    await this.props.createChat(this.props.auth.token, {
      sender: this.props.auth.user.id,
      receiver: this.props.user.detailUser.id,
      message: this.state.message,
    });
    // this.props.auth.user.id,
    // this.props.user.detailUser.id,
    // this.state.message,

    console.log(
      this.props.user.detailUser.id,
      this.state.message,
      '<<<<<<<<<<<<<<<<<<',
    );
  };

  render() {
    const {detailUser} = this.props.user;
    return (
      <React.Fragment>
        <Header
          label={detailUser.name}
          icon="call-outline"
          size={25}
          icon1={styles.icon}
          size2={35}
          icon2="reorder-three-sharp"
          cardText={styles.cardText}
        />
        <ScrollView style={styles.backImgage}>
          <View style={styles.receiveForm}>
            <View style={styles.receive}>
              <Text style={styles.textMsg}>What's up?</Text>
            </View>
          </View>
          <View style={styles.sendForm}>
            <View style={styles.send}>
              <Text style={styles.textMsg}>fine</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.container}>
          <InputMessage
            Icon="plus"
            Icon2="instagram"
            size={25}
            iconStyle={styles.icon2}
            size2={25}
            container={styles.container}
            inputStyle={styles.inputStyle}
            onChangeText={(message) => this.setState({message})}
          />
          <TouchableOpacity style={styles.iconSend} onPress={this.sendChat}>
            <Icon name="send-sharp" size={25} color={'#ff1616'} />
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  cardText: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  backImgage: {
    flex: 1,
    backgroundColor: '#d9ecf2',
  },
  icon: {
    marginRight: 5,
  },
  icon2: {
    marginRight: 5,
  },
  iconSend: {
    marginLeft: 5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
  },
  inputStyle: {
    borderWidth: 0.1,
    flex: 1,
    borderRadius: 22,
    marginVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#d9ecf2',
  },
  receiveForm: {
    alignItems: 'baseline',
  },
  sendForm: {
    alignItems: 'flex-end',
  },
  receive: {
    backgroundColor: 'white',
    marginTop: 10,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 12,
  },
  send: {
    backgroundColor: 'pink',
    marginTop: 10,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 12,
  },
  textMsg: {
    fontSize: 16,
    fontWeight: '600',
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
});
const mapDispatchToProps = {createChat};
export default connect(mapStateToProps, mapDispatchToProps)(Message);
