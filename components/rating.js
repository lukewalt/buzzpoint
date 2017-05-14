'use strict';

import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native'
import styles from '../styles/styles';

import TabBar from './tabBar';
import PostIt from './postit';
import User from './user';



export default class Rating extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'userId': 1,
      'userLat': null,
      'userLng': null,
      'formattedAddress': null,
      'locationERR': null
    }
  }

  static propTypes = {
    title: PropTypes.string,
    navigator: PropTypes.object.isRequired,
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
  }


  // goes to post page to finalize post
  _onToPost = () => {
    this.props.navigator.push({
      component: PostIt,
      title: 'BuzzPoint',
      passProps: {
        userLat: this.state.userLat,
        userLng: this.state.userLng,
        userId: this.state.userId,
        userTags: [1 ,2, 4]
      }
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
      passProps: {
        userId: this.state.userId
      }
    })
  }

  render() {
    return (
      <View style={styles.tabContainer}>
        <Text>{this.state.userLat}</Text>
        <Text>{this.state.userLng}</Text>
        <TouchableHighlight underlayColor='white' onPress={this._onToUserPage}>
          <Text style={styles.small}>USER</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='white' onPress={this._onToZones}>
          <Text style={styles.small}>ZONES</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='white' onPress={this._onToPost}>
          <Text style={styles.instructions}>RATE</Text>
        </TouchableHighlight>
      </View>
    )
  }

}
// <Carousel>
