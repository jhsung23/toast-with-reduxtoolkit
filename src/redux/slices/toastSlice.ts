import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type ToastInterface = {
  id: number;
  content: string;
};

const initialState: ToastInterface[] = [];

const toastSlice = createSlice({
  name: 'toastSlice',
  initialState,
  reducers: {
    showToast: (state, { payload: content }: PayloadAction<ToastInterface>) => {
      state.push(content);
    },
    removeToast: (state, { payload: idToRemove }: PayloadAction<ToastInterface['id']>) => {
      return state.filter((toast) => toast.id !== idToRemove);
    },
  },
});

export const { showToast, removeToast } = toastSlice.actions;
export default toastSlice;
