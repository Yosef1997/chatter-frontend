import React, {Component} from 'react';
import {ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import Search from '../components/InputCustom';
import CardProfile from '../components/CardCustom';
import BackImg from '../assets/background.jpg';
import Picker from '../components/Picker';
import ProfileImg from '../assets/F9.jpg';
import {connect} from 'react-redux';
import {detailUser} from '../components/Redux/Action/auth';
import {detailChatUser} from '../components/Redux/Action/user';
import {REACT_APP_API_URL as API_URL} from '@env';

class Home extends Component {
  render() {
    return (
      <ImageBackground source={BackImg} style={styles.backImgage}>
        <CardProfile
          source={{
            uri: API_URL.concat(
              `/upload/profile/${this.props.auth.detailUser.picture}`,
            ),
          }}
          label={this.props.auth.detailUser.name}
          message={this.props.auth.detailUser.status}
          icon2="settings-outline"
          size={25}
          style={styles.card}
          image={styles.cardImg}
          onPress={() => this.props.navigation.navigate('Profil')}
        />
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
          navigate={() => this.props.navigation.navigate('Message')}
        />
        <Picker
          icon1="person"
          text="Friends"
          navigate={() => this.props.navigation.navigate('Message')}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 15,
    borderRadius: 12,
  },
  backImgage: {
    flex: 1,
    resizeMode: 'cover',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
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
const mapDispatchToProps = {detailUser, detailChatUser};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
