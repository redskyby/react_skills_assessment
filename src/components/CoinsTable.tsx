import React, {useEffect, useState} from 'react';
import {useGetAllCoinsQuery} from "../redux/query/CoinQuery";
import {Col, Container, Row} from "react-bootstrap";
import {RingLoader} from "react-spinners";
import CoinItem from "./CoinItem";

const CoinsTable = () => {
    const [items, setItems] = useState(14);

    const {data, isLoading, error} = useGetAllCoinsQuery(items);

    useEffect(() => {
        if (!isLoading) {
            document.addEventListener('scroll', scrollHandler)
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
                <Row>
                     <Col>
                         <p>Иконка</p>
                     </Col>
                    <Col>
                        <p>Символ</p>
                    </Col>
                    <Col>
                        <p>Цена в USD</p>
                    </Col>
                    <Col>
                        <p>Рыночная капитализация в USD</p>
                    </Col>
                    <Col>
                        <p>Изменение цена за 24 часаы</p>
                    </Col>
                    <Col>
                        <p>Возможность добавить в портфель</p>
                    </Col>
                    {
                    data.data.map(coinData => (
                        <CoinItem key={coinData.id} data={coinData}/>
                    ))}
                </Row>
            ) : null

            }
        </Container>
    );
};

export default CoinsTable;