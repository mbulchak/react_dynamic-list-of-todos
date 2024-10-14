import { Dispatch, SetStateAction } from 'react';
import { StatusFilter } from '../../modules/StatusFilter';

type Props = {
  status: StatusFilter;
  query: string;
  setStatus: Dispatch<SetStateAction<StatusFilter>>;
  setQuery: Dispatch<SetStateAction<string>>;
};

export const TodoFilter: React.FC<Props> = ({
  status,
  query,
  setStatus,
  setQuery,
}) => {
  const STATUS_OPTIONS: Record<StatusFilter, string> = {
    all: 'All',
    completed: 'Completed',
    active: 'Active',
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            value={status}
            onChange={event => setStatus(event.target.value as StatusFilter)}
          >
            {Object.entries(STATUS_OPTIONS).map(([optionStatus, text]) => (
              <option key={optionStatus} value={optionStatus}>
                {text}
              </option>
            ))}
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={event => setQuery(event.target.value.trimStart())}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        {query.length > 0 && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => setQuery('')}
            />
          </span>
        )}
      </p>
    </form>
  );
};
