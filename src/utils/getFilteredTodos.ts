import { StatusFilter } from '../modules/StatusFilter';
import { Todo } from '../types/Todo';

export function getFilteredTodos(
  todos: Todo[],
  filters: { query: string; status: StatusFilter },
) {
  let filteredTodos = [...todos];

  if (filters.status !== StatusFilter.ALL) {
    if (filters.status === StatusFilter.ACTIVE) {
      filteredTodos = filteredTodos.filter(todo => !todo.completed);
    } else {
      filteredTodos = filteredTodos.filter(todo => todo.completed);
    }
  }

  const normalizedQuery = filters.query.toLowerCase();

  if (normalizedQuery) {
    filteredTodos = filteredTodos.filter(todo =>
      todo.title.toLowerCase().includes(normalizedQuery),
    );
  }

  return filteredTodos;
}
