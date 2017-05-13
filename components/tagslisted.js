'use strict';

import {
  View,
  Text,
  ListView,
} from 'react-native'

import React, { Component, PropTypes } from 'react';
import styles from '../styles/styles';
import axios from 'axios'


export default class TagsListed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // listview only renders data that is being viewed
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      // handles buffer
      loaded: false,
      userLoggedIn: 1,
    };
  }


  // fires when parent component is mounted
  componentDidMount() {
    this.fetchData();
  }

  // holds the http req
  fetchData() {
    // gets data using predefined url above -> converts to json -> updates the state
    axios.get(`https://buzzpoint.herokuapp.com/api/tags/${this.state.userLoggedIn}`)
    .then( res => {
      console.log('data', res.data);
      // this.setState({
      //   dataSource: this.state.dataSource.cloneWithRows(res.data),
      //   loaded: true,
      // })
    })


    .done()
  }


  render() {
    return (
      <View style={styles.tagList}>
        <Text style={styles.tag}>Restaurant</Text>
        <Text style={styles.tag}>Eats</Text>
        <Text style={styles.tag}>Patio</Text>
      </View>
    )
  }

}
