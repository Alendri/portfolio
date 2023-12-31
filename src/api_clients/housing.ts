import axios from 'axios';
import {
  Area,
  Permits,
  PermitsYear,
  SerializedPermits,
} from '../types/Housing';

const area_by_code: Record<string, Area> = {
  '0010': 'sthlm',
  '0020': 'gbg',
  '0030': 'malmo',
  '0060': 'rest',
};

const getQuarter = (q: string) => {
  switch (q) {
    case '2':
      return 1;
    case '3':
      return 2;
    case '4':
      return 3;
    default:
      return 0;
  }
};
interface AreaPermitsWithYearKeys
  extends Omit<Permits['rest'], 'years' | 'id' | 'label'> {
  years: Record<number, PermitsYear>;
}

export const deserialize = (raw_permits: SerializedPermits): Permits => {
  const permits = raw_permits.data.reduce<
    Record<Area, AreaPermitsWithYearKeys>
  >(
    (acc, { key, values }) => {
      const [area_code, , year_and_quarter] = key;
      const year_q_split = year_and_quarter.split('K');
      const [count_str, sqm_str] = values;

      const year = parseInt(year_q_split[0], 10);
      const quarter = getQuarter(year_q_split[1]);
      const count = parseInt(count_str, 10);
      const sqm = parseInt(sqm_str, 10);
      const area = area_by_code[area_code];

      if (!acc[area].years[year]) {
        acc[area].years[year] = {
          count: 0,
          year,
          sqm: 0,
        };
      }
      const year_sum = acc[area].years[year];
      year_sum.count += count;
      year_sum.sqm += sqm;

      acc[area].sqm += sqm;
      acc[area].count += count;

      acc[area].quarters.push({
        id: year_and_quarter,
        year,
        quarter,
        count,
        sqm,
      });

      return acc;
    },
    {
      gbg: {
        count: 0,
        sqm: 0,
        years: {},
        quarters: [],
      },
      sthlm: {
        count: 0,
        sqm: 0,
        years: {},
        quarters: [],
      },
      malmo: {
        count: 0,
        sqm: 0,
        years: {},
        quarters: [],
      },
      rest: {
        count: 0,
        sqm: 0,
        years: {},
        quarters: [],
      },
    },
  );

  return Object.entries(permits).reduce<Permits>(
    (acc, [area, data]) => {
      acc[area as Area] = {
        ...acc[area as Area],
        ...data,
        years: Object.values(data.years).sort((a, b) => a.year - b.year),
      };
      return acc;
    },
    {
      gbg: {
        id: 'gbg',
        label: 'Göteborg',
        count: 0,
        sqm: 0,
        years: [],
        quarters: [],
      },
      sthlm: {
        id: 'sthlm',
        label: 'Stockholm',
        count: 0,
        sqm: 0,
        years: [],
        quarters: [],
      },
      malmo: {
        id: 'malmo',
        label: 'Malmö',
        count: 0,
        sqm: 0,
        years: [],
        quarters: [],
      },
      rest: {
        id: 'rest',
        label: 'Rest of the country',
        count: 0,
        sqm: 0,
        years: [],
        quarters: [],
      },
    },
  );
};

export const fetchPermits = () => {
  return axios
    .get<SerializedPermits>('/permits')
    .then(({ data, status }): Permits => {
      if (status !== 200) {
        throw new Error(status.toString());
      }
      return deserialize(data);
    });
};
