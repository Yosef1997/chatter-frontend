import React, {Component} from 'react';
import {LogBox} from 'react-native';
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import Search from '../components/InputCustom';
import CardProfile from '../components/CardCustom';
import Picker from '../components/Picker';
import ProfileImg from '../assets/F9.jpg';
import {connect} from 'react-redux';
import {allUser, detailUser} from '../components/Redux/Action/user';
import {detailChat} from '../components/Redux/Action/chat';
import {REACT_APP_API_URL as API_URL} from '@env';

class Home extends Component {
  async componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    await this.props.allUser(this.props.auth.token);
  }

  doChat = async (id) => {
    await this.props.detailUser(this.props.auth.token, id);
    this.props.navigation.navigate('Message');
  };

  render() {
    return (
      <ScrollView style={styles.backImgage}>
        {this.props.auth.user.picture === null ? (
          <CardProfile
            source={ProfileImg}
            label={this.props.auth.user.name}
            message={this.props.auth.user.status}
            icon2="settings-outline"
            size={25}
            parent={styles.card}
            image={styles.cardImg}
            onPress={() => this.props.navigation.navigate('Profil')}
          />
        ) : (
          <CardProfile
            source={{
              uri: API_URL.concat(
                `/upload/profile/${this.props.auth.user.picture}`,
              ),
            }}
            label={this.props.auth.user.name}
            message={this.props.auth.user.status}
            icon2="settings-outline"
            size={25}
            parent={styles.card}
            image={styles.cardImg}
            onPress={() => this.props.navigation.navigate('Profil')}
          />
        )}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Search')}>
          <Search
            Icon="search1"
            size={15}
            container={styles.container}
            iconStyle={styles.icon}
          />
        </TouchableOpacity>
        <Picker
          icon1="persons"
          text="Groups"
          data={this.props.user.allUser}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => this.doChat(item.id)}>
                <View style={styles.menu}>
                  {item.picture === null ? (
                    <Image source={ProfileImg} style={styles.cardImg} />
                  ) : (
                    <Image
                      source={{
                        uri: API_URL.concat(`/upload/profile/${item.picture}`),
                      }}
                      style={styles.cardImg}
                    />
                  )}
                  <View style={styles.cardText}>
                    <Text style={styles.label}>{item.name}</Text>
                    <Text style={styles.message}>{item.status}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <Picker
          icon1="person"
          text="Friends"
          data={this.props.user.allUser}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => this.doChat(item.id)}>
                <View style={styles.menu}>
                  {item.picture === null ? (
                    <Image source={ProfileImg} style={styles.cardImg} />
                  ) : (
                    <Image
                      source={{
                        uri: API_URL.concat(`/upload/profile/${item.picture}`),
                      }}
                      style={styles.cardImg}
                    />
                  )}
                  <View style={styles.cardText}>
                    <Text style={styles.label}>{item.name}</Text>
                    <Text style={styles.message}>{item.status}</Text>
                  </View>
                </View>
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

  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 15,
    borderRadius: 12,
    elevation: 1,
  },
  backImgage: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#d9ecf2',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    elevation: 1,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  cardImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  icon: {
    marginLeft: 15,
  },
  menu: {
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: 'white',
    marginHorizontal: 10,
    flexDirection: 'row',
    padding: 10,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
});
const mapDispatchToProps = {allUser, detailUser, detailChat};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
