'use strict';

import styles from '../styles/styles.js'
import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
} from 'react-native';


export default class ZonesTab extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state={
      zone: this.props.zoneId
    }
  }

  render(){

    return (
      <View>
        <Text>{this.state.zone}</Text>
      </View>
    )

  }

}
