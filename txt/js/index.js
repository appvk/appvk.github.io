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

var text = '\n0010010001111010110010110001011100011000010100000000011000011100010100010000101000110000001010111000101100110000010011111011100011111111101001101000110110110101011100000011100011101101100010100011110001010000101010010001011001100110100101011100001111101111000101110100010111011010001100101100010110110111001010010001001101011111001111010100110101101000110110010011000100100010111011010101000111011110100011111011010010110101011111010011101000111001111100010000100000101110011111100000110011011101111000001110001111110101001010110010011010001010101111000011110011010010011110000110100000010100011001000001011101001001100001110111101011001111110010111011111110010011100010000011101110011111110110011111101111011000010001001001001010000001101110111111101011010001110011011010010110010000010110111101100011111101010001011001100101101001111111100010011001111110110110101111001110001110100001001000110110110101110111010101011010111100111011001000110101100001010111101010001000001001100111111010101000110001011011110010110100011000101101001000011101000000100001001111101110110001110001111110111000100101101101000110001011111101110100000101010001100101010000001001001011110110101110011010101111001011010010001100100011011110101110101001101000101110001110101101011110010100111111000010011110101101011110000011001101100000001110110100010010000010111000000111010000000011011010000010011101010000110111100000101011010110001000100010101010011111010111011101010001011110001100001100011000110110110101111000000000110101100010000011101111100011111100001001111101010110000111000100101110000010110010110000001010010110110001101100001011001111000011101100011110000100000001001000111111110110110110011100010010011111110101000000010101000001110101001101010110110010110101011011101001010111000110010010010011010111010101010001011011101100001110111000101001010011010111110011000100011000100010010101100100000111101110111011011001101001000111101001001011101011110011010101011111011100110101110000010001111111000001110101001101001101100001001110110101101001110000101010001110001000100110001101110010111111111011010111110100110111110111001100001011011001101000010000010010000100001010101101101000001001100000101010011100100100111001000010111001010110111000100110111001110010001010001111100101100000011011100101000000111000011001110111110101110110000111111010111110111011110100010111001011111010011010100010010110001111011001000001010110011010100011111010101010101110110001011101011010100101010101100100110101101100111001101010010001100001000101010101111100100101111000101001101101101100000011000111001010111110001101100100111010001000000101000101001100100100111111110000110110001001010001000000100000001110000101111110001000011000001010001101101111000100100111011111000001111000000110101100111100110011010101101001100100010111111100111000001000011101011011010111000111010000101001110001111001101100010110101000000111001100011000010000100011100100011010010101011011011010011110000111101001110101010111001000100101000110000010101110010101111110010001111000010110011111110010011101110111111100000010100111000110000111001110110010011010001001001100001000011110001000101100100100010011101101111100011110101011100110010011111010010110100001000111000001100100010010101101101110011001101000011110011000000100010000011100011011101011101010110000010011111111000000101010000011101001111101100000011100111100000011101101001111000001011100001101000100110001011000101101111010010010110100001100000110000011111110010100011010101011110110001010100010011110000000001100101000001001100101001111000011100111000100111001101101111010011000000110010110110001101100000010101101100001100010110100100100100111100011000100000111110110100101100010101000101100100000101000110100111110111001101111101010011100000100011000010101011110101100110000110000011000110010000100110011011000000011000101110101011100111111000011110110101101000001001011110110000001110010111101001110111011101010111100010000001001100100100010100100111000010011100011001000010101001110001000001111010100111101110011101101110011001111110100100001100100010000110111101110010110011001010111101000101000011000101000011101101101110001110110001010001110011100000000110110011111011001011000110110000110110001100111110011111110010010011110000101100101111110010110110100100011011001000010001110\n?' ;

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
