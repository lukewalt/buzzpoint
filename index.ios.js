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


const url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyAurfrmaCXp4gCMfaU2YNvHCxacbwt1xQw'

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
      // <View style={styles.container}>
      //   <TabBar/>
      // </View>
    )
  }
}

AppRegistry.registerComponent('buzzpoint', () => buzzpoint);
