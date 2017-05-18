'use strict';

import {
  View,
  Text,
  TouchableHighlight,
  ListView,
  Image,
  ActivityIndicator,
} from 'react-native'

import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import styles from '../styles/styles';



export default class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.loggedIn,
      userId: this.props.userId,
      userName: null,
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      loaded: false,
      numPos: [],
      numNeg: [],
    }

  }

  // fires http request when the component loads
  componentDidMount(){
    this.getCurrentUserInfo()
  }

  getCurrentUserInfo() {
    axios.get(`https://buzzpoint.herokuapp.com/api/users/${this.state.userId}`)
    .then( userData => {
      this.setState({
        userName: userData.data.user_name
      })
      axios.get(`https://buzzpoint.herokuapp.com/api/posts/user/${this.state.userId}`)
      .then( posts => {

        let positive = this.state.numPos
        let negative = this.state.numNeg
        posts.data.map( i => {
          i.positive ? positive.push(i.positive) : negative.push(i.positive)
        })

        // assigns user posts array of objs to variable
        let sortedUserPosts = posts.data
        // sorts those posts from newest to oldest
        sortedUserPosts.sort((a, b) => {
          return b.id - a.id
        })
        // sends sorted posts to list view

        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(sortedUserPosts),
          loaded: true,
        })
      })
      .done()
    })
  }


  render() {

    // sets a loading view until posts load
    if (!this.state.loaded) {
      return this.renderLoadingView()
    }

    // View Structure
    return (
      <View style={{paddingTop: 0}}>
        <View style={{alignItems: 'center'}}>
          <TouchableHighlight underlayColor='white' onPress={this._doLogout}>
            <Image
              style={styles.userProfileImg}
              source={require('../img/profilePic.png')}
            />
          </TouchableHighlight>
          <Text style={styles.userTite}>luke_handle</Text>
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
          style={styles.userPosts}
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

  // List View of posts
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
    console.log(posts.image);
    return (
      <View key={posts.id} style={styles.post}>
        <View style={styles.innerPost}>
          <View style={{marginRight: 10}}>
            <Image
              style={styles.thumbPost}
              source={posts.positive ? require('../img/tu.png') : require('../img/td.png')}
            />
            <Text style={styles.zoneName}>{postZone.toUpperCase()}</Text>
          </View>
          <View style={styles.commentSect}>
            <Text style={styles.area_name}>{posts.area_name.replace(/[, ]+/g, " ").trim()}</Text>
            <Text style={styles.postTitle}>{posts.comment}</Text>
          </View>
          <View>
            <Image style={styles.postImg} source={{uri: posts.image}}/>
          </View>
        </View>
        <View style={styles.tagSection} >
          {
            posts.tags.map(i => {
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
