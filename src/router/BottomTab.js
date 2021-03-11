import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../pages/Home';
import ChatScreen from '../pages/Chat';
import SettingScreen from '../pages/Setting';

const Tab = createBottomTabNavigator();

export default class router extends Component {
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#ff1616',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({size, color}) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarIcon: ({size, color}) => (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={size}
                color={color}
              />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            tabBarIcon: ({size, color}) => (
              <Ionicons
                name="ios-ellipsis-horizontal-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
