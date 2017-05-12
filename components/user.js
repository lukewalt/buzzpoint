'use strict';

import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native'

import React, { Component, PropTypes } from 'react';
import styles from '../styles/styles';


export default class User extends Component {

  render() {
    return (
      <View style={styles.tabContainer}>
        <Text style={styles.instructions}>USER NAME</Text>
      </View>
    )
  }

}
