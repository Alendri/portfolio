import React, { useMemo } from 'react';
import { digitGrouping } from '../../helpers/formatting';

export interface StackedSeries {
  id: string;
  data: {
    label: string;
    value: number;
  }[];
  sum: number;
  unit?: string;
}

interface StackedBarChartProps {
  series: StackedSeries[];
  className?: string;
  /** Show labels. */
  labels: boolean;
  unit?: string;
  axis?: boolean;
}

const StackedBarChart: React.FC<StackedBarChartProps> = ({
  series,
  className,
  labels,
  axis,
  unit,
}) => {
  unit = unit || '';
  const max = useMemo(() => {
    return Math.max(...series.map((s) => s.sum));
  }, [series]);

  return (
    <div
      className={`flex gap-4 rounded bg-primary-50/20 p-2 text-xs text-white
      [&>div:nth-child(1)>div:nth-child(1)]:bg-teal-500
      [&>div:nth-child(1)>div:nth-child(2)]:bg-teal-600
      [&>div:nth-child(1)>div:nth-child(3)]:bg-teal-800
      [&>div:nth-child(1)>div:nth-child(4)]:bg-teal-950
      [&>div:nth-child(10)>div:nth-child(1)]:bg-orange-500
      [&>div:nth-child(10)>div:nth-child(2)]:bg-orange-300
      [&>div:nth-child(10)>div:nth-child(3)]:bg-orange-100
      [&>div:nth-child(10)>div:nth-child(4)]:bg-orange-50
      [&>div:nth-child(10)]:text-black
      [&>div:nth-child(11)>div:nth-child(1)]:bg-green-500
      [&>div:nth-child(11)>div:nth-child(2)]:bg-green-600
      [&>div:nth-child(11)>div:nth-child(3)]:bg-green-800
      [&>div:nth-child(11)>div:nth-child(4)]:bg-green-950
      [&>div:nth-child(12)>div:nth-child(1)]:bg-blue-100
      [&>div:nth-child(12)>div:nth-child(2)]:bg-blue-200
      [&>div:nth-child(12)>div:nth-child(3)]:bg-blue-400
      [&>div:nth-child(12)>div:nth-child(4)]:bg-blue-600
      [&>div:nth-child(12)]:text-black
      [&>div:nth-child(13)>div:nth-child(1)]:bg-yellow-500
      [&>div:nth-child(13)>div:nth-child(2)]:bg-yellow-600
      [&>div:nth-child(13)>div:nth-child(3)]:bg-yellow-800
      [&>div:nth-child(13)>div:nth-child(4)]:bg-yellow-950
      [&>div:nth-child(14)>div:nth-child(1)]:bg-sky-100
      [&>div:nth-child(14)>div:nth-child(2)]:bg-sky-200
      [&>div:nth-child(14)>div:nth-child(3)]:bg-sky-400
      [&>div:nth-child(14)>div:nth-child(4)]:bg-sky-600
      [&>div:nth-child(14)]:text-black
      [&>div:nth-child(15)>div:nth-child(1)]:bg-slate-500
      [&>div:nth-child(15)>div:nth-child(2)]:bg-slate-600
      [&>div:nth-child(15)>div:nth-child(3)]:bg-slate-800
      [&>div:nth-child(15)>div:nth-child(4)]:bg-slate-950
      [&>div:nth-child(16)>div:nth-child(1)]:bg-pink-100
      [&>div:nth-child(16)>div:nth-child(2)]:bg-pink-200
      [&>div:nth-child(16)>div:nth-child(3)]:bg-pink-400
      [&>div:nth-child(16)>div:nth-child(4)]:bg-pink-600
      [&>div:nth-child(16)]:text-black
      [&>div:nth-child(2)>div:nth-child(1)]:bg-orange-500
      [&>div:nth-child(2)>div:nth-child(2)]:bg-orange-300
      [&>div:nth-child(2)>div:nth-child(3)]:bg-orange-100
      [&>div:nth-child(2)>div:nth-child(4)]:bg-orange-50
      [&>div:nth-child(2)]:text-black
      [&>div:nth-child(3)>div:nth-child(1)]:bg-green-500
      [&>div:nth-child(3)>div:nth-child(2)]:bg-green-600
      [&>div:nth-child(3)>div:nth-child(3)]:bg-green-800
      [&>div:nth-child(3)>div:nth-child(4)]:bg-green-950
      [&>div:nth-child(4)>div:nth-child(1)]:bg-blue-100
      [&>div:nth-child(4)>div:nth-child(2)]:bg-blue-200
      [&>div:nth-child(4)>div:nth-child(3)]:bg-blue-400
      [&>div:nth-child(4)>div:nth-child(4)]:bg-blue-600
      [&>div:nth-child(4)]:text-black
      [&>div:nth-child(5)>div:nth-child(1)]:bg-yellow-500
      [&>div:nth-child(5)>div:nth-child(2)]:bg-yellow-600
      [&>div:nth-child(5)>div:nth-child(3)]:bg-yellow-800
      [&>div:nth-child(5)>div:nth-child(4)]:bg-yellow-950
      [&>div:nth-child(6)>div:nth-child(1)]:bg-sky-100
      [&>div:nth-child(6)>div:nth-child(2)]:bg-sky-200
      [&>div:nth-child(6)>div:nth-child(3)]:bg-sky-400
      [&>div:nth-child(6)>div:nth-child(4)]:bg-sky-600
      [&>div:nth-child(6)]:text-black
      [&>div:nth-child(7)>div:nth-child(1)]:bg-slate-500
      [&>div:nth-child(7)>div:nth-child(2)]:bg-slate-600
      [&>div:nth-child(7)>div:nth-child(3)]:bg-slate-800
      [&>div:nth-child(7)>div:nth-child(4)]:bg-slate-950
      [&>div:nth-child(8)>div:nth-child(1)]:bg-pink-100
      [&>div:nth-child(8)>div:nth-child(2)]:bg-pink-200
      [&>div:nth-child(8)>div:nth-child(3)]:bg-pink-400
      [&>div:nth-child(8)>div:nth-child(4)]:bg-pink-600
      [&>div:nth-child(8)]:text-black
      [&>div:nth-child(9)>div:nth-child(1)]:bg-teal-500
      [&>div:nth-child(9)>div:nth-child(2)]:bg-teal-600
      [&>div:nth-child(9)>div:nth-child(3)]:bg-teal-800
      [&>div:nth-child(9)>div:nth-child(4)]:bg-teal-950
      ${className}`}
    >
      {series.map((s, s_index) => (
        <div
          key={s.id}
          id={'series' + s_index}
          className="flex flex-1 shrink-0 grow basis-1 flex-col-reverse items-center justify-start overflow-hidden"
        >
          {axis && (
            <span className="mt-1 text-text-900">
              {digitGrouping(s.sum)}
              {unit}
            </span>
          )}
          {s.data.map((d, i) => (
            <div
              key={i}
              data-testid={d.label}
              className="flex w-full items-center justify-center text-center shadow-black drop-shadow-md transition-all duration-500 [&:first-child]:rounded-b [&:last-child]:rounded-t"
              style={{
                opacity: 1 - i * 0.1,
                height: (d.value / max) * 100 + '%',
              }}
            >
              {labels && (
                <p
                  className="whitespace-break-spaces font-light"
                  data-testid="labels-container"
                >
                  {d.label}
                  <br />
                  <span className="font-semibold">
                    {digitGrouping(d.value)}
                    {s.unit}
                  </span>
                </p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default StackedBarChart;
