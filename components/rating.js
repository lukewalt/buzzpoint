'use strict';

import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native'
import axios from 'axios'
import styles from '../styles/styles';

import TabBar from './tab-bar';
import PostIt from './postit';
import User from './user';



export default class Rating extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'userLat': null,
      'userLng': null,
      'formattedAddress': null,
      'locationERR': null
    }
  }

  componentDidMount() {
    // gets current position
    navigator.geolocation.getCurrentPosition( position => {
        console.log(position);
        this.setState({
          userLat: position.coords.latitude,
          userLng: position.coords.longitude,
          locationERR: null,
        })
      },
      (error) => this.setState({ locationERR: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    )
    // makes a call to get formatted address
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.7128,-74.0059&key=AIzaSyDvFLz0icFJDxnp8FyEJkZwhqWZQsp0qB8`)
    .then( geo => {
      let formattedAddress = geo.data.results[0].formatted_address
      this.setState({
        'formattedAddress': formattedAddress,
      })
      console.log(this.state);
    })
  }

  static propTypes = {
    title: PropTypes.string,
    navigator: PropTypes.object.isRequired,
  }

  // goes to post page to finalize post
  _onToPost = () => {
    this.props.navigator.push({
      component: PostIt,
      title: 'BuzzPoint',
    });
  }
  // goes to zones to view aggregate posts
  _onToZones = () => {
    this.props.navigator.push({
      component: TabBar,
      title: 'BuzzPoint',
    });
  }
  // goes to user page
  _onToUserPage = () => {
    this.props.navigator.push({
      component: User,
      title: 'BuzzPoint',
    })
  }

  render() {
    return (
      <View style={styles.tabContainer}>
        <Text>{this.state.userLat}</Text>
        <Text>{this.state.userLng}</Text>
        <TouchableHighlight onPress={this._onToUserPage}>
          <Text style={styles.small}>POOP</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onToZones}>
          <Text style={styles.small}>ZONES</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onToPost}>
          <Text style={styles.instructions}>RATE</Text>
        </TouchableHighlight>
      </View>
    )
  }

}
// <Carousel>
