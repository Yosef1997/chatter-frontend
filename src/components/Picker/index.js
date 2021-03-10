import React, {Component} from 'react';
import {Text, Image, TouchableOpacity, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import ProfileImg from '../../assets/F9.jpg';

// import {connect} from 'react-redux';
// import {signout} from '../Redux/Action/auth';

export default class index extends Component {
  state = {
    navbartoggle: false,
  };
  OnIconPress = () => {
    this.setState({
      navbartoggle: !this.state.navbartoggle,
    });
  };
  // goToProfil = () => {
  //   this.props.navigation.navigate('Profil');
  // };
  // doLogout = () => {
  //   this.props.signout();
  // };
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
          <React.Fragment>
            <View style={styles.menu}>
              <Image source={ProfileImg} style={styles.cardImg} />
              <View style={styles.cardText}>
                <Text style={styles.label}>Yosef</Text>
                <Text style={styles.message}>Happy</Text>
              </View>
            </View>
            <View style={styles.menu}>
              <Image source={ProfileImg} style={styles.cardImg} />
              <View style={styles.cardText}>
                <Text style={styles.label}>Yosef</Text>
                <Text style={styles.message}>Happy</Text>
              </View>
            </View>
            <View style={styles.menu}>
              <Image source={ProfileImg} style={styles.cardImg} />
              <View style={styles.cardText}>
                <Text style={styles.label}>Yosef</Text>
                <Text style={styles.message}>Happy</Text>
              </View>
            </View>
          </React.Fragment>
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
