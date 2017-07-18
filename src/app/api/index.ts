import { Observable } from 'rxjs/Observable';

export const getTodos: () => Observable<string[]> = () => {
  // return Observable.ajax.getJSON<string[]>(API_URL);
  return Observable.of(['foo', 'bar', 'baz']);
};
