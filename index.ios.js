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
import Rating from './components/rating'

export default class buzzpoint extends Component {

  constructor(){
    super();
    this.state = {
      loggedIn: true
    }
  }


  render() {

    return (
      <NavigatorIOS
        initialRoute={{
          component: this.state.loggedIn ? Rating : LoginRegister,
          title: '',
          translucent: false,
          shadowHidden: true,
          passProps: {
            loggedIn: this.state.loggedIn
          }
        }}
        style={{flex: 1}}
      />

    )
  }

}

AppRegistry.registerComponent('buzzpoint', () => buzzpoint);
