import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ListItem {
  id: string;
  title: string;
  notes: string;
  isActive: boolean;
}

interface ListState {
  lists: ListItem[];
}

const initialState: ListState = {
  lists: [],
};

export const listSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<{ title: string; notes: string }>) => {
      const newList: ListItem = {
        id: Date.now().toString(),
        title: action.payload.title,
        notes: action.payload.notes,
        isActive: false,
      };
      state.lists.push(newList);
    },
    toggleList: (state, action: PayloadAction<string>) => {
      const list = state.lists.find(list => list.id === action.payload);
      if (list) {
        list.isActive = !list.isActive;
      }
    },
    deleteList: (state, action: PayloadAction<string>) => {
      state.lists = state.lists.filter(list => list.id !== action.payload);
    },
  },
});

export const { addList, toggleList, deleteList } = listSlice.actions;

export const selectLists = (state: RootState) => state.lists.lists;

export default listSlice.reducer;