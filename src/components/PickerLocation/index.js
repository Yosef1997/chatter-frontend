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

class index extends Component {
  state = {
    country: [
      {id: 1, name: 'Indonesia'},
      {id: 2, name: 'Singapore'},
      {id: 3, name: 'Malaysia'},
      {id: 4, name: 'Japan'},
    ],
    placeholder: this.props.text,
    navbartoggle: false,
  };
  OnIconPress = () => {
    this.setState({
      navbartoggle: !this.state.navbartoggle,
    });
  };
  // selectedCountry = (country) => {
  //   this.setState({
  //     placeholder: country,
  //   });
  // };
  render() {
    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.pickers} onPress={this.OnIconPress}>
            <Icon name={this.props.icon1} />
            <Text style={styles.text}>{this.state.placeholder}</Text>
            <Icon name="angle-down" />
          </TouchableOpacity>
        </View>
        {this.state.navbartoggle && (
          <FlatList
            data={this.state.country}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => {
              return (
                // <TouchableOpacity
                // // onPress={() => this.selectedCountry(item.name)}
                // >
                <Text style={styles.pickerList}>{item.name}</Text>
                // </TouchableOpacity>
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
    marginTop: 10,
    borderRadius: 16,
    width: 150,
  },
  pickers: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerList: {
    padding: 10,
    marginHorizontal: 10,
    width: 150,
  },
  text: {
    fontWeight: '900',
    fontSize: 14,
    flex: 1,
    marginLeft: 10,
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = {allUser, detailChatUser};

export default connect(mapStateToProps, mapDispatchToProps)(index);
