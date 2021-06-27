import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Detail from '../screens/detailScreen/Detail';
import Home from '../screens/homeScreen/Home';
import {Icon} from 'react-native-elements';

//Navigation that will be shown after the user logs in
function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{activeTintColor: 'red'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="music-note" color={color} />,
        }}
      />
      <Tab.Screen
        name="Blog"
        component={Detail}
        options={{
          tabBarLabel: 'People',
          tabBarIcon: ({color}) => <Icon name="people" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
