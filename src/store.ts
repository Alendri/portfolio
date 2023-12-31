import { create } from 'zustand';
import { Tech } from './types/Tech';
import { fetchTech } from './api_clients/tech';
import { Permits } from './types/Housing';
import { fetchPermits } from './api_clients/housing';

export type FetchStatus = 'unfetched' | 'fetched' | 'failed' | 'fetching';

export interface Store {
  tech: {
    showcased: Tech[];
    known: Tech[];
  };
  tech_fetched: FetchStatus;
  tech_error?: string;
  getTech: () => void;

  permits?: Permits;
  permits_fetched: FetchStatus;
  permits_error?: string;
  getPermits: () => void;

  dark_mode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export const useStore = create<Store>((set, get) => ({
  tech: {
    showcased: [],
    known: [],
  },
  tech_fetched: 'unfetched',
  getTech: async () => {
    const status = get().tech_fetched;
    if (status === 'unfetched' || status === 'failed') {
      set({ tech_fetched: 'fetching' });
      fetchTech()
        .then((tech) => {
          set({
            tech_fetched: 'fetched',
            tech,
            tech_error: undefined,
          });
        })
        .catch((err) => {
          set({
            tech: {
              showcased: [],
              known: [],
            },
            tech_error: err,
            tech_fetched: 'failed',
          });
        });
    }
  },

  permits_fetched: 'unfetched',
  getPermits: async () => {
    const status = get().permits_fetched;
    if (status === 'unfetched' || status === 'failed') {
      set({ permits_fetched: 'fetching' });
      fetchPermits()
        .then((permits) => {
          set({
            permits_fetched: 'fetched',
            permits,
            permits_error: undefined,
          });
        })
        .catch((err) => {
          set({
            permits: undefined,
            permits_error: err,
            permits_fetched: 'failed',
          });
        });
    }
  },

  dark_mode: false,
  setDarkMode: (dark) =>
    set({
      dark_mode: dark,
    }),
}));
