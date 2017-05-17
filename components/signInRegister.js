'use strict';

import {
  View,
  Text,
  TouchableHighlight,
  Image,
  TextInput,
  Button,
  Alert,
} from 'react-native'
import axios from 'axios'
import React, { Component, PropTypes } from 'react';
import styles from '../styles/styles';
import Rating from './rating'

export default class LoginRegister extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: true,
      register: false,
      user_name: null,
      email: null,
      password: null,
    }
  }

  componentDidMount() {
    console.log(this.state);

  }


  static propTypes = {
    title: PropTypes.string,
    navigator: PropTypes.object.isRequired,
  }

  _doLogin = () => {
    // shorthand variables from state
    let userE = this.state.email
    let userP = this.state.password
    // checks for email with @ and password greater than 6 before moving to rate
    if (userE !== null && userE.includes('@') && userP > 6) {
      this._goToUserRate()
    } else {
      Alert.alert('Invalid Email Address or Password')
    }
  }

  _togView = () => {
    this.setState({ login: !this.state.login, register: !this.state.register})
  }

  _doRegister = () => {
    // shorthand variables from state
    let email = this.state.email
    let pass = this.state.password
    // checks for email with @ and password greater than 6 before moving to rate
    if (email !== null && email.includes('@') && pass > 6) {
      //defines new user object for post
      let newUser = {
        user_name: this.state.user_name,
        email: this.state.email,
        password: this.state.password,
        image: 'https://cdn.pixabay.com/photo/2013/10/21/04/51/color-198892_640.jpg'
      }
      // call the http function for new user auth
      console.log(newUser);
      this._authUser(newUser)
      console.log("registed");

    } else {
      Alert.alert('Invalid Email Address or Password')
    }
  }

  _authUser = (newUser) => {
    console.log(newUser);
    axios.post(`http://buzzpoint.herokuapp.com/api/users`, newUser)
    .then( res => {
      console.log(res);
      this.props.navigator.push({
        component: Rating,
        title: 'BuzzPoint',
        passProps: {
          email: null,
          password: null,
          userId: null
        }
      });
    })
    .catch( err => console.log(err) )

  }

  _goToUserRate = () => {
    this.props.navigator.push({
      component: Rating,
      title: 'BuzzPoint',
      passProps: {
        email: null,
        password: null,
        userId: 1
      }
    });
  }

  render() {
    // REGISTER
    if (this.state.register) {
      return (
        <View style={styles.loginRegisterContainer}>
          <Image style={{height: 100, width: 100, marginBottom: 50}} source={require('../img/profileWhite.png')}/>
          <TextInput
            style={styles.signRegInput}
            onChangeText={user_name => this.setState({user_name})}
            value={this.state.username}
            placeholder='User Name'
          />
          <TextInput
            style={styles.signRegInput}
            onChangeText={email => this.setState({email})}
            value={this.state.email}
            placeholder='Email'
          />
          <TextInput
            style={styles.signRegInput}
            onChangeText={password => this.setState({password})}
            value={this.state.password}
            placeholder='Password'
          />
          <TouchableHighlight underlayColor='white' style={{flexDirection: 'row'}} onPress={this._doRegister}>
            <Text style={styles.loginButton}>REGISTER</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._togView}>
            <Text style={{color: '#033076'}}>back</Text>
          </TouchableHighlight>
        </View>
      )
    } else {
      // LOGIN
      return (
        <View style={styles.loginRegisterContainer}>
          <Image style={{height: 100, width: 100, marginBottom: 50}} source={require('../img/profileWhite.png')}/>
          <TextInput
            style={styles.signRegInput}
            onChangeText={email => this.setState({email})}
            value={this.state.email}
            placeholder='Email'
          />
          <TextInput
            style={styles.signRegInput}
            onChangeText={password => this.setState({password})}
            value={this.state.password}
            placeholder='Password'
          />
          <TouchableHighlight underlayColor='white' onPress={this._doLogin}>
            <Text style={styles.loginButton}>LOGIN</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='white' onPress={this._togView}>
            <Text style={{color: '#033076'}}>REGISTER</Text>
          </TouchableHighlight>
        </View>
      )
    }

  }
}
