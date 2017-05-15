'use strict';

import {
  View,
  Text,
  TouchableHighlight,
  Image,
  Alert,
  CameraRoll,
  Modal,
  Button,
  ScrollView,
} from 'react-native'

import React, { Component, PropTypes } from 'react';
import styles from '../styles/styles';


export default class ImageBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photoSelected: false,
      animationType: 'slide',
      modalVisible: false,
      transparent: false,
      selectedSupportedOrientation: 0,
      currentOrientation: 'unknown',
      photos: [],
      index: null
    };
  }

  _openCamera = () => {


  }

  selectImage = (i, uri) => {
    if (i === this.state.index) {
      index = null
    }
    this.setState({
      index: i,
      photoSelected: uri
    })
    this.props.imgSelected(uri)
    this.toggleModal()
  }


  getImagesFromRoll = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All'
    })
    .then( data  => this.setState({ photos: data.edges }) )

  }

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  }


  render() {
    return (
      <View style={styles.imgBarCont}>
        <TouchableHighlight underlayColor='white' onPress={this._openCamera}>
          <Image style={styles.img} source={require('../img/takepic.png')} />
        </TouchableHighlight>
        <TouchableHighlight underlayColor='white' onPress={() => { this.toggleModal(); this.getImagesFromRoll() }}>
          <Image style={styles.img} source={this.state.photoSelected ? {uri: this.state.photoSelected} : require('../img/selectpicture.png')} />
        </TouchableHighlight>
        <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => console.log('closed')}
        >
        <View style={styles.modalContainer}>
        <Button
        title='Close'
        onPress={this.toggleModal}
        />
        <ScrollView
        contentContainerStyle={styles.scrollView}>
        {
          this.state.photos.map((p, i) => {
            return (
              <TouchableHighlight
                style={{opacity: i === this.state.index ? 0.5 : 1}}
                key={i}
                underlayColor='transparent'
                onPress={() => this.selectImage(i, p.node.image.uri)}
              >
                <Image
                  style={{
                    width: 125,
                    height: 125,

                  }}
                  source={{uri: p.node.image.uri}}
                />
              </TouchableHighlight>
            )
          })
        }
        </ScrollView>

        </View>
        </Modal>
      </View>





    )
  }
}
