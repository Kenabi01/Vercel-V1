// boxes.js - defines reusable box configurations

const boxes = [];

/**
 * Creates a box element with the provided configuration.
 * @param {Object} options - configuration for the box.
 * @param {number} [options.offset=0] - uniform offset applied on all sides.
 * @param {number} [options.padding=0] - padding inside the box.
 * @param {string} [options.background='lightgray'] - background color of the box.
 * @returns {HTMLElement} The created box element.
 */
export function createBox({ offset = 0, padding = 0, background = 'lightgray' } = {}) {
  const element = document.createElement('div');

  element.style.position = 'absolute';
  element.style.padding = `${padding}px`;
  element.style.background = background;

  function resize() {
    element.style.top = `${-offset}px`;
    element.style.left = `${-offset}px`;
    element.style.width = `${window.innerWidth + offset * 2}px`;
    element.style.height = `${window.innerHeight + offset * 2}px`;
  }

  resize();
  window.addEventListener('resize', resize);

  boxes.push(element);
  return element;
}

/**
 * Initializes example boxes.
 * Creates a box that occupies the full screen with an offset of -50.
 */
export function initBoxes() {
  const fullScreen = createBox({ offset: -50, padding: 10, background: 'rgba(255,0,0,0.3)' });
  document.body.appendChild(fullScreen);
}

export { boxes };
