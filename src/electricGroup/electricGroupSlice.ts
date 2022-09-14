import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ElectricGroupState {
  [key: string]: number;
}

const initialState: ElectricGroupState = {
};

export const electricGroupSlice = createSlice({
  name: 'electricGroup',
  initialState,
  reducers: {
    changeElectricGroupState: (state, action: PayloadAction<ElectricGroupState>) => {
      Object.assign(state, action.payload);
    }
  }
});

export const { changeElectricGroupState } = electricGroupSlice.actions;

export default electricGroupSlice.reducer;
