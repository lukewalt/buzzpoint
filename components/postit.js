'use strict';

import {
  View,
  Text,
  TouchableHighlight,
  Alert,
  TextInput,
  ListView,
} from 'react-native'
import axios from 'axios'

import React, { Component, PropTypes } from 'react';
import styles from '../styles/styles';

import Rating from './rating';
import ImageBar from './imagebar'

export default class PostIt extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      user_id: 1,
      positive: this.props.userRating,
      comment: null,
      image: "http://dummyimage.com/100x100.jpg/ff4444/ffffff",
      latitude: this.props.userLat,
      longitude: this.props.userLng,
      zipcode: 37152,
      zone: 2,
      timestamp: "2017-05-13T21:40:26.556Z",
      tag_ids: this.props.userTags
    }

  }

  componentDidMount() {
    // makes a call to get formatted address
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=AIzaSyDvFLz0icFJDxnp8FyEJkZwhqWZQsp0qB8`)
    .then( geo => {
      let addressFromReq = geo.data.results[0].formatted_address
      this.setState({
        formattedAddress: addressFromReq,
      })
      // gets all tags for carousel
      axios.get(`http://buzzpoint.herokuapp.com/api/tags`)
      .then( tags => {

      })
    })
  }

  imgSelected(uri) {
    console.log(uri);
  }

  // feedback for successful post
  thanksForPost = () => {
    axios.post(`https://buzzpoint.herokuapp.com/api/posts`, this.state)
    .then( res => {
      console.log(res)
      Alert.alert('Thanks For Your Post')
    })
    .catch( err => console.log(err))
  }

  render() {
    return (
      <View style={styles.tabContainer}>
        <Text style={styles.address}> {this.state.formattedAddress} </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={comment => this.setState({comment})}
          value={this.state.comment}
          placeholder='Whats the Story?'
        />
        <ImageBar imgSelected={this.imgSelected} />
        <View style={styles.tagList}>
          <Text style={styles.tagForSubmit}>Resturant</Text>
          <Text style={styles.tagForSubmit}>Patio</Text>
          <Text style={styles.tagForSubmit}>Drinks</Text>
        </View>
        <TouchableHighlight underlayColor='white' style={{alignSelf: 'stretch'}} onPress={this.thanksForPost}>
          <Text style={styles.thepost}>POST</Text>
        </TouchableHighlight>
      </View>
    )
  }


}
