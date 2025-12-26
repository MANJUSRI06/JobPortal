import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setSort, clearFilters } from '../features/jobs/jobsSlice';

export default function Filters() {
  const dispatch = useDispatch();
  const filters = useSelector((s) => s.jobs.filters);
  const sortBy = useSelector((s) => s.jobs.sortBy);

  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
      <select value={filters.type} onChange={(e) => dispatch(setFilter({ type: e.target.value }))}>
        <option>Any</option>
        <option>Full-time</option>
        <option>Part-time</option>
        <option>Contract</option>
      </select>

      <select value={filters.experience} onChange={(e) => dispatch(setFilter({ experience: e.target.value }))}>
        <option>Any</option>
        <option>Intern</option>
        <option>Junior</option>
        <option>Mid</option>
        <option>Senior</option>
      </select>

      <select value={filters.remote} onChange={(e) => dispatch(setFilter({ remote: e.target.value }))}>
        <option>Any</option>
        <option>Remote</option>
        <option>Onsite</option>
      </select>

      <select value={sortBy} onChange={(e) => dispatch(setSort(e.target.value))}>
        <option value="newest">Newest</option>
        <option value="salary-desc">Salary: High → Low</option>
        <option value="salary-asc">Salary: Low → High</option>
      </select>

      <button onClick={() => dispatch(clearFilters())}>Reset</button>
    </div>
  );
}
