'use strict'

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Component,
} = React;

// var Newsticker = React.createClass({
export class Newsticker extends Component {
  constructor() {
    super();
    this.state = {
      render_text: '',
      state: [],
      timers: [],
      blink_timer: [],
      is_cursor_disp: true,
    }
  }
  componentDidMount() {
    var that = this;
    that.setState({
      text: that.props.text.split(''),
    });
    this.newsticker();
  }
  componentDidUpdate() {
    this.newsticker();
  }
  newsticker() {
    var that = this;
    if(this.props.start && this.state.timers.length == 0) {
      this.state.timers.push( setInterval(function(){
        that.setState({
          render_text: that.state.render_text+that.state.text.shift()
        });
        if (that.state.text.length == 0) {
          clearInterval(that.state.timers[0]);
          that.blink();
        }
      }, this.props.typeInterval) );
    }
  }
  blink() {
    var that = this;
    this.state.blink_timer.push( setInterval(function(){
      that.setState({
        is_cursor_disp: !that.state.is_cursor_disp,
      });
    }, this.props.blinkInterval) );
  }

  render() {
    return (
      <View>
        <Text style={[this.props.style]}>
          {this.state.render_text}
          <Text style={[
            styles.cursor,
            this.state.is_cursor_disp && styles.display,
          ]}>|</Text>
        </Text>
      </View>
    );
  }
}

Newsticker.defaultProps = {
  text: '',
  typeInterval: 100,
  blinkInterval: 500,
  start: true,
  callbackDelay: 0,
};

var styles = StyleSheet.create({
  cursor: {
    fontWeight: 'bold',
    opacity: 0,
  },
  display: {
    opacity: 1,
  },
});
