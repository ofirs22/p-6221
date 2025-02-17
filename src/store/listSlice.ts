
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';
import { List } from '../types/listsType';

const initialState: List[] = [];

const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<List>) => {
      state.push(action.payload);
    },
    updateList: (state, action: PayloadAction<List>) => {
      const index = state.findIndex(list => list.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteList: (state, action: PayloadAction<string>) => {
      return state.filter(list => list.id !== action.payload);
    },
    addProductToList: (state, action: PayloadAction<{ listId: string; productId: string }>) => {
      const list = state.find(list => list.id === action.payload.listId);
      if (list && !list.products.includes(action.payload.productId)) {
        list.products.push(action.payload.productId);
      }
    },
    removeProductFromList: (state, action: PayloadAction<{ listId: string; productId: string }>) => {
      const list = state.find(list => list.id === action.payload.listId);
      if (list) {
        list.products = list.products.filter(id => id !== action.payload.productId);
      }
    },
  },
});

export const { 
  addList, 
  updateList, 
  deleteList, 
  addProductToList, 
  removeProductFromList 
} = listsSlice.actions;

export const selectLists = (state: RootState) => state.lists;
export const selectListById = (state: RootState, listId: string) => 
  state.lists.find(list => list.id === listId);

export default listsSlice.reducer;
