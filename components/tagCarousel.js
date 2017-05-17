'use strict';

import {
  View,
  Text,
  ListView,
  TouchableHighlight,
  Alert,
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
      })
    })
    .done()
  }


  render() {
    return (
      <View style={{height: 50}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(tag) => {
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

  _setTags(tagId, tagName) {
    this.props._setTags(tagId, tagName)
  }



}
