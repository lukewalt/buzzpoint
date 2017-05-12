'use strict';

import styles from '../styles/styles.js'
import React, { Component } from 'react';
import {
  Text,
  View,
  TabBarIOS
} from 'react-native';


export default class TabBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tabOne'
    };
  }

  setTab(tabId) {
    this.setState({selectedTab: tabId})
  }

  render() {
    console.log('tab bar loaded');
      return (
        <TabBarIOS>
          <TabBarIOS.Item
            systemIcon="featured"
            selected={this.state.selectedTab === 'tabOne'}
            onPress={() => this.setTab('tabOne')}>
            <View style={styles.tabContainer}>
              <Text style={styles.instructions}>Tab One</Text>
            </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            systemIcon="history"
            selected={this.state.selectedTab === 'tabTwo'}
            onPress={() => this.setTab('tabTwo')}>
            <View style={styles.tabContainer}>
              <Text style={styles.instructions}>Tab Two</Text>
            </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            systemIcon="bookmarks"
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
