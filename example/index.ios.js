/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import Newsticker from './index.js';
// var React = require('./index.js');

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var NewstickerProject = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Newsticker Example</Text>
        <Newsticker
          style={styles.alignLeft}
          text={'This is a rearlly awesome Newsticker !!'}
        />

      </View>
    );
  }
});

var styles = StyleSheet.create({
  alignLeft: {
    textAlign: 'left',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 80,
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

AppRegistry.registerComponent('NewstickerProject', () => NewstickerProject);
