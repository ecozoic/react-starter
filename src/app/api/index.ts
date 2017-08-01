import { Observable } from 'rxjs/Observable';
import { normalize } from 'normalizr';
import _ from 'lodash';

import { todoListSchema, Todo, NormalizedTodoList } from '../models';

const TODOS: Todo[] = [
  { id: _.uniqueId(), text: 'foo', completed: false },
  { id: _.uniqueId(), text: 'bar', completed: false },
  { id: _.uniqueId(), text: 'baz', completed: false },
];

export const getTodos: () => Observable<NormalizedTodoList> = () => {
  return Observable.of(
    normalize(TODOS, todoListSchema) as NormalizedTodoList,
  );
};
