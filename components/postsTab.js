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

export default class PostsTab extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state={
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      loaded: false,
      numPos: [],
      numNeg: []
    }
  }

  componentDidMount(){
    this.getAllPosts()
  }

  getAllPosts() {
    axios.get(`https://buzzpoint.herokuapp.com/api/posts`)
    .then( posts => {
      console.log("POSTS FROM REQ", posts);
      let positive = this.state.numPos
      let negative = this.state.numNeg

      posts.data.map( i => {
        i.positive ? positive.push(i.positive) : negative.push(i.positive)
      })
      // assigns user posts array of objs to variable
      let sortedPosts = posts.data
      // sorts those posts from newest to oldest
      sortedPosts.sort((a, b) => {
        return b.id - a.id
      })
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(sortedPosts),
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
      <View style={{flex: 1, alignSelf: 'stretch'}}>
        <View style={styles.searchBarBackground}>
          <TextInput
          style={styles.searchBar}
          placeholder='Search'
          />
        </View>
        <View style={styles.countContainer}>
          <View style={styles.countSection}>
            <Text style={{color: '#32a800'}}>{this.state.numPos.length}</Text>
            <Image
            style={styles.thumbcount}
            source={require('../img/thumbUpGreen.png')}
          />
          </View>
          <View style={styles.countSection}>
            <Text style={{color: '#ff5a5a'}}>{this.state.numNeg.length}</Text>
            <Image
            style={styles.thumbcount}
            source={require('../img/thumbDownRed.png')}
          />
          </View>
        </View>
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
    // converts zone number to name
    let postZone = null
    if (posts.zone === 1) {
      postZone = "North"
    } else if (posts.zone === 2) {
      postZone = "East"
    } else if (posts.zone === 3) {
      postZone = "South"
    } else {
      postZone = "West"
    }

    return (
      <View style={styles.post}>
        <View style={styles.innerPost}>
          <View style={{marginRight: 10}}>
            <Image
              style={styles.thumbPost}
              source={posts.positive ? require('../img/tu.png') : require('../img/td.png')}
            />
            <Text style={{fontWeight: 'bold', color: '#3d8af7'}}> {postZone.toUpperCase()}</Text>
          </View>
          <Text style={styles.postTitle}>{posts.comment}</Text>
          <View>
            <Image style={styles.postImg} source={{uri: 'https://cdn.pixabay.com/photo/2013/10/21/04/51/color-198892_640.jpg'}}/>
          </View>
        </View>
        <View style={styles.tagSection} >
          { posts.tags.map(i => {
              return (
                <Text style={styles.tag}>{i.tag_name}</Text>
              )
            })
          }
        </View>
      </View>
    );
  }


}
