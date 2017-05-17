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
  Platform,
} from 'react-native';
import React, { Component } from 'react';
import Camera from 'react-native-camera';
import firebase from 'firebase'
firebase.initializeApp({
  apiKey: "AIzaSyCBd_7vDohLI_r1eYCS8uISOn8r6481V-M",
  authDomain: "buzzpoint-imgbase.firebaseapp.com",
  databaseURL: "https://buzzpoint-imgbase.firebaseio.com",
  projectId: "buzzpoint-imgbase",
  storageBucket: "buzzpoint-imgbase.appspot.com",
  messagingSenderId: "977945014887"
})
import RNFetchBlob from 'react-native-fetch-blob'


export default class ImageCapture extends Component {

  constructor(props){
    console.log(props);
    super(props);
    this.state = {
      capturedImg: null,
    }
  }
  componentDidMount(){

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
      this.camera.capture({metadata: options})
        .then( data => {
          // uploads
          uploadImage(data.mediaUri)
          .then( imgUrl => {
            console.log("FIREBASE RES", imgUrl);
            this.setState({ capturedImg: imgUrl})

          })
        })
        .catch(err => console.error(err));
    }
}

// Prepare Blob support
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

const uploadImage = (uri, mime = 'image/jpg') => {
  const storage = firebase.storage()
  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
    const sessionId = new Date().getTime()
    let uploadBlob = null
    const imageRef = storage.ref('buzzpoint_images').child(`${sessionId}`)

      fs.readFile(uploadUri, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
        uploadBlob = blob
        return imageRef.put(blob, { contentType: mime })
      })
      .then(() => {
        uploadBlob.close()
        return imageRef.getDownloadURL()
      })
      .then((url) => {
        console.log("RES URL", url);
        resolve(url)
      })
      .catch((error) => {
        reject(error)
      })
  })
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
