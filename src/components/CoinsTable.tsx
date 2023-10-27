import React from 'react';
import { useGetAllCoinsQuery} from "../redux/query/CoinQuery";



const CoinsTable = () => {

    const { data, isLoading, error } = useGetAllCoinsQuery('');

    console.log(data.data);
    return (
        <div>
            
        </div>
    );
};

export default CoinsTable;