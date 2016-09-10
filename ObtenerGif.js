import React, {Component} from 'react';
import {View} from 'react-native';

import Button from './Button/Button';
import DisplayAnImage from './DisplayAnImage';

class ObtenerGif extends Component{
  constructor(props){
    super(props);
    this._onPress = this._onPress.bind(this);
  }
  _onPress(){
    return(
      <View>
        <DisplayAnImage source={require('./img/gif1.gif')}/>
      </View>
    );
  }
  render(){
    return(
      <View>
      <Button
        label="Mostrar Gif"
        onPress={this._onPress} >
        </Button>
      </View>
    );
  }
}

export default ObtenerGif;
