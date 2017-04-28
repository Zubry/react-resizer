'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overlay = function (_React$Component) {
  _inherits(Overlay, _React$Component);

  function Overlay(props) {
    _classCallCheck(this, Overlay);

    return _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this, props));
  }

  _createClass(Overlay, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { style: {
          position: 'absolute',
          backgroundColor: '' + (this.props.color || 'blue'),
          opacity: '' + (this.props.opacity || '0.5'),
          maxWidth: '100%',
          width: this.props.direction === 'vertical' ? '100%' : this.props.width + 'px',
          height: this.props.direction === 'vertical' ? this.props.width + 'px' : '100%'
        } });
    }
  }]);

  return Overlay;
}(_react2.default.Component);

exports.default = Overlay;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.state = {
      moving: false
    };

    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    _this.handleMouseMove = _this.handleMouseMove.bind(_this);

    window.addEventListener('mouseup', _this.handleMouseUp);
    window.addEventListener('mousemove', _this.handleMouseMove);
    return _this;
  }

  _createClass(Slider, [{
    key: 'handleMouseDown',
    value: function handleMouseDown(e) {
      e.preventDefault();

      this.setState({
        moving: true
      });
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() {
      this.setState({
        moving: false
      });
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(e) {
      e.preventDefault();

      if (!this.state.moving) {
        return false;
      }

      this.props.onSlide({
        x: e.clientX,
        y: e.clientY
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { style: {
          backgroundColor: '' + (this.props.color || 'red'),
          position: 'absolute',
          maxWidth: '100%',
          width: this.props.direction === 'vertical' ? '100%' : '' + (this.props.width || '0.5rem'),
          height: this.props.direction === 'vertical' ? '' + (this.props.width || '0.5rem') : '100%',
          left: this.props.direction === 'vertical' ? 0 : this.props.position + 'px',
          top: this.props.direction === 'vertical' ? this.props.position + 'px' : 0,
          cursor: this.props.direction === 'vertical' ? 'row-resize' : 'col-resize'
        },

        onMouseDown: this.handleMouseDown
      });
    }
  }]);

  return Slider;
}(_react2.default.Component);

exports.default = Slider;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Resizer = function (_React$Component) {
  _inherits(Resizer, _React$Component);

  function Resizer(props) {
    _classCallCheck(this, Resizer);

    var _this = _possibleConstructorReturn(this, (Resizer.__proto__ || Object.getPrototypeOf(Resizer)).call(this, props));

    _this.state = {
      width: 0
    };

    _this.onSlide = _this.onSlide.bind(_this);
    return _this;
  }

  _createClass(Resizer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // In later versions, we could attach an onload listener to the child image, and set it to half width
      // But 0 is also a reasonable default
      this.setState({
        width: 0
      });
    }
  }, {
    key: 'onSlide',
    value: function onSlide(next) {
      if (this.props.direction === 'vertical') {
        var _refs$box$getBounding = this.refs.box.getBoundingClientRect(),
            top = _refs$box$getBounding.top;

        var height = this.refs.box.clientHeight;

        if (next.y > top + height || next.y < top) {
          return false;
        }

        this.setState({
          width: next.y - top
        });
      } else {
        var _refs$box$getBounding2 = this.refs.box.getBoundingClientRect(),
            left = _refs$box$getBounding2.left;

        var width = this.refs.box.clientWidth;

        if (next.x > left + width || next.x < left) {
          return false;
        }

        this.setState({
          width: next.x - left
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { position: 'relative', display: 'inline-block' }, ref: 'box' },
        _react2.default.createElement(Overlay, {
          width: this.state.width,
          color: this.props.overlayColor,
          opacity: this.props.overlayOpacity,
          direction: this.props.direction
        }),
        _react2.default.createElement(Slider, {
          position: this.state.width,
          onSlide: this.onSlide,
          width: this.props.sliderWidth,
          color: this.props.sliderColor,
          direction: this.props.direction
        }),
        this.props.children
      );
    }
  }]);

  return Resizer;
}(_react2.default.Component);

exports.default = Resizer;
