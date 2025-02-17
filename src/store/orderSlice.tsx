import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface OrderState {
  status: string;
}

const initialState: OrderState = {
  status: 'השליח בדרך',
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrderStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
  },
});

export const { setOrderStatus } = orderSlice.actions;

export const selectOrderStatus = (state: RootState) => state.order.status;

export default orderSlice.reducer;