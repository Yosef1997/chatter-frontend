import React, {Component} from 'react';
import {LogBox} from 'react-native';
import {
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import ProfileImg from '../../assets/F9.jpg';
import {allUser} from '../Redux/Action/user';
import {connect} from 'react-redux';
import {detailUser} from '../Redux/Action/user';
import {REACT_APP_API_URL as API_URL} from '@env';

class index extends Component {
  state = {
    navbartoggle: false,
  };
  async componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    await this.props.allUser(this.props.auth.token);
  }
  OnIconPress = () => {
    this.setState({
      navbartoggle: !this.state.navbartoggle,
    });
  };
  doChat = async (id) => {
    this.props.navigation.navigate('Message');
    await this.props.detailUser(this.props.auth.token, id);
  };
  render() {
    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.pickers} onPress={this.OnIconPress}>
            <Icon name={this.props.icon1} />
            <Text style={styles.text}>{this.props.text}</Text>
            <Icon name="angle-down" />
          </TouchableOpacity>
        </View>
        {this.state.navbartoggle && (
          <FlatList
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
                          uri: API_URL.concat(
                            `/upload/profile/${item.picture}`,
                          ),
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
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 16,
  },
  pickers: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  menu: {
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: 'white',
    marginHorizontal: 10,
    flexDirection: 'row',
    padding: 10,
  },
  cardImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardText: {
    flex: 1,
    marginLeft: 10,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
});
const mapDispatchToProps = {allUser, detailUser};

export default connect(mapStateToProps, mapDispatchToProps)(index);
