'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';
import styles from './styles/styles'

import TabBar from './components/tab-bar'
import Rating from './components/rating'



export default class buzzpoint extends Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Rating,
          title: 'BuzzPoint',
        }}
        style={{flex: 1}}
      />

    )
  }
}

AppRegistry.registerComponent('buzzpoint', () => buzzpoint);
