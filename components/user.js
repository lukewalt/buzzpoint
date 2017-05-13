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
import styles from '../styles/styles';
import axios from 'axios';

export default class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.userId,
      userName: null,
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      loaded: false,
    }
  }

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
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(posts.data),
          loaded: true,
        })
        console.log(this.state);
      })
      .done()
    })
  }

  getUserPosts() {
  }

  render() {
    // sets a loading view until movies state changes
    if (!this.state.loaded) {
      return this.renderLoadingView()
    }
    // renders the movies based on listview
    return (
      <View style={{paddingTop: 100}}>
        <View style={{alignItems: 'center'}}>
          <Image
          style={styles.userProfileImg}
          source={require('../img/profilePlace.png')}
          />
          <Text>{this.state.userName}</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderPosts}
          style={styles.userPost}
        />
      </View>
    )
  }

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

  renderPosts(posts) {
    return (
      <View style={styles.post}>
        <View style={{flex: 1,flexDirection: 'row'}}>
          <Text style={styles.subtitle}> {posts.zone}</Text>
          <Text style={styles.postTitle}>{posts.comment}</Text>
          <Text style={styles.subtitle}> {posts.zipcode}</Text>
        </View>
      </View>
    );
  }

}
