import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {coinQueryApi} from './query/CoinQuery';


const rootReducer = combineReducers({
    [coinQueryApi.reducerPath]: coinQueryApi.reducer
})
export const setupStore = () => {

    return configureStore({
        reducer: rootReducer,

        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(coinQueryApi.middleware)
        }
    })
}

