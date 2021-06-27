const Image = require('../entities/Image');

const mockedImage = [
  ['-', 'o', '-'],
  ['o', '-', 'o'],
  ['-', 'o', '-'],
  ['o', '-', 'o'],
];

const mockedString = `-o-\no-o\n-o-\no-o`;

describe('class Image', () => {
  it('constructor with matrix', () => {
    const image = new Image(mockedImage);
    expect(image.image).toEqual(mockedImage);
    expect(image.height).toBe(4);
    expect(image.width).toBe(3);
    expect(image.amountOfPositivePoints).toBe(6);
  });

  it('constructor with string', () => {
    const image = new Image(mockedString);
    expect(image.image).toEqual(mockedImage);
    expect(image.height).toBe(4);
    expect(image.width).toBe(3);
    expect(image.amountOfPositivePoints).toBe(6);
  });

  it('method toString', () => {
    const image = new Image(mockedImage);
    expect(image.toString()).toBe(mockedString);
  });
});
