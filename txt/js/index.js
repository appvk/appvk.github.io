'use strict';

var _class, _temp, _class2, _temp2;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var text = '\n
 0010010001111010110010110001011100011000010100000000011000011100010100010000101000110000001010111000
1011001100000100111110111000111111111010011010001101101101010111000000111000111011011000101000111100
0101000010101001000101100110011010010101110000111110111100010111010001011101101000110010110001011011
0111001010010001001101011111001111010100110101101000110110010011000100100010111011010101000111011110
1000111110110100101101010111110100111010001110011111000100001000001011100111111000001100110111011110
0000111000111111010100101011001001101000101010111100001111001101001001111000011010000001010001100100
0001011101001001100001110111101011001111110010111011111110010011100010000011101110011111110110011111
1011110110000100010010010010100000011011101111111010110100011100110110100101100100000101101111011000
1111110101000101100110010110100111111110001001100111111011011010111100111000111010000100100011011011
0101110111010101011010111100111011001000110101100001010111101010001000001001100111111010101000110001
0110111100101101000110001011010010000111010000001000010011111011101100011100011111101110001001011011
0100011000101111110111010000010101000110010101000000100100101111011010111001101010111100101101001000
1100100011011110101110101001101000101110001110101101011110010100111111000010011110101101011110000011
0011011000000011101101000100100000101110000001110100000000110110100000100111010100001101111000001010
1101011000100010001010101001111101011101110101000101111000110000110001100011011011010111100000000011
0101100010000011101111100011111100001001111101010110000111000100101110000010110010110000001010010110
1100011011000010110011110000111011000111100001000000010010001111111101101101100111000100100111111101
0100000001010100000111010100110101011011001011010101101110100101011100011001001001001101011101010101
0001011011101100001110111000101001010011010111110011000100011000100010010101100100000111101110111011
0110011010010001111010010010111010111100110101010111110111001101011100000100011111110000011101010011
0100110110000100111011010110100111000010101000111000100010011000110111001011111111101101011111010011
0111110111001100001011011001101000010000010010000100001010101101101000001001100000101010011100100100
1110010000101110010101101110001001101110011100100010100011111001011000000110111001010000001110000110
0111011111010111011000011111101011111011101111010001011100101111101001101010001001011000111101100100
0001010110011010100011111010101010101110110001011101011010100101010101100100110101101100111001101010
0100011000010001010101011111001001011110001010011011011011000000110001110010101111100011011001001110
1000100000010100010100110010010011111111000011011000100101000100000010000000111000010111111000100001
1000001010001101101111000100100111011111000001111000000110101100111100110011010101101001100100010111
1111001110000010000111010110110101110001110100001010011100011110011011000101101010000001110011000110
0001000010001110010001101001010101101101101001111000011110100111010101011100100010010100011000001010
1110010101111110010001111000010110011111110010011101110111111100000010100111000110000111001110110010
0110100010010011000010000111100010001011001001000100111011011111000111101010111001100100111110100101
1010000100011100000110010001001010110110111001100110100001111001100000010001000001110001101110101110
1010110000010011111111000000101010000011101001111101100000011100111100000011101101001111000001011100
0011010001001100010110001011011110100100101101000011000001100000111111100101000110101010111101100010
1010001001111000000000110010100000100110010100111100001110011100010011100110110111101001100000011001
0110110001101100000010101101100001100010110100100100100111100011000100000111110110100101100010101000
1011001000001010001101001111101110011011111010100111000001000110000101010111101011001100001100000110
0011001000010011001101100000001100010111010101110011111100001111011010110100000100101111011000000111
0010111101001110111011101010111100010000001001100100100010100100111000010011100011001000010101001110
0010000011110101001111011100111011011100110011111101001000011001000100001101111011100101100110010101
1110100010100001100010100001110110110111000111011000101000111001110000000011011001111101100101100011
0110000110110001100111110011111110010010011110000101100101111110010110110100100011011001000010001110\n?' ;

// Cycle animation
var fadeInOut = true;
// Time to complete animation. Proportional to framerate
var animationDuration = 4000;
// Time it takes each letter to fade in. Inversely proportional to framerate
var animationSpeed = 1000;
var fontSize = 50;

// Keep synced with scss
var numKeyframes = 20;

// Alternate Setup

// let text = `
// Wo ein treues Herze
// In Liebe vergeht,
// Da welken die Lilien
// Auf jedem Beet;
// Da muß in die Wolken
// Der Vollmond gehn,
// Damit seine Tränen
// Die Menschen nicht sehn;
// Da halten die Englein
// Die Augen sich zu
// Und schluchzen und singen
// Die Seele zur Ruh.`

// const fadeInOut = true;
// const animationDuration = 8000
// const animationSpeed = 800
// const fontSize = 34
// const numKeyframes = 20

// ---------------------------------------------------------------
text = text.replace(/\n/i, '');
var p = React.PropTypes;

var Letter = (_temp = _class = function (_React$Component) {
  _inherits(Letter, _React$Component);

  function Letter() {
    _classCallCheck(this, Letter);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
      show: false,
      animate: true
    };
    _this.timeouts = [];
    return _this;
  }

  Letter.prototype.componentDidMount = function componentDidMount() {
    if (this.props.animate === 'in') {
      this._fadeIn();
    }
  };

  Letter.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.animate !== this.props.animate) {
      if (nextProps.animate === 'in') {
        this._fadeIn();
      } else {
        this._fadeOut();
      }
    }
  };

  Letter.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return nextState.fade !== this.state.fade || nextState.show !== this.state.show || nextProps.x !== this.props.x || nextProps.y !== this.props.y || nextProps.fontHeight !== this.props.fontHeight;
  };

  Letter.prototype.componentWillUnmount = function componentWillUnmount() {
    this.timeouts.forEach(function (timeout) {
      return clearTimeout(timeout);
    });
  };

  // render component and animate in

  Letter.prototype._fadeIn = function _fadeIn() {
    var _this2 = this;

    this.timeouts.push(setTimeout(function () {
      _this2.setState({
        fade: 'in',
        show: true
      });
      // Disable animation after fade in
      _this2.timeouts.push(setTimeout(function () {
        return _this2.setState({
          animate: false
        });
      }, _this2.animationSpeed));
    }, this.props.animationStart + Math.random() * this.props.animationSpeed));
  };

  // animate out then stop rendering

  Letter.prototype._fadeOut = function _fadeOut() {
    var _this3 = this;

    this.timeouts.push(setTimeout(function () {
      _this3.setState({
        fade: 'out',
        animate: true
      });
      _this3.timeouts.push(setTimeout(function () {
        _this3.setState({
          show: false
        });
      }, _this3.props.animationSpeed));
    }, this.props.animationStart + Math.random() * this.props.animationSpeed));
  };

  Letter.prototype.render = function render() {
    if (!this.state.show) {
      return null;
    }
    var keyframe = Math.floor(Math.random() * this.props.numKeyframes + 1);
    var easingFunction = 'cubic-bezier(' + (Math.random() * .8 + +.1) + ',0,' + (Math.random() * .5 + .25) + ',1)';
    var proportionalPosition = this.props.i / this.props.textLen;
    var transitionDelay = proportionalPosition / 2 + Math.random() * proportionalPosition;
    return React.createElement(
      'div', {
        className: 'letter',
        style: {
          fontSize: this.props.fontHeight,
          height: this.props.fontHeight,
          width: this.props.fontHeight / 2,
          left: this.props.x,
          top: 50,
          transition: '\n            top 1s ' + easingFunction + ' ' + transitionDelay + 's,\n            left 1s ' + easingFunction + ' ' + transitionDelay + 's,\n            font-size 1s ' + easingFunction + ' ' + transitionDelay + 's\n          ',
          animation: this.state.animate ? '\n              ' + ('fade-' + this.state.fade + '-' + keyframe) + '\n              ' + easingFunction + '\n              ' + this.props.animationSpeed + 'ms forwards\n            ' : null
        }
      },
      this.props.char
    );
  };

  return Letter;
}(React.Component), _class.propTypes = {
  x: p.number.isRequired,
  y: p.number.isRequired,
  i: p.number.isRequired,
  textLen: p.number.isRequired,
  char: p.string.isRequired,
  fontHeight: p.number.isRequired,
  numKeyframes: p.number.isRequired,
  animate: p.oneOf(['in', 'out']),
  animationSpeed: p.number.isRequired,
  animationStart: p.number.isRequired
}, _temp);
var RandomText = (_temp2 = _class2 = function (_React$Component2) {
  _inherits(RandomText, _React$Component2);

  function RandomText() {
    _classCallCheck(this, RandomText);

    var _this4 = _possibleConstructorReturn(this, _React$Component2.call(this));

    _this4.state = {
      numRows: null,
      chars: null,
      updated: false
    };
    return _this4;
  }

  RandomText.prototype.componentDidMount = function componentDidMount() {
    this.setState(this._mapCharPositions(this.props));
  };

  RandomText.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.fontHeight !== this.props.fontHeight || nextProps.width !== this.props.width) {
      this.setState(this._mapCharPositions(nextProps));
    }
  };

  RandomText.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.state.updated) {
      this.setState({
        updated: false
      });
      return true;
    }
    return nextProps.animate !== this.props.animate || this.state.chars === null;
  };

  // returns an array of chars w/ form [x, y, char]

  RandomText.prototype._mapCharPositions = function _mapCharPositions(props) {
    var fontWidth = props.fontHeight / 2;
    var charsPerRow = Math.floor(props.width / fontWidth);
    var emptySpaceInRow = props.width - charsPerRow * fontWidth;
    var margin = emptySpaceInRow / (charsPerRow + 1);
    var chars = [];
    var text = props.text.trim();
    var textLength = text.length;

    var firstLetterOfWord = true;
    for (var i = 0; i < textLength; i++) {
      var col = i % charsPerRow;

      // Don't push spaces into the array, and if there is a space at the
      // beginning of a line, remove it from the original text and put the next
      // character in its place
      if (text[i] === ' ') {
        firstLetterOfWord = true;
        if (col === 0) {
          text = text.slice(0, i) + text.slice(i + 1);
          i--;
          textLength--;
        }
      } else {
        // Handle text wrapping
        if (firstLetterOfWord) {
          var wordLength = 1;
          var wordCounter = 1;
          while (i + wordCounter < text.length && text[i + wordCounter] !== ' ') {
            wordLength++;
            wordCounter++;
          }
          firstLetterOfWord = false;

          var charsLeftInRow = charsPerRow - col;
          var indOfLastCharInRow = i + charsLeftInRow;
          // If the word is too long to fit on one line hyphenate it
          if (wordLength > charsPerRow) {
            text = text.slice(0, indOfLastCharInRow - 1) + '-' + text.slice(indOfLastCharInRow - 1);
            textLength++;
          }
          // Else insert spaces and adjust textLength to skip the word to the next line
          else if (wordLength > charsLeftInRow) {
            text = text.slice(0, i) + ' '.repeat(wordLength) + text.slice(i);
            textLength += wordLength;
          }
        }
        // Push the char at i into the return arr
        chars.push([col * fontWidth + margin * (col + 1), // x
          Math.floor(i / charsPerRow) * props.fontHeight, // y
          text[i]
        ]);
      }
    }
    var numRows = Math.ceil(textLength / charsPerRow);
    return {
      numRows: numRows,
      chars: chars,
      updated: true
    };
  };

  RandomText.prototype.render = function render() {
    var _this5 = this;

    if (this.state.chars == null) {
      return null;
    } else {
      return React.createElement(
        'div', {
          className: 'container' + ' ' + this.props.className,
          style: {
            height: this.state.numRows * this.props.fontHeight,
            width: this.props.width
          }
        },
        this.state.chars.map(function (char, i) {
          return React.createElement(Letter, {
            x: char[0],
            y: char[1],
            char: char[2],
            fontHeight: _this5.props.fontHeight,
            numKeyframes: numKeyframes,
            key: i,
            i: i,
            textLen: _this5.props.text.length,
            animate: _this5.props.animate,
            animationSpeed: _this5.props.animationSpeed,
            animationStart: (_this5.props.animationDuration - _this5.props.animationSpeed) / _this5.state.chars.length * i
          });
        })
      );
    }
  };

  return RandomText;
}(React.Component), _class2.propTypes = {
  text: p.string.isRequired,
  className: p.string,
  width: p.number.isRequired,
  // Sets font-size
  fontHeight: p.number.isRequired,
  // Duration of each letter's fade in animation
  animationSpeed: p.number.isRequired,
  // Total animation duration (not counting randomness factor)
  animationDuration: p.number.isRequired,
  animate: p.oneOf(['in', 'out']),
  homePage: p.bool
}, _temp2);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App() {
    _classCallCheck(this, App);

    var _this6 = _possibleConstructorReturn(this, _React$Component3.call(this));

    _this6.state = {
      animate: 'in',
      width: document.body.offsetWidth * .6
    };
    if (fadeInOut) {
      setInterval(function () {
        _this6.setState({
          animate: _this6.state.animate == 'in' ? 'out' : 'in'
        });
      }, animationDuration + 5000);
    }
    return _this6;
  }

  App.prototype.componentWillMount = function componentWillMount() {
    this._setupResizeListener();
  };

  App.prototype.render = function render() {
    return React.createElement(RandomText, {
      width: this.state.width,
      text: text,
      fontHeight: fontSize,
      animate: this.state.animate,
      animationDuration: animationDuration,
      animationSpeed: animationSpeed
    });
  };

  App.prototype._getWindowWidth = function _getWindowWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  };

  App.prototype._setupResizeListener = function _setupResizeListener() {
    // Create "window.throttledResize" event that listens to resize and throttles it to fire once per frame at most
    // https://developer.mozilla.org/en-US/docs/Web/Events/resize#requestAnimationFrame_customEvent
    var running = false;
    var throttleResize = function throttleResize() {
      if (!running) {
        running = true;
        requestAnimationFrame(function () {
          window.dispatchEvent(new CustomEvent('throttledResize'));
          running = false;
        });
      }
    };
    window.addEventListener('resize', throttleResize);
    window.addEventListener('throttledResize', this._handleResize.bind(this));
  };

  App.prototype._handleResize = function _handleResize() {
    var width = this._getWindowWidth();
    if (Math.abs(width * .6 - this.state.width) > 100) {
      this.setState({
        width: width * .6
      });
    }
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
