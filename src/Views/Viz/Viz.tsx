import React, { useEffect, useMemo, useState } from 'react';
import SE from './SE';
import { useStore } from '../../store';
import { useShallow } from 'zustand/react/shallow';
import StackedBarChart, {
  StackedSeries,
} from '../../components/StackedBarChart/StackedBarChart';
import { digitGrouping } from '../../helpers/formatting';
import { Area } from '../../types/Housing';
import AreaDetails from '../../components/AreaDetails/AreaDetails';

const Viz: React.FC = () => {
  const permits = useStore((state) => state.permits);
  const [permits_fetched, getPermits] = useStore(
    useShallow((state) => [state.permits_fetched, state.getPermits]),
  );
  const [hover, setHover] = useState<undefined | Area>(undefined);

  useEffect(() => {
    if (permits_fetched === 'unfetched') {
      getPermits();
    }
  }, [getPermits, permits_fetched]);

  const count_series = useMemo<StackedSeries[] | undefined>(() => {
    if (!permits) {
      return;
    }
    return [
      {
        id: 'centers',
        label: 'Population centers',
        data: [
          {
            value: permits.sthlm.count,
            label: 'Stockholm',
          },
          {
            value: permits.gbg.count,
            label: 'Göteborg',
          },
          {
            value: permits.malmo.count,
            label: 'Malmö',
          },
        ],
        sum: permits.sthlm.count + permits.gbg.count + permits.malmo.count,
      },
      {
        id: 'rest',
        label: 'Rest of the country',
        data: [
          {
            value: permits.rest.count,
            label: 'Rest of the country',
          },
        ],
        sum: permits.rest.count,
      },
    ];
  }, [permits]);
  const sqm_series = useMemo<StackedSeries[] | undefined>(() => {
    if (!permits) {
      return;
    }
    return [
      {
        id: 'centers',
        label: 'Population centers',
        data: [
          {
            value: permits.sthlm.sqm,
            label: 'Stockholm',
          },
          {
            value: permits.gbg.sqm,
            label: 'Göteborg',
          },
          {
            value: permits.malmo.sqm,
            label: 'Malmö',
          },
        ],
        sum: permits.sthlm.sqm + permits.gbg.sqm + permits.malmo.sqm,
        unit: 'm²',
      },
      {
        id: 'rest',
        label: 'Rest of the country',
        data: [
          {
            value: permits.rest.sqm,
            label: 'Rest of the country',
          },
        ],
        sum: permits.rest.sqm,
        unit: 'm²',
      },
    ];
  }, [permits]);

  return (
    <div className="grow animate-materialize overflow-y-auto overflow-x-hidden bg-gradient-to-tl from-accent-500/80 opacity-0">
      <main className="relative -z-10 flex w-full justify-center pb-10 pl-10">
        <div className="pointer-events-none w-full max-w-6xl">
          <div className="pointer-events-none absolute z-50 overflow-x-hidden">
            <div
              className={`max-w-6xl justify-stretch gap-8 overflow-x-hidden pr-10 pt-10
                  ${hover ? 'animate-materialize' : 'animate-dissolve'}
                `}
            >
              <AreaDetails area={hover} />
            </div>
          </div>
          <SE
            className="pointer-events-auto absolute -z-30 -ml-8 h-full max-h-full min-h-screen"
            onMouseOut={() => setHover(undefined)}
            onMouseOver={setHover}
          />

          {/* The following two are simply there to fade the map away and prevent mouse events. */}
          <div className="pointer-events-auto absolute inset-x-0 top-0 h-40 bg-secondary-300" />
          <div className="pointer-events-auto absolute inset-x-0 top-40 h-40 bg-gradient-to-b from-secondary-300 to-secondary-300/0" />

          {/* The main text and stats. */}
          <div
            className={`
              pointer-events-none relative max-w-6xl justify-stretch gap-8 p-10 pl-52 lg:flex lg:pl-10
              ${hover ? 'animate-dissolve' : 'animate-materialize'}
            `}
          >
            <div className="grow basis-0">
              <h1 className="mb-2 mt-1 max-w-2xl text-2xl font-bold tracking-tight text-secondary-900 md:text-3xl lg:my-10 lg:text-5xl">
                Visualization demo; Some statistics on housing and house
                counstruction in Sweden
              </h1>
              <p>
                Here are some CSS based bar charts and an interactive SVG map of
                Sweden to play with. This is not an analysis, simply data openly
                available through scb.se.
              </p>
            </div>
            <div className="grow basis-0 pt-10">
              {count_series && sqm_series && (
                <>
                  From 1996 - 2023 the 3 largest cities had
                  <span className="m-1 font-extrabold">
                    {(
                      (count_series[0].sum /
                        (count_series[0].sum + count_series[1].sum)) *
                      100
                    ).toFixed()}
                    %
                  </span>
                  of all building permits for residential properties.
                  <div className="mb-10 mt-2 flex w-full gap-4">
                    <StackedBarChart
                      series={count_series}
                      className="h-[200px] w-full md:h-[250px]"
                      labels
                      axis
                    />
                  </div>
                  Those permits comprised
                  <span className="m-1 font-extrabold">
                    {(
                      (sqm_series[0].sum /
                        (sqm_series[0].sum + sqm_series[1].sum)) *
                      100
                    ).toFixed()}
                    %
                  </span>
                  of the total liveable area to be constructed.
                  <div className="my-2 flex w-full gap-4">
                    <StackedBarChart
                      series={sqm_series}
                      className="h-[200px] w-full"
                      labels
                      axis
                      unit={'m²'}
                    />
                  </div>
                  In the 3 cities the area per residence building permit was
                  <span className="m-1 font-extrabold">
                    {digitGrouping(
                      Math.round(sqm_series[0].sum / count_series[0].sum),
                    )}
                    m².
                  </span>
                  Whereas in the rest of the country the area was
                  <span className="m-1 font-extrabold">
                    {digitGrouping(
                      Math.round(sqm_series[1].sum / count_series[1].sum),
                    )}
                    m²
                  </span>
                  per building permit issued.
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Viz;
