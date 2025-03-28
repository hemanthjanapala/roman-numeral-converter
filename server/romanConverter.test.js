const convertToRoman = require('./romanConverter');

describe('convertToRoman()', () => {
  test('should convert 1 to I', () => {
    expect(convertToRoman(1)).toBe('I');
  });

  test('should convert 4 to IV', () => {
    expect(convertToRoman(4)).toBe('IV');
  });

  test('should convert 9 to IX', () => {
    expect(convertToRoman(9)).toBe('IX');
  });

  test('should convert 58 to LVIII', () => {
    expect(convertToRoman(58)).toBe('LVIII');
  });

  test('should convert 1994 to MCMXCIV', () => {
    expect(convertToRoman(1994)).toBe('MCMXCIV');
  });

  test('should convert 3999 to MMMCMXCIX', () => {
    expect(convertToRoman(3999)).toBe('MMMCMXCIX');
  });
});
