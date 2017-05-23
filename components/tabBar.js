'use strict';

import styles from '../styles/styles.js'
import React, { Component } from 'react';
import {
  Text,
  View,
  TabBarIOS,
  TouchableHighlight,
  Alert,
} from 'react-native';

import ZonesTab from './zonesTab'
import PostsTab from './postsTab'
import TagsTab from './tagsTab'
import TagPosts from './tagPosts'
import axios from 'axios'

export default class TabBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tabOne',
    }
    this._goToTagsPosts = this._goToTagsPosts.bind(this)
  }

  setTab(tabId) {
    this.setState({selectedTab: tabId})
  }

  _getZone = (zone, name) => {
    this.props.navigator.push({
      component: ZonesTab,
      title: '',
      titleTextColor: '#3d8af7',
      translucent: false,
      shadowHidden: true,
      passProps: {
        zoneId: zone,
        zoneName: name
      }
    })
  }

  _goToTagsPosts(tagId) {
    console.log("TAG ID BEFORE HTTP REQ", tagId);
    this.props.navigator.push({
      component: TagPosts,
      title: '',
      shadowHidden: true,
      passProps: {
        tagId: tagId
      }
    })

  }


  render() {


    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title={'ZONES'}
          icon={require('../img/zones.png')}
          selected={this.state.selectedTab === 'tabOne'}
          onPress={() => this.setTab('tabOne')}>
          <View style={styles.tabContainer}>
            <TouchableHighlight underlayColor='white' style={{alignSelf: 'stretch'}} onPress={() => this._getZone(2, ' East')}>
              <Text style={styles.zones}>EAST</Text>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='white' style={{alignSelf: 'stretch'}} onPress={() => this._getZone(4, 'West')}>
              <Text style={styles.zones}>WEST</Text>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='white' style={{alignSelf: 'stretch'}} onPress={() => this._getZone(3, 'South')}>
              <Text style={styles.zones}>SOUTH</Text>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='white' style={{alignSelf: 'stretch'}} onPress={() => this._getZone(1, 'North')}>
              <Text style={styles.zones}>NORTH</Text>
            </TouchableHighlight>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title={'TAGS'}
          icon={require('../img/tags.png')}
          selected={this.state.selectedTab === 'tabTwo'}
          onPress={() => this.setTab('tabTwo')}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TagsTab _goToTagsPosts={this._goToTagsPosts} />
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title={'POSTS'}
          icon={require('../img/post.png')}
          selected={this.state.selectedTab === 'tabThree'}
          onPress={() => this.setTab('tabThree')}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <PostsTab />
          </View>
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }

}
