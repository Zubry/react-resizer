import React from 'react';

export default class Resizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0
    };

    this.onSlide = this.onSlide.bind(this);
  }

  componentDidMount() {
    // In later versions, we could attach an onload listener to the child image, and set it to half width
    // But 0 is also a reasonable default
    this.setState({
      width: 0
    });
  }

  onSlide(next) {
    if (this.props.direction === 'vertical') {
      const { top } = this.refs.box.getBoundingClientRect();
      const height = this.refs.box.clientHeight;

      if (next.y > top + height || next.y < top) {
        return false;
      }

      this.setState({
        width: next.y - top
      });
    } else {
      const { left } = this.refs.box.getBoundingClientRect();
      const width = this.refs.box.clientWidth;

      if (next.x > left + width || next.x < left) {
        return false;
      }

      this.setState({
        width: next.x - left
      });
    }
  }

  render() {
    return (
     <div style={{ position: 'relative', display: 'inline-block' }} ref="box">
        <Overlay
          width={ this.state.width }
          color={ this.props.overlayColor }
          opacity={ this.props.overlayOpacity }
          direction={ this.props.direction }
        />
        <Slider
         position={ this.state.width }
         onSlide={ this.onSlide }
         width={ this.props.sliderWidth }
         color={ this.props.sliderColor }
         direction={ this.props.direction }
        />
        { this.props.children }
      </div>);
  }
}
