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

import TotalCount from './totalCount'
import TagsOnPost from './tagsOnPost'


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
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(posts.data),
          loaded: true,
        })
        console.log(this.state);
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
      <View style={{paddingTop: 100}}>
        <View style={{alignItems: 'center'}}>
          <Image
          style={styles.userProfileImg}
          source={require('../img/profilePic.png')}
          />
          <Text style={styles.userTite}>{this.state.userName}</Text>
        </View>
        <TotalCount style={{marginHorizontal: 50}}/>
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
