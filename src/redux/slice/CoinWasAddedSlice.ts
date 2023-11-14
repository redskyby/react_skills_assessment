import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    show: false,
};

const coinWasAddedSlice = createSlice({
    name: 'coinWasAdded',
    initialState,
    reducers: {
        SET_SHOW: (state, action: PayloadAction<boolean>) => {
            state.show = action.payload;
        },
    },
});

export default coinWasAddedSlice.reducer;

export const { SET_SHOW } = coinWasAddedSlice.actions;
