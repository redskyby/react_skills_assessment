import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CoinData, CoinDataResponse } from '../query/CoinQuery';

const initialState = {
    coins: {} as CoinDataResponse,
    coin: {} as CoinData,
};

const coinSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        SET_ALL_COINS: (state, action: PayloadAction<CoinDataResponse>) => {
            state.coins = action.payload;
        },
        SET_ONE_COIN: (state, action: PayloadAction<CoinData>) => {
            state.coin = action.payload;
        },
    },
});

export default coinSlice.reducer;
export const { SET_ALL_COINS, SET_ONE_COIN } = coinSlice.actions;
