'use strict';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  Alert,
} from 'react-native';
import React, { Component } from 'react';
import Camera from 'react-native-camera';



export default class ImageCapture extends Component {

  constructor(props){
    console.log(props);
    super(props);
    this.state = {

    }
  }

  render() {
      return (
        <View style={styles.container}>
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}>
            <TouchableHighlight>
              <Text style={styles.capture} onPress={this.props.toggleCamera}>close</Text>
            </TouchableHighlight>
            <TouchableHighlight>
              <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[B]</Text>
            </TouchableHighlight>
          </Camera>
        </View>
      );
    }

    takePicture() {
      const options = {};
      Alert.alert('PICTURE')
      this.camera.capture({metadata: options})
        .then( data => data.path)
        .catch(err => console.error(err));
    }
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      backgroundColor: '#3d8af7',
      borderRadius: 5,
      color: '#fff',
      padding: 10,
      margin: 40,

    }
  });




// <TouchableHighlight style={styles.buttonNavigation} onPress={ () => this.props.navigator.push({id: 'PersonPage', sceneConfig: Navigator.SceneConfigs.FloatFromLeft, img:capturedBase64, page:'camera'})}>
//   <Text style={styles.item_text}>Précédent</Text>
// </TouchableHighlight>
