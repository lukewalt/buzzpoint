
import React, {Component} from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import styles from '../styles/styles';
import zoneCalc from './_zone-calc'


export default class SingleView extends Component {

  render() {
    const post = this.props.postInfo;

    return (
      <View style={styles.singleViewCont}>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.thumbPostSingle}
            source={post.positive ? require('../img/tu.png') : require('../img/td.png')}
          />
          <Text style={styles.singleBanner}>{post.area_name}</Text>
        </View>
        <Image style={styles.singleViewImg} source={{uri: post.image}}/>
        <Text style={styles.singleComment}>{post.comment.toLowerCase() }</Text>
        <View style={styles.tagCont}>
          { post.tags.map( i => {
            return (
              <Text key={i.id} style={styles.tagsSinglePage}>{i.tag_name}</Text>
            )
          })
        }
        </View>
        <Text style={styles.zoneNameSingle}> {'Zone :   ' + zoneCalc(post.zone)}</Text>
      </View>
    );
  }
}
