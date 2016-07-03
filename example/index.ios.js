/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';


import Newsticker from 'react-native-newsticker';
// import Newsticker from './index.js';

class NewstickerExample extends Component {
  constructor (props) {
    super(props)
    this.state = {
      is_begin: false,
      is_back: false,
    }
  }
  onFinish () {
    console.log('Newsticker Finished')
    this.setState({is_begin: !this.state.is_begin})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Newsticker Example</Text>
        <Newsticker
          style={styles.alignLeft}
          typeInterval={100}
          blinkInterval={500}
          onFinish={() => {this.onFinish()}}
          start={this.state.is_begin}
          back={this.state.is_back}
          text={'This is a really awesome Newsticker !!'}
        />

        <View style={styles.flex}>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{
              this.setState({
                is_back: true,
                is_begin: true,
              })}
            }
            >
            <Text style={styles.buttonText}>{"<<"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={()=>{this.setState({is_begin: !this.state.is_begin})}}
            >
            <Text style={styles.buttonText}>{this.state.is_begin ? '‖' : '▷'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={()=>{
              this.setState({
                is_back: false,
                is_begin: true,
              })
            }}
            >
            <Text style={styles.buttonText}>{">>"}</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  alignLeft: {
    textAlign: 'left',
  },
  button: {
    flex: 1,
    height: 30,
    marginTop: 30,
    marginHorizontal: 10,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: '#007AFF',
    borderColor: 'transparent',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  flex: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NewstickerExample', () => NewstickerExample);
