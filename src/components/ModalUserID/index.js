import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-dialog-input';
import {connect} from 'react-redux';
import {updateUser} from '../Redux/Action/auth';

class index extends Component {
  state = {
    isDialogVisible: false,
    userID: '',
    inputUserID: this.props.inputText,
  };
  showDialog(isShow) {
    this.setState({isDialogVisible: isShow});
  }
  sendInput(inputText) {
    this.setState({userID: inputText, inputUserID: inputText});
    const {userID} = this.state;
    const {id} = this.props.auth.user;
    const {token} = this.props.auth;
    const data = new FormData();
    data.append('userID', userID);
    this.props.updateUser(token, id, data);
  }
  render() {
    return (
      <View>
        <Modal
          isDialogVisible={this.state.isDialogVisible}
          title={this.props.label}
          message={this.props.message}
          textInputProps={this.props.textInputProps}
          submitInput={(inputText) => {
            this.sendInput(inputText);
            this.showDialog(false);
          }}
          closeDialog={() => {
            this.showDialog(false);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            this.showDialog(true);
          }}
          style={this.props.modal}>
          <Text style={styles.label}>{this.props.label}</Text>
          <Text style={styles.input}>{this.state.inputUserID}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 5,
  },
});
const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = {updateUser};
export default connect(mapStateToProps, mapDispatchToProps)(index);
