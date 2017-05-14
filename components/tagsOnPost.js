'use strict';

import {
  View,
  Text,
} from 'react-native'

import React, { Component, PropTypes } from 'react';
import styles from '../styles/styles';


export default class TagsOnPost extends Component {

  constructor(){
    super();
    this.state = {
      tags: null,
    }
  }

  render() {
    return (
      <View style={styles.tagSection}>
          <Text style={styles.tag}>Drinks</Text>
          <Text style={styles.tag}>Patios</Text>
      </View>
    )
  }


}
