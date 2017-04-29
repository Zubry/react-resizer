import React from 'react';

// Because we're in the same project as the component,
// this is how we'll reference it
// If you're installing from npm, it'll look like
// import Resizer from 'resizer';
import Resizer from './../../';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Resizer direction="vertical">
          <img src="http://lorempixel.com/640/480/people"/>
        </Resizer>
        <Resizer direction="horizontal" overlayColor="#698DA5">
          <img src="http://lorempixel.com/640/480/people"/>
        </Resizer>
      </div>
    );
  }
}
