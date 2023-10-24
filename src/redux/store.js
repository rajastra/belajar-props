import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/conterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
