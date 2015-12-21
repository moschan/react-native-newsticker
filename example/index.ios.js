/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import Newsticker from 'react-native-newsticker';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} = React;

var NewstickerProject = React.createClass({
  getInitialState: function() {
    return {
      is_begin: false,
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Newsticker Example</Text>
        <Newsticker
          style={styles.alignLeft}
          typeInterval={100}
          blinkInterval={500}
          start={this.state.is_begin}
          text={'This is a really awesome Newsticker !!'}
        />

      <TouchableOpacity
        style={styles.button}
        onPress={()=>{this.setState({is_begin: true})}}
        >
        <Text style={styles.buttonText}>Start Newsticker</Text>
      </TouchableOpacity>

      </View>
    );
  }
});

var styles = StyleSheet.create({
  alignLeft: {
    textAlign: 'left',
  },
  button: {
    height: 30,
    marginTop: 30,
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
