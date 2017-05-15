'use strict';

import {
  View,
  Text,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native'

import React, { Component, PropTypes } from 'react';
import styles from '../styles/styles';
import ImagePicker from 'react-native-image-picker';


export default class ImageBar extends Component {

  _openCamera = () => {
    const options = {
      title: null,
      cameraType: 'back',
      mediaType: 'photo',
      storageOptions: {
        cameraRoll: true,
      },
    }

    ImagePicker.launchCamera(options, (response)  => {
      console.log(response)
    })

  }

  _openImages = () => {
  }


  render() {
    return (
      <View style={styles.imgBarCont}>
        <TouchableHighlight underlayColor='white' onPress={this._openCamera}>
          <Image style={styles.img} source={require('../img/takepic.png')} />
        </TouchableHighlight>
        <TouchableHighlight underlayColor='white' onPress={this._openImages}>
          <Image style={styles.img} source={require('../img/selectpicture.png')} />
        </TouchableHighlight>
      </View>
    )
  }
}
