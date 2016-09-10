import React, {Component} from 'react';
import {Text, View, TouchableHighLight} from 'react-native';
import styles from './style';

class Button extends Component{
  constructor(props){
    super(props)
    
  }
  propTypes:{
    onPress: React.propTypes.func,
    label: React.propTypes.string
  }

  render(){
    return(
      <TouchableHighLight onPress={this.props.onPress}>
        <View style={[styles.button, this.props.style]}>
          <Text>
            {this.props.label}
          </Text>
        </View>
      </TouchableHighLight>
    );
  }
}

export default Button;
