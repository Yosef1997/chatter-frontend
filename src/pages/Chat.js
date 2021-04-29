import React, {Component} from 'react';
import {LogBox} from 'react-native';

import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  View,
} from 'react-native';
import Search from '../components/InputCustom';
import CardChat from '../components/CardCustom';
import Header from '../components/Header';
import ProfileImg from '../assets/F9.jpg';
import {connect} from 'react-redux';
import {allChat} from '../components/Redux/Action/chat';
import {detailUser} from '../components/Redux/Action/user';

class Chat extends Component {
  async componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    await this.props.allChat(this.props.auth.token, {
      id: this.props.auth.user.id,
    });
  }
  doChat = async (id) => {
    await this.props.detailUser(this.props.auth.token, id);
    this.props.navigation.navigate('Message');
  };

  render() {
    return (
      <ScrollView style={styles.backImgage}>
        <ScrollView>
          <Header
            label="Chatter"
            icon="ellipsis-vertical-outline"
            size={25}
            cardText={styles.cardText}
          />
          <Search
            Icon="search1"
            size={15}
            container={styles.container}
            inputStyle={styles.input}
            iconStyle={styles.icon}
          />
          {this.props.chat.errorMsg !== 'Data chat not found' ? (
            <FlatList
              data={this.props.chat.allChat}
              keyExtractor={(item) => String(item.id)}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => this.doChat(item.idReceiver)}>
                    <CardChat
                      source={ProfileImg}
                      label={item.name}
                      message={item.message}
                      parent={styles.card}
                      image={styles.cardImg}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          ) : (
            <View style={styles.captionForm}>
              <Text style={styles.caption}>Chat History Empty</Text>
            </View>
          )}
        </ScrollView>
      </ScrollView>
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
    resizeMode: 'cover',
    backgroundColor: '#d9ecf2',
  },
  input: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  cardImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 12,
  },
  icon: {
    marginLeft: 15,
  },
  caption: {
    fontSize: 20,
  },
  captionForm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  chat: state.chat,
});
const mapDispatchToProps = {allChat, detailUser};
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
