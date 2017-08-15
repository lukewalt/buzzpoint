
import React, {Component} from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import styles from '../styles/styles';

export default class SingleView extends Component {

  _zoneName(postZone) {
    if (postZone === 1) {
      return "North"
    } else if (postZone === 2) {
      return "East"
    } else if (postZone === 3) {
      return "South"
    } else {
      return "West"
    }
  }

  render() {
    const post = this.props.postInfo
    console.log(post);

    return (
      <View style={styles.singleViewCont}>
        <Image style={styles.singleViewImg} source={{uri: post.image}}/>
        <Image
          style={styles.thumbPost}
          source={post.positive ? require('../img/tu.png') : require('../img/td.png')}
        />
        <View style={{marginRight: 10}}>

          <Text style={styles.zoneName}>{this._zoneName(post.zone).toUpperCase()}</Text>
        </View>
        <Text>{post.comment}</Text>
        <Text>{post.area_name}</Text>
        <View style={styles.tagList}>
          { post.tags.map( i => {
              return (
                <Text key={i.id} style={styles.tagForSubmit}>{i.tag_name}</Text>
              )
            })
          }
        </View>
      </View>
    );
  }
}
