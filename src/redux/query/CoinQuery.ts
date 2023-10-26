import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const CoinQueryApi = createApi({
    reducerPath: 'coinQuery',
    baseQuery: fetchBaseQuery({baseUrl: "api.coincap.io/v2"}),
    endpoints: (builder) => ({
        getAllCoins: builder.query({
            query: () => '/v2/assets/?limit=10'
        })
    })
})

export default CoinQueryApi;