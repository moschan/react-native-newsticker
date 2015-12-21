var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;


var Newsticker = React.createClass({
  getInitialState: function() {
    return {
      render_text: '',
      state: [],
      timers: [],
      blink_timer: [],
      is_cursor_disp: true,
    };
  },

  getDefaultProps: function() {
    return {
      text: '',
      typeInterval: 100,
      blinkInterval: 500,
      start: true,
      callbackDelay: 0,
    };
  },

  componentDidMount() {
    var that = this;
    that.setState({
      text: that.props.text.split(''),
    });
    this.newsticker();
  },
  componentDidUpdate() {
    this.newsticker();
  },

  newsticker: function() {
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
  },

  blink: function() {
    var that = this;
    this.state.blink_timer.push( setInterval(function(){
      that.setState({
        is_cursor_disp: !that.state.is_cursor_disp,
      });
    }, this.props.blinkInterval) );
  },

  render: function() {
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
  },
});


var styles = StyleSheet.create({
  cursor: {
    fontWeight: 'bold',
    opacity: 0,
  },

  display: {
    opacity: 1,
  },
});

module.exports = Newsticker;
