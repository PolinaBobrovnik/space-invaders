const Image = require('./Image');

/**
 * Invader
 */
class Invader extends Image {
  /**
   *
   * @param {string | Array.<string[]>} image
   * @param {string} marker
   */
  constructor(image, marker) {
    super(image);
    this._marker = marker;
  }

  /**
   * @return {string}
   */
  get marker() {
    return this._marker;
  }
}

module.exports = Invader;
