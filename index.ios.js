/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React,{Component} from 'react'
 import {
  AppRegistry,
  Navigator
} from 'react-native'
import App from './app/App'
import ViewImages from './app/ViewImage'

class RealmImgur extends Component {

  renderScene (route, navigator) {
    if (route.name === 'App') {
      return <App navigator={navigator} {...route.passProps} />
    }
    if (route.name === 'ViewImage') {
      return <ViewImages navigator={navigator} {...route.passProps} />
    }
  }

  configureScene (route) {
    return Navigator.SceneConfigs.FloatFromBottom
  }

  render () {
    return (
      <Navigator
        configureScene={this.configureScene.bind(this)}
        style={{ flex: 1, backgroundColor: 'white' }}
        initialRoute={{ name: 'App' }}
        renderScene={this.renderScene.bind(this)} />
    )
  }
}

AppRegistry.registerComponent('ObtenerGif', () => RealmImgur)
