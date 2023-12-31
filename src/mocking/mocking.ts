import { DefaultBodyType, http, HttpResponse, PathParams, delay } from 'msw';
import { techs } from './data/techs';
import { building_permits } from './data/building_permit';
import { SerializedPermits } from '../types/Housing';

export const handlers = [
  http.get<PathParams<never>, DefaultBodyType, SerializedPermits>(
    '/permits',
    async () => {
      return HttpResponse.json(building_permits, { status: 200 });
    },
  ),
  http.get<PathParams<never>, DefaultBodyType, string>('/techs', async () => {
    await delay(5000);
    return HttpResponse.text(JSON.stringify(techs), { status: 200 });
  }),
];
