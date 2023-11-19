import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CoinData } from '../query/CoinQuery';

const initialState = {
    coins: [] as CoinData[],
    coin: {} as CoinData,
    twice: false,
};

const suitCaseSlice = createSlice({
    name: 'suitCase',
    initialState,
    reducers: {
        ADD_IN_ONE_SUIT: (state, action: PayloadAction<CoinData>) => {
            state.coins.push(action.payload);
        },
        REMOVE_ONE_COIN_FROM_SUIT: (state, action: PayloadAction<CoinData>) => {
            state.coins = state.coins.filter((file) => file.id !== action.payload.id);
        },
        HIDDEN_TWICE_COIN_MODAL: (state, action: PayloadAction<boolean>) => {
            state.twice = action.payload;
        },
    },
});

export default suitCaseSlice.reducer;

export const { ADD_IN_ONE_SUIT, REMOVE_ONE_COIN_FROM_SUIT } = suitCaseSlice.actions;
