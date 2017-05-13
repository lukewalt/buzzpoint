'use strict';

import {
  View,
  Text,
  TouchableHighlight,
  Alert,
  TextInput,
} from 'react-native'
import axios from 'axios'

import React, { Component, PropTypes } from 'react';
import styles from '../styles/styles';

import Rating from './rating';
import ImageBar from './imagebar'
import TagsListed from './tagslisted'

export default class PostIt extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Whats the story?',
      userLat: this.props.userLat,
      userLng: this.props.userLng,
    };
  }

  componentDidMount() {
    // makes a call to get formatted address
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.userLat},${this.state.userLng}&key=AIzaSyDvFLz0icFJDxnp8FyEJkZwhqWZQsp0qB8`)
    .then( geo => {
      let formattedAddress = geo.data.results[0].formatted_address
      this.setState({
        'formattedAddress': formattedAddress,
      })
      console.log(this.state);
    })
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
        <Text style={styles.address}> {this.state.formattedAddress} </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <ImageBar />
        <TagsListed />
        <TouchableHighlight onPress={this.thanksForPost}>
          <Text style={styles.thepost}>POST</Text>
        </TouchableHighlight>
      </View>
    )
  }


}
