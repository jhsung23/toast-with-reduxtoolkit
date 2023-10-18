import { configureStore } from '@reduxjs/toolkit';
import { toastSlice } from './slices';

const store = configureStore({
  reducer: {
    toast: toastSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
