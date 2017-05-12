'use strict';

import {
  View,
  Text,
  ListView,
} from 'react-native'

import React, { Component, PropTypes } from 'react';
import styles from '../styles/styles';


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
    };
  }


  // fires when parent component is mounted
  componentDidMount() {
    this.fetchData();
  }

  // holds the http req
  fetchData() {
    // gets data using predefined url above -> converts to json -> updates the state
    axios.get('https://buzzpoint.herokuapp.com/api/posts/user/')
    .then( res => res)
    .then( data => {
      console.log(data);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data.movies),
        loaded: true,
      })
    })
    .done()
  }


  render() {
    return (
      <View>
        <Text></Text>
      </View>
    )
  }

}
