import React from 'react';
import { useGetAllCoinsQuery} from "../redux/query/CoinQuery";



const CoinsTable = () => {

    const { data, isLoading, error } = useGetAllCoinsQuery('');

    console.log(data?.data[0].symbol);
    return (
        <div>
            
        </div>
    );
};

export default CoinsTable;