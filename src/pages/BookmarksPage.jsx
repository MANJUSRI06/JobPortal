import React from 'react';
import { useSelector } from 'react-redux';
import JobCard from '../components/JobCard';

export default function BookmarksPage() {
  const items = useSelector((s) => s.bookmarks.items);
  return (
    <div>
      <h1>Bookmarked jobs</h1>
      {items.length === 0 ? <p>No bookmarks yet.</p> : items.map((j) => <JobCard key={j.id} job={j} />)}
    </div>
  );
}
