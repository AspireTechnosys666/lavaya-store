import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
  name: "setting",
  initialState: {
    settingItem: [],
    isLoading: false
  },
  reducers: {
    addSetting: (state, action) => {
      const existsItem = state.settingItem.find(
        (x) => x.name === action.payload.name
      );
      if (existsItem) {
        return {
          ...state,
          settingItem: state.settingItem.map((x) => {
            if (x.name === existsItem.name) {
              return x;
            }
            return x;
          }),
        };
      } else {
        return {
          ...state,
          settingItem: [...state.settingItem, action.payload],
        };
      }
    },
    removeSetting: (state, action) => {
      return {
        ...state,
        settingItem: state.settingItem.filter((x) => x.name !== action.payload),
      };
    },
    changeLoading: (state, action) => {
      return {
        ...state,
        isLoading: action.payload
      };
    },
    clearSetting: (state) => {
      return {
        ...state,
        settingItem: [],
        isLoading: false
      };
    },
  },
});

export const { addSetting, removeSetting, clearSetting, changeLoading } = settingSlice.actions;

export default settingSlice.reducer;
