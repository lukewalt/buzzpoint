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
    console.log("USER PROPS", props);
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
  // http request that gets user info then user posts
  getCurrentUserInfo() {
    axios.get(`https://buzzpoint.herokuapp.com/api/users/${this.state.userId}`)
    .then( userData => {
      this.setState({
        userName: userData.data.user_name
      })
      axios.get(`http://localhost:3000/api/posts/user/${this.state.userId}`)
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
          <TouchableHighlight underlayColor='white' onPress={this._doLogout}>
            <Image
              style={styles.userProfileImg}
              source={require('../img/profilePic.png')}
            />
          </TouchableHighlight>
          <Text style={styles.userTite}>{this.state.userName}</Text>
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

    return (
      <View style={styles.post}>
        <View style={styles.innerPost}>
          <View style={{marginRight: 10}}>
            <Image
              style={styles.thumbPost}
              source={posts.positive ? require('../img/tu.png') : require('../img/td.png')}
            />
            <Text style={{fontWeight: 'bold', color: '#3d8af7'}}>{postZone.toUpperCase()}</Text>
          </View>
          <View style={{ flexDirection: 'column'}}>
            <Text style={styles.postTitle}>{posts.area_name}</Text>
            <Text style={styles.postTitle}>{posts.comment}</Text>
          </View>
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


  _doLogout() {
    console.log("LOGOUT");
    // getTagsOnPost={this._getTagsOnPost}
  }

}
