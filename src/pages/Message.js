import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import BackImg from '../assets/background.jpg';
import InputMessage from '../components/InputCustom';
import {connect} from 'react-redux';

class Message extends Component {
  render() {
    return (
      <React.Fragment>
        <Header
          label={this.props.user.chatUser.name}
          icon="call-outline"
          size={25}
          icon1={styles.icon}
          size2={35}
          icon2="reorder-three-sharp"
        />
        <ScrollView style={styles.backImgage}>
          <ScrollView>
            {[
              ...Array(1000).map((item) => {
                return <Text>asdbg</Text>;
              }),
            ]}
          </ScrollView>
        </ScrollView>
        <InputMessage
          Icon="plus"
          Icon2="instagram"
          size={25}
          iconStyle={styles.icon2}
          size2={25}
          container={styles.container}
          inputStyle={styles.inputStyle}
        />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  backImgage: {
    flex: 1,
    resizeMode: 'cover',
  },
  icon: {
    marginRight: 15,
  },
  icon2: {
    marginRight: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  inputStyle: {
    borderWidth: 1,
    flex: 1,
    borderRadius: 22,
    marginVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#eaeaea',
  },
});

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Message);
