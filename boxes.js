// boxes.js - defines reusable box configurations

const boxes = [];

/**
 * Creates a box element with the provided configuration.
 * @param {Object} options - configuration for the box.
 * @param {number} [options.offset=0] - offset applied to width and height.
 * @param {number} [options.padding=0] - padding inside the box.
 * @param {string} [options.background='lightgray'] - background color of the box.
 * @param {number} [options.top=0] - distance from the top edge.
 * @param {number} [options.right=0] - distance from the right edge.
 * @param {number} [options.bottom=0] - distance from the bottom edge.
 * @param {number} [options.left=0] - distance from the left edge.
 * @returns {HTMLElement} The created box element.
 */
export function createBox({
  offset = 0,
  padding = 0,
  background = 'lightgray',
  top = 10,
  right = 10,
  bottom = 10,
  left = 10,
} = {}) {
  const element = document.createElement('div');

  element.style.position = 'absolute';
  element.style.top = `${top}px`;
  element.style.left = `${left}px`;
  element.style.padding = `${padding}px`;
  element.style.background = background;

  function resize() {
    element.style.width = `${window.innerWidth + offset - left - right}px`;
    element.style.height = `${window.innerHeight + offset - top - bottom}px`;
  }

  resize();
  window.addEventListener('resize', resize);

  boxes.push(element);
  return element;
}

/**
 * Initializes example boxes.
 * Creates a box that occupies the full screen.
 */
export function initBoxes() {
  const fullScreen = createBox({ offset: 0, padding: 0, background: 'rgba(255,0,0,0.3)' });
  document.body.appendChild(fullScreen);
}

export { boxes };
