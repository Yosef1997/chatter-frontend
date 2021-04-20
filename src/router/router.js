import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Profil from '../pages/Profil';
import Search from '../pages/Search';
import BottomTab from './BottomTab';
import Account from '../pages/Account';
import Message from '../pages/Message';
import LandingScreen from '../pages/LandingScreen';
import SplashScreen from 'react-native-splash-screen';
import {connect} from 'react-redux';

const Stack = createStackNavigator();

class router extends Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }
  render() {
    return (
      <Stack.Navigator>
        {/* {this.props.auth.token === null ? ( */}
        {/* <React.Fragment> */}
        <Stack.Screen
          component={LandingScreen}
          options={{headerShown: false}}
          name="LandingScreen"
        />
        <Stack.Screen
          component={SignUp}
          options={{headerShown: false}}
          name="SignUp"
        />
        <Stack.Screen
          component={SignIn}
          options={{headerShown: false}}
          name="SignIn"
        />
        {/* </React.Fragment>
        // ) : (
          <React.Fragment> */}
        <Stack.Screen
          component={BottomTab}
          options={{headerShown: false}}
          name="BottomTab"
        />
        <Stack.Screen
          component={Search}
          options={{headerShown: false}}
          name="Search"
        />
        <Stack.Screen
          component={Profil}
          options={{headerShown: false}}
          name="Profil"
        />
        <Stack.Screen
          component={Account}
          options={{headerShown: false}}
          name="Account"
        />
        <Stack.Screen
          component={Message}
          options={{headerShown: false}}
          name="Message"
        />
        {/* </React.Fragment> */}
        {/* // )} */}
      </Stack.Navigator>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(router);
