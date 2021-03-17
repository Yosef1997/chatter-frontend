import React, {Component} from 'react';
import {
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {allUser} from '../Redux/Action/auth';
import {connect} from 'react-redux';
import {detailChatUser} from '../Redux/Action/user';
import {REACT_APP_API_URL as API_URL} from '@env';

class index extends Component {
  state = {
    navbartoggle: false,
  };
  OnIconPress = () => {
    this.setState({
      navbartoggle: !this.state.navbartoggle,
    });
  };
  doChat = async (id) => {
    await this.props.detailChatUser(id);
    this.props.navigation.navigate('Message');
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
            data={this.props.auth.allUser}
            keyExtractor={(item, index) => String(item.id)}
            renderItem={({item}) => {
              return (
                <TouchableOpacity onPress={this.props.navigate}>
                  <View style={styles.menu}>
                    <Image
                      source={{
                        uri: API_URL.concat(`/upload/profile/${item.picture}`),
                      }}
                      style={styles.cardImg}
                    />
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
});
const mapDispatchToProps = {allUser, detailChatUser};

export default connect(mapStateToProps, mapDispatchToProps)(index);
