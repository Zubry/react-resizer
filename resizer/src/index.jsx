import React from 'react';

export default class Resizer extends React.Component {
  componentDidMount() {
    console.log(this.props.children);
  }

  render() {
    return (
     <div style={{textAlign: 'center'}}>
        { this.props.children }
      </div>);
  }
}
