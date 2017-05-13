'use strict';

import {
  View,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native'

import React, { Component, PropTypes } from 'react';
import styles from '../styles/styles';


export default class ImageBar extends Component {


  render() {
    return (
      <View style={styles.imgBarCont}>
        <TouchableHighlight onPress={this.thanksForPost}>
        <Image style={styles.img} source={require('../img/camera.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={this.thanksForPost}>
        <Image style={styles.img} source={require('../img/selectpic.png')} />
        </TouchableHighlight>
      </View>
    )
  }
}
