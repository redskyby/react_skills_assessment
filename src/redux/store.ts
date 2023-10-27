import { configureStore} from '@reduxjs/toolkit'
import {coinQueryApi} from './query/CoinQuery';
import {setupListeners} from "@reduxjs/toolkit/query";



export const store = configureStore({
        reducer: {
            [coinQueryApi.reducerPath]: coinQueryApi.reducer
        },

        middleware: (getDefaultMiddleware) =>
             getDefaultMiddleware().concat(coinQueryApi.middleware)
    })

setupListeners(store.dispatch)

