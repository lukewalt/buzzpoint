'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';
import styles from './styles/styles'

import LoginRegister from './components/signInRegister'



export default class buzzpoint extends Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: LoginRegister,
          title: 'BuzzPoint',
        }}
        style={{flex: 1}}
      />

    )
  }
  
}

AppRegistry.registerComponent('buzzpoint', () => buzzpoint);
