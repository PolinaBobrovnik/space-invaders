const Scanner = require('../entities/Scanner');
const Radar = require('../entities/Radar');
const Invader = require('../entities/Invader');
const {MARKERS} = require('../constants');
const {mockedRadar, mockedInvaders, mockedResult} = require('./mockedData');

describe('class Scanner', () => {
  it('method scan', () => {
    const radar = new Radar(mockedRadar);
    const invaders = mockedInvaders.map(
        (inv, i) => new Invader(inv, MARKERS[i]),
    );
    const scanner = new Scanner(radar);
    const result = scanner.scan(invaders).getRadarImage();
    expect(result).toEqual(mockedResult);
  });
});
