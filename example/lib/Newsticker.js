import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Style from './Style'

export class Newsticker extends Component {
  constructor() {
    super();
    this.state = {
      render_text: '',
      state: [],
      timers: [],
      tick_timer: '',
      blink_timer: '',
      is_cursor_disp: true,
    }
  }

  componentDidMount() {
    var that = this;
    that.setState({
      text: that.props.text.split(''),
    });
  }
 componentWillReceiveProps(nextProps) {
    var that = this;
    if(nextProps.start) {
      clearInterval(this.state.blink_timer)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  componentDidUpdate(prevProps, prevState) {
    var that = this;
    if(this.props.start) {
      this.controller(prevProps, prevState)
    }
  }
  controller(prevProps, prevState) {
    if(
      (!this.props.back && this.state.text.length > 0) ||
      (this.props.back && this.state.render_text.length > 0) &&
      this.props.start) {
      this.tick()
      } else {
        this.tickEnd()
      }
  }
  tick() {
    var that = this;
     setTimeout(function(){
      that._setText()
      clearInterval(that.state.tick_timer)
    }, this.props.typeInterval);

  }
  _setText() {
    var that = this;
    var text = '';
    if (this.props.back) {
      that.state.text.unshift( that.state.render_text.substr( -1, 1 ) )
      text = that.state.render_text.substr( 0 , (that.state.render_text.length-1) )
    } else {
      text = that.state.render_text + that.state.text.shift()
    }

    that.setState({
      render_text: text
    });
  }


  tickEnd() {
    clearInterval(this.state.blink_timer)
    this.blink();
    if (this.props.onFinish) {
      this.props.onFinish()
    }
    this.setState({is_ticking: false})
  }

  blink() {
    var that = this;
    this.state.blink_timer = setInterval(function(){
      that.setState({
        is_cursor_disp: !that.state.is_cursor_disp,
      });
    }, this.props.blinkInterval)
  }

  render() {
    var cursor = (
      <Text style={[
        Style.cursor,
        this.state.is_cursor_disp && Style.display,
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

module.exports = Newsticker
