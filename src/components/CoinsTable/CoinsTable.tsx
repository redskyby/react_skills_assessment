import React, { useCallback, useEffect, useState } from 'react';
import { CoinDataResponse, useGetAllCoinsQuery } from '../../redux/query/CoinQuery';
import { RingLoader } from 'react-spinners';
import CoinItem from './CoinItem/CoinItem';
import { useDispatch } from 'react-redux';
import { SET_ALL_COINS } from '../../redux/slice/CoinSlice';
import SortForm from '../SortForm/SortForm';
import SortBy from '../../utils/SortBy';
import style from './CoinsTable.module.scss';
import CoinWasAdded from './CoinItem/Modal/CoinWasAdded';

const CoinsTable = () => {
    const [items, setItems] = useState(25);
    const [dataSort, setDataSort] = useState<null | CoinDataResponse>();
    const dispatch = useDispatch();
    const { data, isLoading, error } = useGetAllCoinsQuery(items);
    const [sort, setSort] = useState('1');

    const scrollHandler = useCallback(() => {
        if (document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 100) {
            setItems((prevItems) => prevItems + 1);
        }
    }, []);

    useEffect(() => {
        if (!isLoading) {
            document.addEventListener('scroll', scrollHandler);
            dispatch(SET_ALL_COINS(data!));
            setDataSort(data);
            return function () {
                document.removeEventListener('scroll', scrollHandler);
            };
        }
    }, [data, dispatch, isLoading, scrollHandler]);

    useEffect(() => {
        const sortData = (): void => {
            if (data) {
                const sortedData = SortBy(data, sort);
                setDataSort(sortedData);
            }
        };

        if (data && sort) {
            sortData();
        }
    }, [sort, data]);

    return (
        <div className={style.container}>
            {error ? (
                <div className={style.error}>
                    <h1>Ошибка при загрузке данных, проверьте сетевое соединение.</h1>
                </div>
            ) : isLoading ? (
                <div className={style.loader}>
                    <RingLoader color={'#36d7b7'} size={'100px'} />
                </div>
            ) : data ? (
                <div className={style.main_page}>
                    <div className={style.main_page_sort_form}>
                        <SortForm setSort={setSort} />
                    </div>
                    <table className={style.main_page_table}>
                        <thead>
                            <tr>
                                <th>Иконка</th>
                                <th>Символ</th>
                                <th>Цена в USD</th>
                                <th>Рыночная капитализация в USD</th>
                                <th>Изменение цены за 24 часа в %</th>
                                <th>Возможность добавить в портфел</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*{data.data.map(coinData => (*/}
                            {/*    <CoinItem*/}
                            {/*        key={coinData.id}*/}
                            {/*        data={coinData}*/}
                            {/*    />*/}
                            {/*))}*/}
                            {dataSort?.data.map((coinData) => <CoinItem key={coinData.id} data={coinData} />)}
                        </tbody>
                    </table>
                    <CoinWasAdded />
                </div>
            ) : null}
        </div>
    );
};

export default CoinsTable;
