import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { coinQueryApi } from './query/CoinQuery';
import { setupListeners } from '@reduxjs/toolkit/query';
import coins from './slice/CoinSlice';
import suitCase from './slice/SuitCaseSlice';
import coinWasAdded from './slice/CoinWasAddedSlice';

const rootReducer = combineReducers({
    isCoinToolkit: coins,
    isSuitCaseToolkit: suitCase,
    isCoinWasAddedToolkit: coinWasAdded,
    [coinQueryApi.reducerPath]: coinQueryApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coinQueryApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof rootReducer>;
