import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import MenuBtn from './MenuBtn';
import ThemeToggle from './ThemeToggle';

const Menu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="relative contents w-full shrink-0 md:h-full md:w-fit">
      <div className="flex w-full items-center gap-4 bg-secondary-700 p-1 md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="p-1 text-text-200 hover:bg-background-600 hover:text-text-100"
        >
          <Bars3Icon className="h-5 w-5" />
        </button>
        <p className="font-work text-xl font-extralight text-background-200">
          Joakim Johansson
          <span className="pl-4 text-lg text-primary-200">Frontend dev</span>
        </p>
      </div>
      {open && (
        <div
          className="fixed left-0 top-0 z-10 h-full w-full animate-materialize bg-background-800/60"
          onClick={() => setOpen(false)}
        >
          <div className="flex h-full w-3/4 max-w-xs animate-intro-menu-fast flex-col bg-secondary-700 p-5 font-work">
            <MenuBtn to="/portfolio" label="Technologies" delay={0} />
            <MenuBtn to="/portfolio/about" label="About me" delay={0} />
            <MenuBtn to="/portfolio/viz" label="Visualization" delay={0} />
            <div className="flex grow items-end justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}

      <div className="pointer-events-none invisible absolute z-10 h-full w-1/5 shrink-0 md:pointer-events-auto md:visible md:relative">
        <div className="pointer-events-none absolute top-0 h-full w-screen overflow-hidden ">
          <div
            className="absolute left-[-1px] top-0 h-[50vh] -translate-x-full animate-intro-box overflow-hidden bg-secondary-700 dark:bg-secondary-400/70"
            style={{
              width: 'calc(100vw + 1px)',
              animationDelay: '0.3s',
              transformOrigin: 'top left',
            }}
          />
          <div
            className="absolute top-0 h-[50vh] w-full animate-slide-out-to-right bg-background-200"
            style={{ animationDelay: '0.3s' }}
          />
          <div
            className="absolute top-[50vh] z-10 flex h-0 w-full animate-intro-header flex-col items-center font-light xl:font-thin"
            style={{
              animationDelay: '0.3s',
              transformOrigin: 'left center',
            }}
          >
            <div className="absolute bottom-0 text-center font-work text-9xl text-background-200 dark:text-background-800 lg:text-[11vw]">
              Joakim Johansson
            </div>
            <p className="top-0 animate-intro-sub-header pt-16 text-center text-8xl text-secondary-200 dark:!text-background-800 lg:pt-0 lg:text-[8vw] xl:text-[6vw]">
              Frontend developer
            </p>
          </div>
          <div
            className="absolute top-[50vh] z-20 h-[50vh] w-full animate-slide-out-to-right bg-background-400"
            style={{ animationDelay: '0.8s' }}
          />
          <div
            className="absolute top-[50vh] h-[50vh] w-full animate-slide-out-to-right bg-background-400"
            style={{ animationDelay: '3.1s' }}
          />
        </div>
        <div className="relative mt-64 p-5 font-work text-lg">
          <MenuBtn to="/portfolio" label="Technologies" delay={4} />
          <MenuBtn to="/portfolio/about" label="About me" delay={4.1} />
          <MenuBtn to="/portfolio/viz" label="Visualization" delay={4.2} />
        </div>
        <div
          className="mt-20 flex grow animate-intro-menu items-end justify-center opacity-0"
          style={{ animationDelay: '4s' }}
        >
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Menu;
