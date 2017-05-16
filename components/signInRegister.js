'use strict';

import {
  View,
  Text,
  TouchableHighlight,
  Image,
  TextInput,
} from 'react-native'
import axios from 'axios'
import React, { Component, PropTypes } from 'react';
import styles from '../styles/styles';


export default class LoginRegister extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userEmail: null,
      userPass: null,
      userId: null,
    }
  }

  componentDidMount() {
    console.log(this.state);

  }


  static propTypes = {
    title: PropTypes.string,
    navigator: PropTypes.object.isRequired,
  }




  render() {
    return (
      <View style={styles.loginRegisterContainer}>
        <Image style={{height: 100, width: 100, marginBottom: 50}} source={require('../img/profileWhite.png')}/>
        <TextInput
          style={styles.signRegInput}
          onChangeText={comment => this.setState({comment})}
          value={this.state.comment}
          placeholder='Email'
        />
        <TextInput
          style={styles.signRegInput}
          onChangeText={comment => this.setState({comment})}
          value={this.state.comment}
          placeholder='Password'
        />
      </View>
    )
  }


}
