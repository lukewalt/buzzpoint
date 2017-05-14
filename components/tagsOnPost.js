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
      <View style={{backgroundColor: '#3d8af7', flexDirection: 'row'}}>
          <Text>Drinks</Text>
          <Text>Patios</Text>
      </View>
    )
  }


}
