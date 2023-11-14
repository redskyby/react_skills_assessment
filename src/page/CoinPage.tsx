import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useGetOneCoinQuery, CoinOne } from '../redux/query/CoinQuery';
import { Button, Container, Image, Row } from 'react-bootstrap';
import { RingLoader } from 'react-spinners';
import secondNumberAfterDot from '../utils/SecondNumberAfterDot';
import icon from '../utils/imgIcon/favicon.png';
import { SHOP_ROUTE } from '../utils/RoutePath';
import { ADD_IN_ONE_SUIT } from '../redux/slice/SuitCaseSlice';
import { useDispatch } from 'react-redux';
import CoinWasAdded from '../components/CoinsTable/CoinItem/Modal/CoinWasAdded';
import { SET_SHOW } from '../redux/slice/CoinWasAddedSlice';
import style from './CoinPage.module.scss';

const CoinPage = () => {
    const { id } = useParams<string>();
    const { data, isLoading, error } = useGetOneCoinQuery(id!);
    const dispatch = useDispatch();

    function addInSuitCase(e: React.MouseEvent, data: CoinOne) {
        e.stopPropagation();
        dispatch(ADD_IN_ONE_SUIT(data?.data));
        dispatch(SET_SHOW(true));
    }

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
                <Container>
                    <Row className={'text-center'}>
                        <h1>{data.data.id}</h1>
                    </Row>
                    <table>
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
                    </table>
                    <Row>
                        <NavLink to={SHOP_ROUTE}>Вернуться на главную страницу</NavLink>
                    </Row>
                    <CoinWasAdded />
                </Container>
            ) : null}
        </div>
    );
};

export default CoinPage;
