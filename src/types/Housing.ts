export const areas = ['sthlm', 'gbg', 'malmo', 'rest'] as const;
export type Area = (typeof areas)[number];

export type PermitsYear = Record<'year' | 'count' | 'sqm', number>;
export interface PermitsQuarter extends PermitsYear {
  id: string;
  quarter: 0 | 1 | 2 | 3;
}

export type Permits = Record<
  Area,
  {
    id: Area;
    label: string;
    count: number;
    sqm: number;
    years: PermitsYear[];
    quarters: PermitsQuarter[];
  }
>;

export interface SerializedPermits {
  columns: Record<'code' | 'text' | 'type', string>[];
  comments: unknown;
  data: {
    key: string[];
    values: string[];
  }[];
  metadata: unknown;
}
