import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../features/jobs/jobsSlice';

export default function SearchBar() {
  const dispatch = useDispatch();
  const search = useSelector((s) => s.jobs.search);

  return (
    <input
      value={search}
      placeholder="Search jobs by title, company or location..."
      onChange={(e) => dispatch(setSearch(e.target.value))}
      style={{ width: '100%', padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}
    />
  );
}
