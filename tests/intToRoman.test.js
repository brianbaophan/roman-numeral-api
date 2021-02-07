const { intToRoman } = require('../src/intToRoman');

describe('intToRoman', () => {
  const testRomanNumerals = new Map([
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [7, 'VII'],
    [8, 'VIII'],
    [9, 'IX'],
    [10, 'X'],
    [14, 'XIV'],
    [19, 'XIX'],
    [20, 'XX'],
    [24, 'XXIV'],
    [40, 'XL'],
    [44, 'XLIV'],
    [49, 'XLIX'],
    [50, 'L'],
    [90, 'XC'],
    [99, 'XCIX'],
    [100, 'C'],
    [104, 'CIV'],
    [144, 'CXLIV'],
    [150, 'CL'],
    [200, 'CC'],
    [299, 'CCXCIX'],
    [444, 'CDXLIV'],
    [499, 'CDXCIX'],
    [500, 'D'],
    [900, 'CM'],
    [999, 'CMXCIX'],
    [1000, 'M'],
    [1500, 'MD'],
    [2999, 'MMCMXCIX'],
    [3999, 'MMMCMXCIX'],
  ]);
  for (let num of testRomanNumerals.keys()) {
    test('should be a string given positive integer as parameter', () => {
      expect(intToRoman(num)).toBe(testRomanNumerals.get(num));
    });
  }

  test('should throw error given a negative integer as parameter', () => {
    expect(() => intToRoman(-1)).toThrow(
      `your query value (value: -1) is negative, please enter a positive integer value as a valid query value`
    );
  });

  test('should throw error given zero as parameter', () => {
    expect(() => intToRoman(0)).toThrow(
      `your query value is zero, please enter a positive integer value as a valid query value`
    );
  });

  test('should throw error given a positive decimal as parameter', () => {
    expect(() => intToRoman(1.1)).toThrow(
      `your query value (value: 1.1) is not a positive integer, please enter a positive integer value as a valid query value (e.g. 1, 5, 10)`
    );
  });

  test('should throw error given invalid type boolean as parameter', () => {
    expect(() => intToRoman(true)).toThrow(
      `your query value (type: boolean) is invalid, please enter a positive integer value as a valid query value`
    );
  });

  test('should throw error given invalid type string as parameter', () => {
    expect(() => intToRoman('SOME_STRING')).toThrow(
      `your query value (type: string) is invalid, please enter a positive integer value as a valid query value`
    );
  });

  test('should throw error given null as parameter', () => {
    expect(() => intToRoman(null)).toThrow(
      `your query value is null, please enter a positive integer value as a valid query value`
    );
  });

  test('should throw error given undefined as parameter', () => {
    expect(() => intToRoman(undefined)).toThrow(
      `your query value is undefined, please enter a positive integer value as a valid query value`
    );
  });
});
