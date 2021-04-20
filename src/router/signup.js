import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import LandingScreen from '../pages/LandingScreen';
import {connect} from 'react-redux';

const Stack = createStackNavigator();

class router extends Component {
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
      </Stack.Navigator>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(router);
