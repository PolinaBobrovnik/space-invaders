/* eslint-disable no-unused-vars */
const Image = require('./Image');
const Invader = require('./Invader');
const Radar = require('./Radar');
/* eslint-enable no-unused-vars */
const {FALSE_NEGATIVE_NOISE, POSITIVE_POINT} = require('../constants');

/**
 * Scanner
 */
class Scanner {
  /**
   *
   * @param {Image} fragment
   * @param {Invader} invader
   * @return {Image} marked fragment
   */
  static markInvader(fragment, invader) {
    const {image: fragmentImage} = fragment;
    const {image: invaderImage, marker, amountOfPositivePoints} = invader;
    const maxErrors = amountOfPositivePoints * FALSE_NEGATIVE_NOISE;
    let errors = 0;
    const markedFragment = fragmentImage.map((row, rowI) =>
      row.map((el, elI) => {
        if (
          invaderImage[rowI][elI] === POSITIVE_POINT &&
          el !== invaderImage[rowI][elI]
        ) {
          errors += 1;
          return marker;
        }

        if (invaderImage[rowI][elI] === POSITIVE_POINT) {
          return marker;
        }
        return el;
      }),
    );

    if (errors <= maxErrors) {
      fragment.image = markedFragment;
    }

    return fragment;
  }

  /**
   *
   * @param {Radar} radar
   */
  constructor(radar) {
    this._radar = radar;
  }

  /**
   * @return {string}
   */
  getRadarImage() {
    return this._radar.toString();
  }

  /**
   * searching and marking invader on radar image
   * @param {Invader} invader
   */
  _detectInvader(invader) {
    const lastY = this._radar.height - invader.height;
    const lastX = this._radar.width - invader.width;
    for (let rowI = 0; rowI <= lastY; rowI++) {
      for (let cellI = 0; cellI <= lastX; cellI++) {
        const radarFragment = this._radar.createFragment(
            cellI,
            rowI,
            invader.width,
            invader.height,
        );
        const markedFragment = Scanner.markInvader(radarFragment, invader);
        this._radar.replaceFragment(cellI, rowI, markedFragment);
      }
    }
  }

  /**
   * searching and marking all invaders on radar image
   * @param {Invader[]} invaders
   * @return {Scanner}
   */
  scan(invaders) {
    invaders.forEach((invader) => {
      if (!invader.width || !invader.height) {
        return;
      }
      this._detectInvader(invader);
    });
    return this;
  }
}

module.exports = Scanner;
