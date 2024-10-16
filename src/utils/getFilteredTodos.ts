import { StatusFilter } from '../modules/StatusFilter';
import { Todo } from '../types/Todo';

export function getFilteredTodos(
  todos: Todo[],
  filters: { query: string; status: StatusFilter },
) {
  let filteredTodos = [...todos];

  if (filters.status) {
    switch (filters.status) {
      case StatusFilter.ACTIVE:
        return (filteredTodos = filteredTodos.filter(todo => !todo.completed));
      case StatusFilter.COMPLETED:
        return (filteredTodos = filteredTodos.filter(todo => todo.completed));
      default:
        return filteredTodos;
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
