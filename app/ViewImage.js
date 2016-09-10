import React, {Component} from 'react';
import {
  View,
  Image,
  Dimensions
} from 'react-native'

let windowWidth = Dimensions.get('window').width

class ViewImage extends Component {
  propTypes:{
    source: React.propTypes.string
  }
  render () {
    return (
      <View>
        <Image source={ this.props.source }  style={{width: windowWidth, height: windowWidth}}/>
      </View>
		)
  }
}

export default ViewImage
