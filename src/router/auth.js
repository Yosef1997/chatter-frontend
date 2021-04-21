import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import InputPhone from '../pages/InputPhone';
import InputName from '../pages/InputName';
import InputPassword from '../pages/InputPassword';
import LandingScreen from '../pages/LandingScreen';
import {connect} from 'react-redux';

const Stack = createStackNavigator();

class auth extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          component={LandingScreen}
          options={{headerShown: false}}
          name="LandingScreen"
        />
        <Stack.Screen
          component={SignIn}
          options={{headerShown: false}}
          name="SignIn"
        />
        <Stack.Screen
          component={InputPhone}
          options={{headerShown: false}}
          name="InputPhone"
        />
        <Stack.Screen
          component={InputName}
          options={{headerShown: false}}
          name="InputName"
        />
        <Stack.Screen
          component={InputPassword}
          options={{headerShown: false}}
          name="InputPassword"
        />
      </Stack.Navigator>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(auth);
