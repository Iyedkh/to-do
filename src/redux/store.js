// store.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './action';

export default configureStore({
  reducer: {
    task: taskReducer,
  },
});
