'use strict';

import {
  View,
  Text,
  TouchableHighlight,
  Alert,
} from 'react-native'

import React, { Component, PropTypes } from 'react';
import styles from '../styles/styles';

import TabBar from './tab-bar';


export default class PostIt extends Component {

  // feedback for successful post
  thanksForPost = () => {
    Alert.alert('Thanks For Your Post')
  }

  render() {
    return (
      <View style={styles.tabContainer}>
        <TouchableHighlight onPress={this.thanksForPost}>
          <Text style={styles.instructions}>POST</Text>
        </TouchableHighlight>
      </View>
    )
  }


}
