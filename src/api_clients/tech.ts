import axios from 'axios';
import { Tech } from '../types/Tech';
import { Store } from '../store';

export const deserialize = (techs: string): Store['tech'] => {
  const all = JSON.parse(techs) as Tech[];
  return all.reduce<Store['tech']>(
    (acc, tech) => {
      acc[tech.used ? 'showcased' : 'known'].push(tech);
      return acc;
    },
    { showcased: [], known: [] },
  );
};

export const fetchTech = () => {
  return axios
    .get<string>('/techs', { responseType: 'text' })
    .then(({ data, status }): Store['tech'] => {
      if (status !== 200) {
        throw new Error(status.toString());
      }
      return deserialize(data);
    });
};
