# Installation

If you just want the component, you can install with NPM:

```shell
$ npm install --save @zubry/react-resizer
```

If you want everything, you'll need to use git clone, then run

```shell
$ npm install
```

# Demo

To run the demo, download the project from GitHub, run `npm install`, then run `npm run example`. The demo will then be at http://localhost:8080.

# Using

The component itself is pretty easy to use, just wrap it around the image you want to conceal:

```html
  <div>
    <Resizer direction="vertical">
      <img src="http://lorempixel.com/640/480/people"/>
    </Resizer>
    <Resizer direction="horizontal" overlayColor="#698DA5">
      <img src="http://lorempixel.com/640/480/people"/>
    </Resizer>
  </div>
```

## Options

You can pass a number of options to the component

**direction**: Vertical or horizontal. Defaults to horizontal.

**overlayColor**: The color of the overlay, follows the same rules as CSS background-color. Defaults to blue.

**overlayOpacity**: The opacity of the overlay, a number between 0 and 1. Defaults to 0.5.

**sliderWidth**: The width of the slider bar, defaults to 0.5 rem.

**sliderColor**: The color of the slider bar, defaults to red.
