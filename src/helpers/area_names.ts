import { Area } from '../types/Housing';

export const areaCodeToLabel = (area: Area, long?: boolean): string => {
  switch (area) {
    case 'gbg':
      return 'Göteborg';
    case 'malmo':
      return 'Malmö';
    case 'sthlm':
      return 'Stockholm';
    default:
      return long ? 'the rest of the country' : 'Rest of the country';
  }
};
