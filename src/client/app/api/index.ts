import { Observable } from 'rxjs/Observable';

const { fetch } = window;
const API_URL = '/api/todos';

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
