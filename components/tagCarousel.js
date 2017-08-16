'use strict';

import {
  View,
  Text,
  ListView,
  TouchableHighlight,
  Alert,
  ActivityIndicator
} from 'react-native'

import React, { Component, PropTypes } from 'react';
import styles from '../styles/styles';
import axios from 'axios';


export default class TagCarousel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      userTagIds: null,
      canRate: false,
      loaded: false
    }
    this._setTags = this._setTags.bind(this)
  }


  // fires when parent component is mounted
  componentDidMount() {
    this.fetchAllTags();
    console.log("Tags Listed for submit fired");
  }

  // holds the http req
  fetchAllTags() {
    // gets data using predefined url above -> converts to json -> updates the state
    axios.get(`https://buzzpoint.herokuapp.com/api/tags`)
    .then( tags => {
      console.log('TAGS', tags.data);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(tags.data),
        loaded: true
      })
    })
    .done()
  }


  render() {
    // sets a loading view until posts load
    if (!this.state.loaded) {
      return this.renderLoadingView()
    }

    return (
      <View style={{height: 50}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={ tag => {
            return (
                <TouchableHighlight underlayColor='white' onPress={() => this._setTags(tag.id, tag.tag_name)}>
                  <Text style={styles.tagOnCarousel} key={tag.id}>{tag.tag_name}</Text>
                </TouchableHighlight>
              )
            }}
          style={styles.tagCarousel}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          centerContent={true}
        />
      </View>
    )
  }


  // Activity Indicator
  renderLoadingView() {
    return (
      <View style={styles.tabContainer}>
        <ActivityIndicator
          animating={true}
          size="large"
          color='#3d8af7'
        />
      </View>
    );
  }

  _setTags(tagId, tagName) {
    this.props._setTags(tagId, tagName)
  }



}
