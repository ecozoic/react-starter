import { Observable } from 'rxjs';

const { fetch } = window;
const API_URL = '/api/todoss';

export const getTodos: () => Observable<string[]> = () => {
  return Observable.fromPromise(
    fetch(API_URL).then((response) => {
      if (!response.ok) {
        throw Error(`${response.status}: ${response.statusText}`);
      }

      return response.json();
    }),
  );
};
