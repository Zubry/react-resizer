import React from 'react';

export default class Overlay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
        position: 'absolute',
        backgroundColor: `${this.props.color || 'blue'}`,
        opacity: `${this.props.opacity || '0.5'}`,
        maxWidth: '100%',
        width: this.props.direction === 'vertical' ? '100%' : `${this.props.width}px`,
        height: this.props.direction === 'vertical' ? `${this.props.width}px` : '100%',
      }}></div>
    );
  }
}
