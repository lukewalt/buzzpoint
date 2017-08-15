
import React, {Component} from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

export default class SingleView extends Component {

  constructor(props) {
    console.log(props);
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}
