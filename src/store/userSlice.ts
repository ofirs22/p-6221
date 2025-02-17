import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState, BillingDetails } from '../types/userTypes';

const initialState: UserState = {
  isAuthenticated: true,
  userInfo: {
    email: 'ofir.sahar22@gmail.com',
    token: null,
    firstName: 'אופיר',
    lastName: 'סהר',
    phone: '054-7539116',
  },
  shippingDetails: {
    city: 'תל אביב',
    street: '1 הירקון',
    houseNumber: '6',
    apartment: '6',
    postalCode: '4638512',
  },
  billingDetails: {
    city: 'תל אביב',
    street: '1 הירקון',
    houseNumber: '6',
    apartment: '6',
    postalCode: '4638512',
  },
  mainAddress: {
    city: 'תל אביב',
    street: '1 הירקון',
    houseNumber: '6',
    apartment: '6',
    postalCode: '4638512',
    isEditing: false
  },
  totalSaved: 56.33
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; token: string }>) => {
      state.isAuthenticated = true;
      state.userInfo.email = action.payload.email;
      state.userInfo.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userInfo = {
        email: null,
        token: null,
        firstName: null,
        lastName: null,
        phone: null,
      };
      state.billingDetails = {
        city: null,
        street: null,
        houseNumber: null,
        apartment: null,
        postalCode: null,
      }
      state.shippingDetails = {
        city: null,
        street: null,
        houseNumber: null,
        apartment: null,
        postalCode: null,
      };
      state.mainAddress = {
        city: null,
        street: null,
        houseNumber: null,
        apartment: null,
        postalCode: null,
        isEditing: false
      };
    },
    updateUserInfo: (state, action: PayloadAction<Partial<UserState['userInfo']>>) => {
      console.log(action.payload);
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    updateAddress: (state, action: PayloadAction<Partial<BillingDetails>>) => {
      console.log(action.payload)
      return { ...state, ...action.payload };
    },
    updateShippingDetails: (state, action: PayloadAction<Partial<UserState['shippingDetails']>>) => {
      console.log("in shipping slice")
      state.shippingDetails = { ...state.shippingDetails, ...action.payload };
    },
    setSavingsAmount: (state, action: PayloadAction<number>) => {
      state.totalSaved = action.payload;
    },
  },
});

export const selectSavings = (state: { user: UserState }) => state.user.totalSaved;
export const selectUserDetails = (state: { user: UserState }) => state.user;
export const selectAddress = (state: UserState) => state.mainAddress;

export const { login, logout, updateUserInfo, updateShippingDetails, updateAddress, setSavingsAmount } = userSlice.actions;
export default userSlice.reducer;