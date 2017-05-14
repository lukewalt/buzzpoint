'use strict';

import {
  View,
  Text,
  Image,
} from 'react-native'

import React, { Component, PropTypes } from 'react';
import styles from '../styles/styles';



export default class TotalCount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalPositive: null,
      totalNegative: null,
    }
  }

  render() {

    return (
      <View style={styles.countContainer}>
        <View style={styles.countSection}>
          <Text style={{color: '#32a800'}}>123</Text>
          <Image
          style={styles.thumbcount}
          source={require('../img/thumbUpGreen.png')}
        />
        </View>
        <View style={styles.countSection}>
          <Text style={{color: '#ff5a5a'}}>92</Text>
          <Image
          style={styles.thumbcount}
          source={require('../img/thumbDownRed.png')}
        />
        </View>
      </View>
    )
  }


}
