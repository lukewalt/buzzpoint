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

export default class TabBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tabOne',
    };
  }

  setTab(tabId) {
    this.setState({selectedTab: tabId})
  }

  _getZone = (zone) => {
    this.props.navigator.push({
      component: ZonesTab,
      title: 'ZONE',
      passProps: {
        zoneId: zone
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
            <TouchableHighlight underlayColor='white' style={{alignSelf: 'stretch'}} onPress={() => this._getZone(2)}>
              <Text style={styles.zones}>EAST</Text>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='white' style={{alignSelf: 'stretch'}} onPress={() => this._getZone(4)}>
              <Text style={styles.zones}>WEST</Text>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='white' style={{alignSelf: 'stretch'}} onPress={() => this._getZone(3)}>
              <Text style={styles.zones}>SOUTH</Text>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='white' style={{alignSelf: 'stretch'}} onPress={() => this._getZone(1)}>
              <Text style={styles.zones}>NORTH</Text>
            </TouchableHighlight>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title={'TAGS'}
          icon={require('../img/tags.png')}
          selected={this.state.selectedTab === 'tabTwo'}
          onPress={() => this.setTab('tabTwo')}>
          <View style={styles.tabContainer}>
            <Text style={styles.instructions}>Tab Two</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title={'POSTS'}
          icon={require('../img/post.png')}
          selected={this.state.selectedTab === 'tabThree'}
          onPress={() => this.setTab('tabThree')}>
          <View style={styles.tabContainer}>
            <Text style={styles.instructions}>Tab Three</Text>
          </View>
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }

}
