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
  }
  componentDidUpdate(prevProps, prevState) {
    var that = this;
    if(this.props.start) {
      this.controller(prevProps, prevState)
    }
  }
  controller(prevProps, prevState) {
    if(this.state.text.length > 0 && this.props.start) {
      this.tick()
    }
  }
  tick() {
    var that = this;
    setTimeout(function(){
      that.setState({
        render_text: that.state.render_text+that.state.text.shift()
      });
      if (that.state.text.length === 0) {
        that.tickEnd()
      }
    }, this.props.typeInterval);

  }

  tickEnd() {
    this.blink();
    if (this.props.onFinish) {
      this.props.onFinish()
    }
  }

  blink() {
    var that = this;
    this.state.blink_timer.push( setInterval(function(){
      that.setState({
        is_cursor_disp: !that.state.is_cursor_disp,
      });
    }, this.props.blinkInterval) )
  }

  render() {
    var cursor = (
      <Text style={[
        styles.cursor,
        this.state.is_cursor_disp && styles.display,
      ]}>|</Text>
    )
    return (
      <View>
        <Text style={[this.props.style]}>
          {this.state.render_text}
          {this.props.cursor && cursor}
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
  onFinish: false,
  cursor: true,
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

module.exports = Newsticker
