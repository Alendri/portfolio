import React from 'react';
import {
  MoonIcon as MoonIconSolid,
  SunIcon as SunIconSolid,
} from '@heroicons/react/24/solid';
import {
  MoonIcon as MoonIconOutline,
  SunIcon as SunIconOutline,
} from '@heroicons/react/24/outline';
import { useStore } from '../../store';
import { useShallow } from 'zustand/react/shallow';

const ThemeToggle: React.FC = () => {
  const [dark_mode, setDarkMode] = useStore(
    useShallow((state) => [state.dark_mode, state.setDarkMode]),
  );
  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      <button
        type="button"
        className={`relative inline-flex items-center rounded-l-md border-r-transparent px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-primary-500 ${
          !dark_mode
            ? 'bg-accent-50 text-accent-600'
            : 'bg-transparent text-text-100'
        }`}
        onClick={() => setDarkMode(false)}
      >
        {dark_mode ? (
          <SunIconOutline className="h-6 w-6" />
        ) : (
          <SunIconSolid className="h-6 w-6" />
        )}
      </button>
      <button
        type="button"
        className={`relative -ml-px inline-flex items-center rounded-r-md border-l-transparent px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-primary-500 ${
          dark_mode
            ? 'bg-primary-600 text-accent-100'
            : 'bg-transparent text-text-400 hover:bg-secondary-800 hover:text-text-200'
        }`}
        onClick={() => setDarkMode(true)}
      >
        {dark_mode ? (
          <MoonIconSolid className="h-6 w-6" />
        ) : (
          <MoonIconOutline className="h-6 w-6" />
        )}
      </button>
    </span>
  );
};

export default ThemeToggle;
