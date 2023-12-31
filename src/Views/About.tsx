import React from 'react';
import portrait from '../assets/portrait.jpg';

const timeline = [
  {
    name: 'AllBinary AB',
    description: `Software developer making tools for data analysis, data visualization, digital and print signage,
      case- and inventorymanagement among other. Positions held include project lead, client contact,
      UI and visualization design, data processing pipeline architecture, requirement analysis and issue tracking.`,
    date: '2016 - TODAY',
  },
  {
    name: 'Consulting',
    description: `After and alongside studies I worked as a consultant in my own firm to deliver 3d-models,
      data visualizations (videos, manually produced images, programmatic solutions) as well as
      illustration of educational material, such as video animations. Clients included Falck Ambulans,
      Swedish defence research agency (FOI) and government agencies.`,
    date: '2004 - 2016',
  },
  {
    name: 'Krabispesialisten',
    description: `Sell, coordinate and manage events, especially weddings and other private events in Thailand
      aimed at non-Thai markets. I also standardized the information gathering, processing and storage
      for events, developed IT policies and organized the hardware and software solutions employed.`,
    date: '2012 - 2014',
  },
];

const About: React.FC = () => {
  return (
    <div className="grow animate-materialize overflow-x-auto opacity-0">
      <main className="isolate pb-10">
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-accent-100 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-background-200 shadow-xl shadow-primary-600/20 ring-1 ring-accent-300 dark:ring-accent-500 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-4 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                10 years as a software developer. Many more as an all around
                human being.
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="whitespace-pre-wrap text-lg leading-8">
                  {`Studied as an industry and robotics automation technician. I have 10 years experience as a software developer and further experiences that require high levels of customer- and team-communication. These include two years as an international event coordinator in a foreign country, running my own consulting firm and as a project lead and product owner in a tech company.

I have experience working on-site as well as almost 10 years remotely with physical team and customer meetings as required.

I speak and write fluent English and Swedish.`}
                </p>
              </div>
              <div className="flex justify-center lg:contents">
                <img
                  src={portrait}
                  alt="portrait"
                  className="mt-10 aspect-[6/7] w-full max-w-sm rounded-2xl object-cover opacity-70 sm:mt-10 lg:mt-0 xl:row-span-2 xl:row-end-2 xl:mt-24"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-background-200 sm:h-32" />
        </div>

        <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {timeline.map((item) => (
              <div key={item.name}>
                <div className="flex items-center text-sm font-semibold leading-6 text-text-700">
                  <svg
                    viewBox="0 0 4 4"
                    className="mr-4 h-1 w-1 flex-none"
                    aria-hidden="true"
                  >
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-background-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-6 text-lg font-semibold tracking-tight text-text-900">
                  {item.name}
                </p>
                <p className="mt-1 text-base leading-7">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
