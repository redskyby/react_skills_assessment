import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useGetOneCoinQuery, CoinOne } from '../redux/query/CoinQuery';
import { Button, Container, Image, Row, Table } from 'react-bootstrap';
import { RingLoader } from 'react-spinners';
import secondNumberAfterDot from '../utils/SecondNumberAfterDot';
import icon from '../utils/imgIcon/favicon.png';
import { SHOP_ROUTE } from '../utils/RoutePath';
import { ADD_IN_ONE_SUIT } from '../redux/slice/SuitCaseSlice';
import { useDispatch } from 'react-redux';

const CoinPage = () => {
    const { id } = useParams<string>();
    const { data, isLoading, error } = useGetOneCoinQuery(id!);
    const dispatch = useDispatch();

    function addInSuitCase(e: React.MouseEvent, data: CoinOne) {
        e.stopPropagation();
        dispatch(ADD_IN_ONE_SUIT(data?.data));
    }

    return (
        <Container>
            {error ? (
                <Row className={'text-center'}>
                    <h1>Ошибка при загрузке данных, проверите сетивое соединение</h1>
                </Row>
            ) : isLoading ? (
                <Row className={'d-flex justify-content-center align-items-center'} style={{ height: '100vh' }}>
                    <RingLoader color={'#36d7b7'} size={'100px'} />
                </Row>
            ) : data ? (
                <Container>
                    <Row className={'text-center'}>
                        <h1>{data.data.id}</h1>
                    </Row>
                    <Table responsive style={{ textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th className={'align-middle'}>Изображение монеты</th>
                                <th className={'align-middle'}>Название монеты</th>
                                <th className={'align-middle'}>Символ монеты</th>
                                <th className={'align-middle'}>rank</th>
                                <th className={'align-middle'}>Supply</th>
                                <th className={'align-middle'}>Цена в USD</th>
                                <th className={'align-middle'}>Рыночная капитализация в USD</th>
                                <th className={'align-middle'}>maxSupply</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={'align-middle'}>
                                    <Image src={icon} />
                                </td>
                                <td className={'align-middle'}>{data.data.id}</td>
                                <td className={'align-middle'}>{data.data.symbol}</td>
                                <td className={'align-middle'}>{data.data.rank}</td>
                                <td className={'align-middle'}>{secondNumberAfterDot(data.data.supply)}</td>
                                <td className={'align-middle'}>{secondNumberAfterDot(data.data.priceUsd)}</td>
                                <td className={'align-middle'}>{secondNumberAfterDot(data.data.marketCapUsd)}</td>
                                <td className={'align-middle'}>{secondNumberAfterDot(data.data.maxSupply)}</td>
                                <td className={'align-middle'}>
                                    <Button type={'button'} onClick={(e) => addInSuitCase(e, data)}>
                                        Добавить в портфель
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Row>
                        <NavLink to={SHOP_ROUTE}>Вернуться на главную страницу</NavLink>
                    </Row>
                </Container>
            ) : null}
        </Container>
    );
};

export default CoinPage;
