var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;


var Newsticker = React.createClass({
  getInitialState: function() {
    var that = this;
    return {
      render_text: '',
      state: [],
      timers: [],
    };
  },
  getDefaultProps: function() {
    return {
      text: '',
      typeSpeed: 100,
      callbackDelay: 0,
      blinkInterval: 500
    };
  },
  componentDidMount() {
    var that = this;
    that.setState({
      text: that.props.text.split('')
    });
    this.state.timers.push( setInterval(function(){
      that.setState({
        render_text: that.state.render_text+that.state.text.shift()
      });
      if (that.state.text.length == 0) {
        clearInterval(that.state.timers[0]);
      }
    }, this.props.typeSpeed) );
  },

  render: function() {
    return (
      <View>
        <Text style={[this.props.style]}>
          {this.state.render_text}
        </Text>
      </View>
    );
  },
});


var styles = StyleSheet.create({

  radioForm: {
  },

  radioWrap: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
  },
  radio: {
    justifyContent: 'center',
    alignItems: 'center',

    width: 30,
    height: 30,
    borderColor: '#2196f3',
    borderWidth: 3,
    borderRadius: 30,
  },

  radioLabel: {
    paddingLeft: 10,
    lineHeight: 20,
  },

  radioActive: {
    width: 25,
    height: 25,
    backgroundColor: '#2196f3',
    borderRadius: 12.5,
  },
});

module.exports = Newsticker;
