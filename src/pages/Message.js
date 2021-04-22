import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import InputMessage from '../components/InputCustom';
import {connect} from 'react-redux';

class Message extends Component {
  render() {
    return (
      <React.Fragment>
        <Header
          label="Rio"
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
          {/* {[
            ...Array(1000).map((item) => {
              return <Text>asdbg</Text>;
            }),
          ]} */}
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
    width: 10,
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
  user: state.user,
});

export default connect(mapStateToProps)(Message);
