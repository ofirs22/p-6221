import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Tag, TagState } from '../types/tagTypes';
import { mockTags } from '../data/mockTags';

const initialState: TagState = {
  tags: mockTags,
  loading: false,
  error: null,
};

// Async thunk to fetch tags
export const fetchTags = createAsyncThunk('tags/fetch', async () => {
  const response = await fetch('/api/tags'); // Adjust the API endpoint as needed
  if (!response.ok) {
    throw new Error('Failed to fetch tags');
  }
  return response.json();
});

const tagSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.loading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch tags';
      });
  },
});

export const selectTags = (state: { tags: TagState }) => state.tags.tags;

export default tagSlice.reducer;