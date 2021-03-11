import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Account from '../pages/Account';
import BottomTab from './BottomTab';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

export default class router extends Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }
  render() {
    return (
      // {this.props.auth.token === null ? (): () }
      <Stack.Navigator>
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
        <Stack.Screen
          component={Account}
          options={{headerShown: false}}
          name="Account"
        />
        <Stack.Screen
          component={BottomTab}
          options={{headerShown: false}}
          name="BottomTab"
        />
      </Stack.Navigator>
    );
  }
}
