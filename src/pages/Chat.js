import React, {Component} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Search from '../components/InputCustom';
import CardChat from '../components/CardCustom';
import BackImg from '../assets/background.jpg';
import Header from '../components/Header';
import ProfileImg from '../assets/F9.jpg';
import {connect} from 'react-redux';
import {allChatUser} from '../components/Redux/Action/user';

class Chat extends Component {
  async componentDidMount() {
    await this.props.allChatUser(
      this.props.auth.token,
      this.props.auth.user.id,
    );
  }
  render() {
    return (
      <ImageBackground source={BackImg} style={styles.backImgage}>
        <ScrollView>
          <Header label="Chatter" icon="ellipsis-vertical-outline" size={25} />
          <Search
            Icon="search1"
            size={15}
            container={styles.container}
            inputStyle={styles.input}
            iconStyle={styles.icon}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Message')}>
            <CardChat
              source={ProfileImg}
              label="Yosef"
              message="hello"
              style={styles.card}
              image={styles.cardImg}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <CardChat
              source={ProfileImg}
              label="Yosef"
              message="hello"
              style={styles.card}
              image={styles.cardImg}
            />
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backImgage: {
    flex: 1,
    resizeMode: 'cover',
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
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
});
const mapDispatchToProps = {allChatUser};
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
