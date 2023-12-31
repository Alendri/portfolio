import React, { useEffect, useMemo } from 'react';
import StackedBarChart, {
  StackedSeries,
} from '../StackedBarChart/StackedBarChart';
import { useStore } from '../../store';
import { digitGrouping } from '../../helpers/formatting';
import { Area } from '../../types/Housing';
import { areaCodeToLabel } from '../../helpers/area_names';

interface AreaDetailsProps {
  area?: Area;
}

const AreaDetails: React.FC<AreaDetailsProps> = ({ area }) => {
  const area_code = area || 'rest';
  const data = useStore((state) => state.permits?.[area_code]);
  const getPermits = useStore((state) => state.getPermits);

  useEffect(() => {
    getPermits();
  }, [getPermits]);

  const quarters = useMemo(() => {
    return data?.quarters.reduce<{
      sqm: StackedSeries[];
      count: StackedSeries[];
    }>(
      (acc, q) => {
        if (!acc.sqm[q.quarter]) {
          acc.sqm[q.quarter] = {
            data: [{ label: 'Q' + (q.quarter + 1), value: 0 }],
            id: q.quarter.toString(),
            sum: 0,
            unit: 'm²',
          };
          acc.count[q.quarter] = {
            data: [{ label: 'Q' + (q.quarter + 1), value: 0 }],
            id: q.quarter.toString(),
            sum: 0,
          };
        }

        const sqm = acc.sqm[q.quarter];
        const count = acc.count[q.quarter];

        sqm.data[0].value += q.sqm;
        sqm.sum += q.sqm;
        count.data[0].value += q.count;
        count.sum += q.count;

        return acc;
      },
      { sqm: [], count: [] },
    );
  }, [data?.quarters]);
  const years = useMemo<StackedSeries[] | undefined>(
    () =>
      data?.years.slice(-14).map<StackedSeries>((y) => ({
        data: [{ label: y.year.toString(), value: y.count }],
        id: y.year.toString(),
        sum: y.count,
      })),
    [data?.years],
  );

  const most_permits = useMemo(
    () =>
      quarters?.count.reduce(
        (best, curr, i, arr) =>
          arr[best].data[0].value > curr.data[0].value ? best : i,
        0,
      ) || 0,
    [quarters],
  );

  if (!quarters || !years) {
    return null;
  }

  return (
    <div className="flex w-full flex-col-reverse gap-3 lg:flex-row">
      <div className="flex grow basis-2/3 flex-col">
        <p>Permits issued per quarter</p>
        <StackedBarChart
          series={quarters.count}
          className="mb-6 h-[150px] w-full lg:h-[200px]"
          labels
        />
        <p>Number of building permits issued over the past 14 years.</p>
        <StackedBarChart
          series={years}
          className="h-[150px] w-full gap-1 lg:h-[300px]"
          labels
        />
      </div>

      <div className="grow basis-1/3">
        <h1
          className={`mb-10 max-w-2xl text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl`}
        >
          {areaCodeToLabel(area_code)}
        </h1>
        <p>
          {`In ${areaCodeToLabel(
            area_code,
            true,
          )} most building permits were issued in
          Q${most_permits + 1}. The same quarter saw permits issued for
          ${digitGrouping(quarters.sqm[most_permits].data[0].value)}m².`}
        </p>
      </div>
    </div>
  );
};

export default AreaDetails;
