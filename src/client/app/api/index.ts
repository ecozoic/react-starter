import { Observable } from 'rxjs/Observable';

const API_URL = '/api/todos';

export const getTodos: () => Observable<string[]> = () => {
  return Observable.ajax.getJSON<string[]>(API_URL);
};
