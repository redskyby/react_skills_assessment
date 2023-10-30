import React from 'react';
import {useParams} from "react-router-dom";
import {useGetOneCoinQuery} from "../redux/query/CoinQuery";
import { Container, Image, Row, Table} from "react-bootstrap";
import {RingLoader} from "react-spinners";
import secondNumberAfterDot from "../utils/secondNumberAfterDot";
import icon from "../utils/imgIcon/favicon.png";

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
                    <Table>
                        <thead>
                        <tr>
                            <th>Изображение монеты</th>
                            <th>Название монеты</th>
                            <th>Символ монеты</th>
                            <th>rank</th>
                            <th>Supply</th>
                            <th>Цена в USD</th>
                            <th>Рыночная капитализация в USD</th>
                            <th>maxSupply</th>
                        </tr>
                        </thead>
                        <tbody>
                        <td>
                            <Image src={icon}/>
                        </td>
                        <td>
                            {data.data.id}
                        </td>
                        <td>
                            {data.data.symbol}
                        </td>
                        <td>
                            {data.data.rank}
                        </td>
                        <td>
                            {secondNumberAfterDot(data.data.supply)}
                        </td>
                        <td>
                            {secondNumberAfterDot(data.data.priceUsd)}
                        </td>
                        <td>
                            {secondNumberAfterDot(data.data.marketCapUsd)}
                        </td>
                        <td>
                            {secondNumberAfterDot(data.data.maxSupply)}
                        </td>
                        </tbody>
                    </Table>
                </Container>
            ) : null

            }
        </Container>
    );
};

export default CoinPage;