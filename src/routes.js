import React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import logo from './assets/instagram.png';
import Feed from './pages/feed';

const AppNavigator = createStackNavigator(
  {
    Feed,
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#f5f5f5',
      },
      headerTitle: () => <Image source={logo} />,
    },
  },
);

export default createAppContainer(AppNavigator);
