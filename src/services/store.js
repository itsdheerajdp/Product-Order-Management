import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from '../features/orders/ordersSlice';

export const store = configureStore({
  reducer: {

    orders: ordersReducer,
  },
});
