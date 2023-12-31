import React, { useEffect } from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import { useStore } from '../store';
import { useShallow } from 'zustand/react/shallow';

const Home: React.FC = () => {
  const { showcased, known } = useStore((state) => state.tech);
  const [tech_fetched, getTech] = useStore(
    useShallow((state) => [state.tech_fetched, state.getTech]),
  );

  useEffect(() => {
    if (tech_fetched === 'unfetched' || tech_fetched === 'failed') {
      getTech();
    }
  }, [getTech, tech_fetched]);

  return (
    <div className="grow animate-materialize overflow-x-auto opacity-0">
      <main className="isolate mb-10">
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-secondary-300/80 pt-14">
          <div
            className="absolute inset-y-0 right-1/3 -z-10 -mr-96 w-[150%] origin-top-right skew-x-[-18deg] bg-accent-200 shadow-xl shadow-primary-600/20 ring-1 ring-accent-300 dark:ring-accent-500 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="mb-8 text-2xl font-bold tracking-tight text-secondary-900 md:text-6xl lg:col-span-2 xl:col-auto">
              Portfolio site
            </h1>
            <div className="mt-6 lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="mb-10 max-w-4xl whitespace-pre-wrap text-primary-700 md:text-lg md:leading-8">
                The buildings blocks of proprietary things are often not easy to
                showcase to the public at large. And so this portfolio was
                created to show some of the technologies I am familar with. Feel
                free to{' '}
                <a className="underline" href="https://github.com">
                  visit the repo
                </a>{' '}
                to view the entire project setup and my code. <br />
                <br />
                <br />
              </p>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-6 divide-y divide-accent-100 dark:divide-accent-400 md:grid-cols-2 xl:grid-cols-3">
                <li className="py-4">
                  <dl className="relative flex flex-wrap gap-x-2">
                    <dd className="mt-1 w-full flex-none font-work font-bold text-text-700">
                      In no particular order these techs are used within or for
                      creating this portfolio page.
                    </dd>
                  </dl>
                </li>
                {tech_fetched !== 'fetched' &&
                  Array(4)
                    .fill(null)
                    .map((_, i) => (
                      <li className="animate-pulse py-4" key={i}>
                        <div className="h-16 w-full rounded bg-background-900" />
                      </li>
                    ))}
                {showcased.map((tech) => (
                  <li key={tech.title} className="py-4">
                    <dl className="group relative flex flex-wrap gap-x-2">
                      <a href={tech.href} target="_blank">
                        <dt className="flex w-full items-center text-lg font-semibold tracking-tight text-text-800 group-hover:text-accent-600">
                          {tech.title}
                          <ArrowTopRightOnSquareIcon className="ml-1 h-5 w-5 opacity-0 transition-all duration-300 group-hover:ml-3 group-hover:opacity-70" />
                        </dt>
                        <dd className="mt-1 w-full flex-none text-sm leading-6 text-text-800">
                          {tech.description}
                        </dd>
                      </a>
                    </dl>
                  </li>
                ))}
              </ul>
              <div className="my-16 flex max-w-4xl flex-col gap-2 md:leading-7">
                <h2 className="mb-4 text-xl md:text-2xl">
                  A note about Mock Service Worker usage
                </h2>
                <p>
                  For this page I am using MSW during development and leaving it
                  in for the build to showcase interception and because there is
                  no API to fetch data from.
                </p>
                <p>
                  Devs can work against intentionally good, bad and extreme data
                  without hammering an API during auto reloads or introducing
                  bad data there. We can also introduce long loading times to
                  examine how the app behaves in terms of loading states and
                  loading resolutions. You also get to reuse all of this for
                  free when mocking tests.
                </p>
                <p>
                  My aim is that I should be able to continue UI work when my
                  internet connection dies while commuting or for whatever other
                  reason.
                </p>
              </div>
              <ul className="mb-6 grid grid-cols-1 gap-x-8 gap-y-6 divide-y divide-accent-100 dark:divide-accent-400 md:grid-cols-2 xl:grid-cols-3">
                <li className="py-4">
                  <dl className="relative flex flex-wrap gap-x-2">
                    <dd className="mt-1 w-full flex-none font-work font-bold text-text-700">
                      Here are some technologies I am familiar with but were not
                      directly used within or to create this page.
                    </dd>
                  </dl>
                </li>
                {tech_fetched !== 'fetched' &&
                  Array(4)
                    .fill(null)
                    .map((_, i) => (
                      <li className="animate-pulse py-4" key={i}>
                        <div className="h-16 w-full rounded bg-background-900" />
                      </li>
                    ))}
                {known.map((tech) => (
                  <li key={tech.title} className="py-4">
                    <dl className="group relative flex flex-wrap gap-x-2">
                      <a href={tech.href} target="_blank">
                        <dt className="flex w-full items-center text-lg font-semibold tracking-tight text-text-800 group-hover:text-accent-600">
                          {tech.title}
                          <ArrowTopRightOnSquareIcon className="ml-1 h-5 w-5 opacity-0 transition-all duration-300 group-hover:ml-3 group-hover:opacity-70" />
                        </dt>
                        <dd className="mt-1 w-full flex-none text-sm leading-6 text-text-800">
                          {tech.description}
                        </dd>
                      </a>
                    </dl>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-96 bg-gradient-to-t from-background-200 sm:h-80" />
        </div>
      </main>
    </div>
  );
};

export default Home;
