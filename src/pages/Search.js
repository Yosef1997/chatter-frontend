import React, {Component} from 'react';
import {ScrollView, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import BackImg from '../assets/background.jpg';
import Header from '../components/Header';
import SearchBar from '../components/InputCustom';
// import ProfileImg from '../assets/F9.jpg';
import CardChat from '../components/CardCustom';
import {connect} from 'react-redux';
import {allUser} from '../components/Redux/Action/auth';
import {detailChatUser} from '../components/Redux/Action/user';
import {REACT_APP_API_URL as API_URL} from '@env';

class Search extends Component {
  state = {
    search: '',
  };
  async componentDidMount() {
    await this.props.allUser(this.props.auth.token);
  }
  doSearch = (search) => {
    this.setState({search: search}, async () => {
      await this.props.allUser(this.props.auth.token, this.state.search);
    });
  };
  doChat = async (id) => {
    await this.props.detailChatUser(id);
    this.props.navigation.navigate('Message');
  };
  render() {
    return (
      <ScrollView style={styles.backImgage}>
        <Header label="Search" />
        <SearchBar
          Icon="search1"
          size={15}
          container={styles.container}
          inputStyle={styles.input}
          iconStyle={styles.icon}
          onChangeText={(search) => this.doSearch(search)}
        />
        <FlatList
          data={this.props.auth.allUser}
          keyExtractor={(item, index) => String(item.id)}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => this.doChat(item.id)}>
                <CardChat
                  source={{
                    uri: API_URL.concat(`/upload/profile/${item.picture}`),
                  }}
                  label={item.name}
                  message={item.status}
                  style={styles.card}
                  // source={ProfileImg}
                  image={styles.cardImg}
                />
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  backImgage: {
    flex: 1,
  },
  input: {
    flex: 1,
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
  icon: {
    marginLeft: 15,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = {allUser, detailChatUser};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
