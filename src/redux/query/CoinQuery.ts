import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const coinQueryApi = createApi({
    reducerPath: 'coinQueryApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.coincap.io/v2" }),
    endpoints: (build) => ({
        getAllCoins: build.query({
            query: () => ({
                url: '/assets/?limit=1'
            })
        })
    })
});

export const { useGetAllCoinsQuery } = coinQueryApi;