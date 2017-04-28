import React from 'react';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moving: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);

    window.addEventListener('mouseup', this.handleMouseUp);
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseDown(e) {
    e.preventDefault();

    this.setState({
      moving: true
    })
  }

  handleMouseUp() {
    this.setState({
      moving: false
    })
  }

  handleMouseMove(e) {
    e.preventDefault();

    if (!this.state.moving) {
      return false;
    }

    this.props.onSlide({
      x: e.clientX,
      y: e.clientY
    })
  }

  render() {
    return (
      <div style={{
        backgroundColor: `${this.props.color || 'red'}`,
        position: 'absolute',
        maxWidth: '100%',
        width: this.props.direction === 'vertical' ? '100%' : `${this.props.width || '0.5rem'}`,
        height: this.props.direction === 'vertical' ? `${this.props.width || '0.5rem'}` : '100%',
        left: this.props.direction === 'vertical' ? 0 : `${this.props.position}px`,
        top: this.props.direction === 'vertical' ? `${this.props.position}px` : 0,
        cursor: this.props.direction === 'vertical' ? 'row-resize': 'col-resize'
      }}

      onMouseDown={this.handleMouseDown}
      ></div>
    );
  }
}
