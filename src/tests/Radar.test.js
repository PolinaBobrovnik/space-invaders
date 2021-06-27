const Radar = require('../entities/Radar');

const mockedImage = [
  ['-', 'o', '-'],
  ['o', '-', 'o'],
  ['-', 'o', '-'],
  ['o', '-', 'o'],
];

describe('class Radar', () => {
  it('method createFragment', () => {
    const radar = new Radar(mockedImage);
    const fragment = radar.createFragment(1, 1, 2, 2);
    expect(fragment.image).toEqual([
      ['-', 'o'],
      ['o', '-'],
    ]);
  });

  it('method createFragment with no params', () => {
    const radar = new Radar(mockedImage);
    const fragment = radar.createFragment();
    expect(fragment.image).toEqual(mockedImage);
  });
});
