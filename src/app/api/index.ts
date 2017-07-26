import { Observable } from 'rxjs/Observable';
import { normalize } from 'normalizr';
import uuid from 'uuid/v4';

import { todoListSchema, Todo, NormalizedTodoList } from '../models';

const TODOS: Todo[] = [
  { id: uuid(), text: 'foo', completed: false },
  { id: uuid(), text: 'bar', completed: false },
  { id: uuid(), text: 'baz', completed: false },
];

export const getTodos: () => Observable<NormalizedTodoList> = () => {
  return Observable.of(
    normalize(TODOS, todoListSchema) as NormalizedTodoList,
  );
};
