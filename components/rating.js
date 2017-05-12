'use strict';

import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native'

import React, { Component, PropTypes } from 'react';
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
      'locationERR': null
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          userLat: position.coords.latitude,
          userLng: position.coords.longitude,
          locationERR: null,
        });
      },
      (error) => this.setState({ locationERR: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    console.log(this.state);
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
          <Text style={styles.small}>USER</Text>
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
