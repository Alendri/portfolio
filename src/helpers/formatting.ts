export const digitGrouping = (n: number): string => {
  const parts = n.toString().split('.');
  const ints = parts[0].split('');
  const negative = n < 0 ? ints.splice(0, 1) : [''];

  for (let i = 1; i < Math.ceil(ints.length / 3); i++) {
    const idx = i * 3 + (1 * i - 1);
    if (idx < ints.length) {
      ints.splice(-idx, 0, ' ');
    }
  }

  const with_dec = ints.join('') + (parts.length > 1 ? '.' + parts[1] : '');
  return negative[0] + with_dec;
};

export const numberToRomanNumeral = (n: number): string => {
  if (typeof n !== 'number' || !isFinite(n)) {
    throw new Error('Invalid parameter, expected number');
  }
  const roman = [
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'IIX',
    'IX',
    'X',
    'XI',
    'XII',
  ];
  if (n < 1 || n > roman.length - 1) {
    throw new Error('Out of range value');
  }
  return roman[n];
};
