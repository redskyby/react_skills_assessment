import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export interface CoinData {
        id: string;
        rank: string;
        symbol: string;
        name: string;
        supply: string;
        maxSupply: string;
        marketCapUsd: string;
        volumeUsd24Hr: string;
        priceUsd: string;
        changePercent24Hr: string;
        vwap24Hr: string;
}

interface CoinDataResponse {
    data: CoinData[];
}

interface  CoinOne{
    data : CoinData;
}

export const coinQueryApi = createApi({
    reducerPath: 'coinQueryApi',
    baseQuery: fetchBaseQuery({baseUrl: "https://api.coincap.io/v2"}),
    endpoints: (build) => ({
        getAllCoins: build.query<CoinDataResponse, void>({
            query: () => '/assets/?limit=10'
        }),
        getOneCoin: build.query<CoinOne, string>({
            query: (name) => `/assets/${name}`
        })
    })
});

export const {useGetAllCoinsQuery, useGetOneCoinQuery} = coinQueryApi;