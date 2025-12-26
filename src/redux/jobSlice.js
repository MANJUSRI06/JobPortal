import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import jobsData from '../api/jobs.json';

// Load jobs from local JSON so data is deterministic and human-friendly
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  // jobsData is an array of job objects; normalize types where useful
  const jobs = (jobsData || []).map((j) => ({
    id: Number(j.id),
    title: j.title || 'Unknown Role',
    company: j.company || 'Unknown Company',
    location: j.location || 'Remote',
    category: j.category || 'Other',
    description: j.description || '',
    experience: j.experience || 'Not specified',
    type: j.type || 'Full-time',
    salary: j.salary || 0,
    remote: typeof j.remote === 'boolean' ? j.remote : false,
    postedAt: j.postedAt || null,
  }));

  return jobs;
});

const jobSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default jobSlice.reducer;
