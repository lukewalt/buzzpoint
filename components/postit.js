'use strict';

import {
  View,
  Text,
  TouchableHighlight,
  Alert,
  TextInput,
} from 'react-native'

import React, { Component, PropTypes } from 'react';
import styles from '../styles/styles';

import Rating from './rating';
import ImageBar from './imagebar'


export default class PostIt extends Component {

  constructor(props) {
    super(props);
    this.state = { text: 'Whats the story' };
  }

  // feedback for successful post
  thanksForPost = () => {
    // this.props.navigator.pop({
    //   component: Rating,
    //   title: 'BuzzPoint'
    // })
    Alert.alert('Thanks For Your Post')
  }

  render() {
    return (
      <View style={styles.tabContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <ImageBar />
        <TouchableHighlight onPress={this.thanksForPost}>
          <Text style={styles.instructions}>POST</Text>
        </TouchableHighlight>
      </View>
    )
  }


}
