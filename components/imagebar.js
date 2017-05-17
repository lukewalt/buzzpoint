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
import ImageCapture from './imageCapture'

export default class ImageBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photoSelected: this.props.photoSelected,
      modalImgPickerVisible: false,
      modalCameraVisible: false,
      transparent: false,
      selectedSupportedOrientation: 0,
      currentOrientation: 'unknown',
      photos: [],
      index: null
    };
  }

  componentWillUpdate(nextProps, nextState) {
    nextState.photoSelected = nextProps.photoSelected
  }


  selectImage = (i, uri) => {
    if (i === this.state.index) {
      index = null
    }
    this.setState({
      index: i,
      photoSelected: uri
    })
    // sets
    this.toggleImgPicker()
  }


  getImagesFromRoll = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All'
    })
    .then( cameraRoll  => this.setState({ photos: cameraRoll.edges }) )

  }

  toggleImgPicker = () => {
    this.setState({ modalImgPickerVisible: !this.state.modalImgPickerVisible });
  }

  toggleCamera = () => {
    this.setState({
      modalCameraVisible: !this.state.modalCameraVisible,
      // photoSelected: img,
    });
  }

  render() {
    console.log(this.state.photoSelected);
    return (
      <View style={styles.imgBarCont}>
        <TouchableHighlight underlayColor='white' onPress={this.toggleCamera}>
          <Image style={styles.img} source={require('../img/takepic.png')} />
        </TouchableHighlight>
        <TouchableHighlight underlayColor='white' onPress={() => { this.toggleImgPicker(); this.getImagesFromRoll() }}>
          <Image style={styles.img} source={this.state.photoSelected ? {uri: this.state.photoSelected} : require('../img/selectpicture.png')} />
        </TouchableHighlight>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalImgPickerVisible}
          onRequestClose={() => console.log('closed')}
        >
          <View style={styles.modalContainer}>
            <Button
              title='Close'
              onPress={this.toggleImgPicker}
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
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalCameraVisible}
          onRequestClose={() => console.log('closed')}
        >
          <ImageCapture handleImagePass={(url) => this.props.handleImagePass(url)} toggleCamera={this.toggleCamera}/>
        </Modal>
      </View>

    )
  }
}
