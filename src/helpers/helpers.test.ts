import { describe, expect, test } from 'vitest';
import { digitGrouping, numberToRomanNumeral } from './formatting';

describe('Formatting tests', () => {
  test('Romanizing 0 should error', () => {
    expect(() => numberToRomanNumeral(0)).toThrowError('Out of range value');
  });
  test('Romanizing 1 should return I', () => {
    expect(numberToRomanNumeral(1)).toBe('I');
  });
  test('Romanizing string should error', () => {
    expect(() => numberToRomanNumeral('1' as unknown as number)).toThrowError(
      'Invalid parameter',
    );
  });

  test('Digit grouping integer with 4 digits', () => {
    expect(digitGrouping(1234)).toBe('1 234');
  });
  test('Digit grouping negative integer with 4 digits', () => {
    expect(digitGrouping(-1234)).toBe('-1 234');
  });
  test('Digit grouping integer with 3 digits', () => {
    expect(digitGrouping(234)).toBe('234');
  });
  test('Digit grouping integer with 6 digits', () => {
    expect(digitGrouping(123456)).toBe('123 456');
  });
  test('Digit grouping integer with 7 digits', () => {
    expect(digitGrouping(1234567)).toBe('1 234 567');
  });
  test('Digit grouping decimal number with 7 digits and 2 decimals', () => {
    expect(digitGrouping(1234567.55)).toBe('1 234 567.55');
  });
  test('Digit grouping negative decimal number with 7 digits and 2 decimals', () => {
    expect(digitGrouping(-1234567.55)).toBe('-1 234 567.55');
  });
});
