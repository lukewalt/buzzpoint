'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';
import styles from './styles/styles'

import TabBar from './components/tab-bar'


export default class buzzpoint extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TabBar/>
      </View>
    )
  }
}

AppRegistry.registerComponent('buzzpoint', () => buzzpoint);
