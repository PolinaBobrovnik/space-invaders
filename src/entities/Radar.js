const Image = require('./Image');

/**
 * Radar
 */
class Radar extends Image {
  /**
   *
   * @param {string | Array.<string[]>} image
   */
  constructor(image) {
    super(image);
  }

  /**
   * Copy piece of radar image
   * @param {number} x x-coordinate of starting point
   * @param {number} y y-coordinate of starting point
   * @param {number} w width of fragment
   * @param {number} h height of fragment
   * @return {Image}
   */
  createFragment(x = 0, y = 0, w = this.width, h = this.height) {
    const fragment = this._image
        .slice(y, y + h)
        .map((row) => row.slice(x, x + w));
    return new Image(fragment);
  }

  /**
   * replacing existing fragment of radar image
   * @param {*} x x-coordinate of starting point
   * @param {*} y y-coordinate of starting point
   * @param {*} fragment fragment to add to radar image
   */
  replaceFragment(x, y, fragment) {
    const {height, width, image} = fragment;
    this._image
        .slice(y, y + height)
        .forEach((row, index) => row.splice(x, width, ...image[index]));
  }
}

module.exports = Radar;
