# jquery-sticktotop.js Version 0.1.1

A JQuery plugin to make your elements stick to the top when scrolling a webpage.
It takes the initial position of any element and gives the element a fixed 
position when scrolling past it, ensuring the element always stays in view.
Perfect for sidebars.

## Usage

```javascript
$('aside').stickToTop(options);
```
## Options

scrollParent: 
  Element in which scrolling is monitored.
  default: DOM window

offset:
  Scroll offset to apply fixed positioning (sticking).
  Basically the gap left at all times between the scrollParent 
  and the target element.
  default: {top: 0, left: 0}

bottomBound:
  Scroll value relative to the bottom which to stop the element
  from sticking (absolute positioning).
  Useful if you have a large footer and dont want your sidebar 
  crashing into it.
  default: 0

**Note**: bottomBound now includes the height of the sticky element in the calculation
to make bottomBound more intuitive (issue #1)

onStick: 
  Callback for when the element becomes sticky.
  default: null

onDetach:
  Callback for when the element becomes detached. Also fires when 
  the bottomBound is reached.
  default: null

## unstickToTop

You can detach stickToTop from your element by using the unstickToTop() function

```javascript
var $aside = $('aside');

// Attach
$aside.stickToTop();

...
// Detach
$aside.get(0).unstickToTop();
```
## Examples

### Sidebar

The "normal" use-case for this plugin demostrated applying the plugin to a side and menu bar.

### Tetris Hearts

Using this plugin to position many elements (in this case a canvas with a tetris block painted
inside of it) and stick them to their appropriate places while scrolling to form a heart.

Visit [this blog post](http://mopo.ws/wZz1Xb) for a full explanation

## License

See the file [LICENSE](https://github.com/sdbondi/JQuery-StickToTop/blob/master/LICENSE.txt)
