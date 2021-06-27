const fs = require('fs');
const util = require('util');
const Radar = require('./entities/Radar');
const Invader = require('./entities/Invader');
const Scanner = require('./entities/Scanner');
const {MARKERS} = require('./constants');
const readFile = util.promisify(fs.readFile);

Promise.all([
  readFile('src/assets/radar.txt', 'utf8'),
  readFile('src/assets/invader-1.txt', 'utf8'),
  readFile('src/assets/invader-2.txt', 'utf8'),
])
    .then(([radarStr, ...invadersStr]) => {
      const radar = new Radar(radarStr);
      const invaders = invadersStr.map(
          (inv, i) => new Invader(inv, MARKERS[i]),
      );
      const scanner = new Scanner(radar);
      const result = scanner.scan(invaders).getRadarImage();
      console.log(result);
    })
    .catch((err) => {
      console.log('Error', err);
    });
