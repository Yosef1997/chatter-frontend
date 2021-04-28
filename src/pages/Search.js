import React, {Component} from 'react';
import {ScrollView, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/InputCustom';
import ProfileImg from '../assets/F9.jpg';
import CardChat from '../components/CardCustom';
import {connect} from 'react-redux';
import {allUser} from '../components/Redux/Action/user';
import {detailUser} from '../components/Redux/Action/user';
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
    await this.props.detailUser(this.props.auth.token, id);
    this.props.navigation.navigate('Message');
  };
  render() {
    return (
      <ScrollView style={styles.backImgage}>
        <Header
          label="Search"
          icon="ellipsis-vertical-outline"
          size={25}
          cardText={styles.cardText}
        />
        <SearchBar
          Icon="search1"
          size={15}
          container={styles.container}
          inputStyle={styles.input}
          iconStyle={styles.icon}
          onChangeText={(search) => this.doSearch(search)}
        />
        <FlatList
          data={this.props.user.allUser}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => this.doChat(item.id)}>
                {item.picture === null ? (
                  <CardChat
                    label={item.name}
                    message={item.status}
                    parent={styles.card}
                    source={ProfileImg}
                    image={styles.cardImg}
                  />
                ) : (
                  <CardChat
                    source={{
                      uri: API_URL.concat(`/upload/profile/${item.picture}`),
                    }}
                    label={item.name}
                    message={item.status}
                    parent={styles.card}
                    image={styles.cardImg}
                  />
                )}
              </TouchableOpacity>
            );
          }}
        />
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
    backgroundColor: '#d9ecf2',
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
  user: state.user,
});
const mapDispatchToProps = {allUser, detailUser};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
