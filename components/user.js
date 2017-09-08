'use strict';

import {
  View,
  Text,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  ListView,
  Alert,
} from 'react-native'

import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import zoneCalc from './_zone-calc';
import styles from '../styles/styles';
import Swipeout from 'react-native-swipeout';
import SingleView from './singleView';

// instantiates data store for list view
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

export default class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.loggedIn,
      userId: this.props.userId,
      userName: null,
      loaded: false,
      numPos: [],
      numNeg: [],
    }

  }

  // fires http request when the component loads
  componentDidMount(){
    this._getCurrentUserInfo()
  }


  // http request that gets user info then user posts
  _getCurrentUserInfo() {
    axios.get(`https://buzzpoint.herokuapp.com/api/users/${this.state.userId}`)
    .then( userData => {
      this.setState({
        userName: userData.data.user_name
      })
      this._getUserPosts()
    })
  }

  _getUserPosts(){
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
        dataSource: ds.cloneWithRows(sortedUserPosts),
        loaded: true,
      })
    })
    .done()
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
            <Image
              style={styles.userProfileImg}
              source={require('../img/profilePic.png')}
            />
          <Text style={styles.userTite}>luke@dev.com</Text>
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
          renderRow={this.renderPosts.bind(this)}
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

    // Swipe to delete
    let swipeBtns = [{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: '#fff',
      style: {width: 100},
      onPress: () => { this._deleteNote(posts.id) }
    }];

    return (
      <View key={posts.id} style={styles.post}>

        <Swipeout right={swipeBtns} backgroundColor= 'transparent'>
          <TouchableHighlight underlayColor='white' onPress={() => {this._showSingle(posts)} }>
            <View style={styles.innerPost}>
              <View style={{marginRight: 10}}>
                <Image
                  style={styles.thumbPost}
                  source={posts.positive ? require('../img/tu.png') : require('../img/td.png')}
                />
              <Text style={styles.zoneName}>{zoneCalc(posts.zone).toUpperCase()}</Text>
              </View>
              <View style={styles.commentSect}>
                <Text style={styles.area_name}>{posts.area_name.replace(/[, ]+/g, " ").trim()}</Text>
                <Text style={styles.postTitle}>{posts.comment}</Text>
              </View>
              <View>
                <Image style={styles.postImg} source={{uri: posts.image}}/>
              </View>
            </View>
          </TouchableHighlight>
          <View style={styles.tagSection} >
            {
              posts.tags.map(i => {
                return (
                  <Text key={i.id} style={styles.tag}>{i.tag_name}</Text>
                )
              })
            }
          </View>
        </Swipeout>

      </View>
    );
  }

  // navigates to single view
  _showSingle(postInfo) {
    this.props.navigator.push({
      component: SingleView,
      title: '',
      translucent: false,
      shadowHidden: true,
      passProps: {
        postInfo
      }
    })
  }

  // delete function for respective post
  _deleteNote(id){
    let idToString = JSON.stringify(id)
    axios.delete(`https://buzzpoint.herokuapp.com/api/posts/${idToString}`)
    .then( e => {
      this.setState({
        numPos: [],
        numNeg: [],
      })
    })
    .then( res => {
      this._getUserPosts()

    })
  }


}
