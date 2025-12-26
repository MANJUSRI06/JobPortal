import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from '../features/bookmarks/bookmarksSlice';

export default function JobCard({ job }) {
  const dispatch = useDispatch();
  const bookmarks = useSelector((s) => s.bookmarks.items);
  const isBookmarked = bookmarks.some((b) => b.id === job.id);

  const toggleBookmark = (e) => {
    e.stopPropagation();
    if (isBookmarked) dispatch(removeBookmark(job.id));
    else dispatch(addBookmark(job));
  };

  return (
    <div className="job-card" style={{ border: '1px solid #eee', padding: 16, borderRadius: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h3>{job.title}</h3>
          <div>{job.company} • {job.location}</div>
        </div>
        <div>
          <button onClick={toggleBookmark}>{isBookmarked ? '★' : '☆'}</button>
        </div>
      </div>
      <p style={{ marginTop: 8 }}>{job.description.slice(0, 140)}...</p>
      <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
        <small>{job.type}</small>
        <small>{job.experience}</small>
        <small>₹{job.salary.toLocaleString()}</small>
      </div>
    </div>
  );
}
