'use strict';

import {
  View,
  Text,
  TouchableHighlight,
  Alert,
  TextInput,
  ListView,
  ScrollView,
} from 'react-native'
import axios from 'axios'

import React, { Component, PropTypes } from 'react';
import styles from '../styles/styles';

import Rating from './rating';
import ImageBar from './imagebar'

export default class PostIt extends Component {

  constructor(props) {
    console.log("POSTIT PROPS", props);
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      user_id: 1,
      positive: this.props.userRating,
      comment: null,
      image: null,
      latitude: this.props.userLat,
      longitude: this.props.userLng,
      timestamp: new Date().toUTCString(),
      tag_ids: this.props.userTags,
      tagNames: this.props.userTagNames
    }
    this.imgSelected = this.imgSelected.bind(this)
  }

  componentDidMount() {
    console.log(this.state);
    // makes a call to get formatted address
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=AIzaSyDvFLz0icFJDxnp8FyEJkZwhqWZQsp0qB8`)
    .then( geo => {
      let addressFromGoogle = geo.data.results[0].formatted_address
      this.setState({
        formattedAddress: addressFromGoogle.replace(/[, ]+/g, " ").trim()
      })
      console.log("STATE ON COMP MOUNT", this.state);
    })
  }

  imgSelected(uri) {
    this.setState({image: uri})
    // console.log(this.state);
  }

  // feedback for successful post
  _thanksForPost = () => {
    console.log("POST", this.state);
    axios.post(`https://buzzpoint.herokuapp.com/api/posts`, this.state)
    .then( res => {
      console.log("RES FROM POST", res)
      this.setState({
        positive: null,
        comment: null,
        image: null,
        latitude: this.props.userLat,
        longitude: this.props.userLng,
        zipcode: 37152,
        zone: 2,
        timestamp: new Date().toUTCString(),
        tag_ids: [],
        tagNames: []

      })
      console.log(this.state)
    })
    .catch( err => console.log(err))
  }

  render() {
    return (

        <View style={{paddingHorizontal: 25, paddingVertical: 5}}>
          <Text style={styles.address}> {this.state.formattedAddress} </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={comment => this.setState({comment})}
            value={this.state.comment}
            placeholder='Whats the Story?'
          />
          <ImageBar photoSelected={this.state.image} handleImagePass={(uri) => this.imgSelected(uri)}/>
          <View style={styles.tagList}>
            { this.state.tagNames.map(i => {
                return (
                  <Text style={styles.tagForSubmit}>{i}</Text>
                )
              })
            }
          </View>
          <TouchableHighlight underlayColor='white' style={{alignSelf: 'stretch'}} onPress={this._thanksForPost}>
            <Text style={styles.thepost}>POST</Text>
          </TouchableHighlight>
        </View>
    )
  }

}
