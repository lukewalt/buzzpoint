'use strict';

import {
  Text,
  View,
  TextInput,
  ListView,
  Image,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';

import React, { Component } from 'react';
import styles from '../styles/styles.js'
import axios from 'axios'

export default class TagsTab extends Component {

  constructor(props) {
    super(props);
    this.state={
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      loaded: false,
    }
  }

  componentDidMount(){
    this.getAllPosts()
  }

  getAllPosts() {
    console.log("THIS AFTER COMP MOUNT", this);
    axios.get(`https://buzzpoint.herokuapp.com/api/tags`)
    .then( tags => {

      // defines instance of returned data
      let sortedPosts = tags.data
      // sorts tags based on length of posts array [which tag has the most posts]
      sortedPosts.sort((a, b) => {
        return b.posts.length - a.posts.length
      })

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(sortedPosts),
        loaded: true,
      })
      console.log("TAGS STATE AFTER CALL", this.state);
    })
    .done()
  }

  render(){

    // checks loading state
    if (!this.state.loaded) {
      return this.renderLoadingView()
    }

    // Full Page
    return (
      <View style={{flex: 1, alignSelf: 'stretch'}}>
        <View style={styles.searchBarBackground}>
          <TextInput
          style={styles.searchBar}
          placeholder='Search'
          />
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderTags}
          style={styles.zonePosts}
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


  // List View of posts inside of page
  renderTags(tags) {
    // defines empty arrays to push boolean values of each post related to tag
    let numPos = [];
    let numNeg = [];
    // drills to posts obj in each tag
    tags.posts.map( i => {
      // all trues pushed into numPos | all false into numNeg
      i.positive ? numPos.push(i.positive) : numNeg.push(i.positive)
    })
    return (
      <TouchableHighlight >
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} >
          <Text style={styles.tagPosts}>
            {tags.tag_name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.countSection}>
              <Text style={{color: '#32a800'}}>{numPos.length}</Text>
              <Image
                style={styles.thumbcount}
                source={require('../img/thumbUpGreen.png')}
              />
            </View>
            <View style={styles.countSection}>
              <Text style={{color: '#ff5a5a'}}>{numNeg.length}</Text>
              <Image
                style={styles.thumbcount}
                source={require('../img/thumbDownRed.png')}
              />
            </View>

          </View>
        </View>
      </TouchableHighlight>

    );
  }


}
