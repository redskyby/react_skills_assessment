import React, {useEffect, useState} from 'react';
import {useGetAllCoinsQuery} from "../redux/query/CoinQuery";
import { Container, Row, Table} from "react-bootstrap";
import {RingLoader} from "react-spinners";
import CoinItem from "./CoinItem";
import {useDispatch} from "react-redux";
import {SET_ALL_COINS} from "../redux/slice/CoinSlice";


const CoinsTable = () => {
    const [items, setItems] = useState(25);
    const dispatch = useDispatch();

    const {data, isLoading, error} = useGetAllCoinsQuery(items);


    useEffect(() => {
        if (!isLoading) {
            document.addEventListener('scroll', scrollHandler);
            dispatch(SET_ALL_COINS(data!));
            return function () {
                document.removeEventListener('scroll', scrollHandler)
            }
        }
    }, [data])

    const scrollHandler = (e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setItems(items + 1);
        }
    }

    return (
        <Container>
            {error ? (
                <Row className={'text-center'}>
                    <h1>Ошибка при загрузке данных, проверите сетивое соединение</h1>
                </Row>
            ) : isLoading ? (
                <Row className={'d-flex justify-content-center align-items-center'} style={{height: "100vh"}}>
                    <RingLoader color={'#36d7b7'} size={'100px'}/>
                </Row>
            ) : data ? (
                <Table responsive style={{'textAlign': 'center'}}>
                    <thead>
                    <tr>
                        <th>Иконка</th>
                        <th>Символ</th>
                        <th>Цена в USD</th>
                        <th>Рыночная капитализация в USD</th>
                        <th>Возможность добавить в портфель</th>
                        <th>Возможность добавить в портфел</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.data.map(coinData => (
                        <CoinItem key={coinData.id} data={coinData}/>
                    ))}
                    </tbody>
                </Table>
            ) : null

            }
        </Container>
    );
};

export default CoinsTable;