import React, {useCallback, useEffect, useState} from 'react';
import {CoinDataResponse, useGetAllCoinsQuery} from "../redux/query/CoinQuery";
import {Container, Row, Table} from "react-bootstrap";
import {RingLoader} from "react-spinners";
import CoinItem from "./CoinItem";
import {useDispatch} from "react-redux";
import {SET_ALL_COINS} from "../redux/slice/CoinSlice";
import SortForm from "./SortForm/SortForm";
import SortBy from "../utils/SortBy";


const CoinsTable = () => {
    const [items, setItems] = useState(25);
    const [dataSort, setDataSort] = useState<null | CoinDataResponse>();
    const dispatch = useDispatch();
    const {data, isLoading, error} = useGetAllCoinsQuery(items);
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
                document.removeEventListener('scroll', scrollHandler)
            }
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

    // const sortData = (): void => {
    //     if (data) {
    //         const sortedData = SortBy(data, sort);
    //         setDataSort(sortedData);
    //     }
    // };

    return (
        <Container>
            {error ? (
                <Row className={'text-center'}>
                    <h1>Ошибка при загрузке данных, проверьте сетевое соединение.</h1>
                </Row>
            ) : isLoading ? (
                <Row className={'d-flex justify-content-center align-items-center'} style={{height: "100vh"}}>
                    <RingLoader color={'#36d7b7'} size={'100px'}/>
                </Row>
            ) : data ? (
                <Container>
                    <Row>
                        <SortForm setSort={setSort}/>
                    </Row>
                    <Row>
                        <Table responsive style={{'textAlign': 'center'}}>
                            <thead>
                            <tr>
                                <th className={'align-middle'}>Иконка</th>
                                <th className={'align-middle'}>Символ</th>
                                <th className={'align-middle'}>Цена в USD</th>
                                <th className={'align-middle'}>Рыночная капитализация в USD</th>
                                <th className={'align-middle'}>Изменение цены за 24 часа в %</th>
                                <th className={'align-middle'}>Возможность добавить в портфел</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/*{data.data.map(coinData => (*/}
                            {/*    <CoinItem*/}
                            {/*        key={coinData.id}*/}
                            {/*        data={coinData}*/}
                            {/*    />*/}
                            {/*))}*/}
                            {dataSort?.data.map(coinData => (
                                <CoinItem
                                    key={coinData.id}
                                    data={coinData}
                                />
                            ))}
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            ) : null

            }
        </Container>
    );
};

export default CoinsTable;