import { configureStore } from '@reduxjs/toolkit';
import { tagsSlice } from './slice/tagsSlice';

const store = configureStore({
  reducer: {
    tags: tagsSlice.reducer,
  },
})

export default store