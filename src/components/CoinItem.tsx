import React from 'react';
import {Col, Container, Image, Row , Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

interface CoinData {
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


const CoinItem = ({data}: { data: CoinData }) => {

    const historu = useNavigate();

    return (
        <Container>
            <Row>
                <Col>
                    <Image src={data.symbol} />
                </Col>
                <Col>
                    <p>Цена в USD: {data.priceUsd}</p>
                </Col>
                <Col>
                    <p>Рыночная капитализация в USD : {data.marketCapUsd}</p>
                </Col>
                <Col>
                    <p>Изменение цены за 24 часа в процентах : {data.changePercent24Hr}</p>
                </Col>
                <Col>
                    <Button type={'button'}>Добавить в портфель</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default CoinItem;