import React from 'react';
import {useParams} from "react-router-dom";
import { useGetOneCoinQuery} from "../redux/query/CoinQuery";
import { Col, Container, Row} from "react-bootstrap";
import {RingLoader} from "react-spinners";

const CoinPage = () => {
    const {id} = useParams<string>();
    const {data, isLoading, error} = useGetOneCoinQuery(id!);

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
                <Container>
                    <Row className={'text-center'}><h1>{data.data.id}</h1></Row>
                    <Row>
                        <Col>
                            <p>{data.data.symbol}</p>
                        </Col>
                        <Col>
                            <p>{data.data.supply}</p>
                        </Col>
                        <Col>
                            <p>{data.data.priceUsd}</p>
                        </Col>
                        <Col>
                            <p>{data.data.marketCapUsd}</p>
                        </Col>
                        <Col>
                            <p>{data.data.maxSupply}</p>
                        </Col>
                    </Row>
                </Container>
            ) : null

            }
        </Container>
    );
};

export default CoinPage;