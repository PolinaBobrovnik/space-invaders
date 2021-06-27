const {POSITIVE_POINT} = require('../constants');

/**
 * Image
 */
class Image {
  /**
   *
   * @param {string} text
   * @return {Array.<string[]>}
   */
  static convertStringToMatrix(text) {
    return text.split('\n').map((row) => row.split(''));
  }

  /**
   *
   * @param {string | Array.<string[]>} image
   */
  constructor(image) {
    this.image = image;
  }

  /**
   * @param {string | Array.<string[]>} image
   */
  set image(image) {
    if (typeof image === 'string') {
      this._image = Image.convertStringToMatrix(image);
    } else {
      this._image = image;
    }
    this._height = this._image.length;
    this._width = this._image[0].length;
    this._amountOfPositivePoints = [
      ...this.toString().matchAll(POSITIVE_POINT),
    ].length;
  }

  /**
   * @return {Image}
   */
  get image() {
    return this._image;
  }

  /**
   * @return {number}
   */
  get height() {
    return this._height;
  }

  /**
   * @return {number}
   */
  get width() {
    return this._width;
  }

  /**
   * @return {number}
   */
  get amountOfPositivePoints() {
    return this._amountOfPositivePoints;
  }

  /**
   * Convert image matrix to string
   * @return {string}
   */
  toString() {
    return this._image.map((raw) => raw.join('')).join('\n');
  }
}

module.exports = Image;
