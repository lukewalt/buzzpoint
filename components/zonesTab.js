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
import TagsOnPost from './tagsOnPost'
import TotalCount from './totalCount'

export default class ZonesTab extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state={
      zone: this.props.zoneId,
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      loaded: false,
    }
  }

  componentDidMount(){
    this.getPostsByZone()
  }

  getPostsByZone() {
    axios.get(`https://buzzpoint.herokuapp.com/api/posts/zones/${this.state.zone}`)
    .then( posts => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(posts.data),
        loaded: true,
      })
      console.log(this.state);
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
      <View style={{flex: 1}}>
        <View style={styles.searchBarBackground}>
          <TextInput
          style={styles.searchBar}
          placeholder='Search'
          />
        </View>
        <TotalCount style={{marginHorizontal: 50}}/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderPosts}
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
  renderPosts(posts) {
    console.log(posts.image);
    return (
      <View style={styles.post}>
        <View style={styles.innerPost}>
          <View style={{marginRight: 10}}>
            <Image
              style={styles.thumbPost}
              source={posts.positive === true ? require('../img/tu.png') : require('../img/td.png')}
            />
            <Text style={{fontWeight: 'bold', color: '#3d8af7'}}> {posts.zone}</Text>
          </View>
          <Text style={styles.postTitle}>{posts.comment}</Text>
          <View>
            <Image style={styles.postImg} source={{uri: 'https://cdn.pixabay.com/photo/2013/10/21/04/51/color-198892_640.jpg'}}/>
          </View>
        </View>
        <TagsOnPost/>
      </View>
    );
  }


}
