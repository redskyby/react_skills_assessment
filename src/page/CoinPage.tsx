import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useGetOneCoinQuery, CoinOne } from '../redux/query/CoinQuery';
import { RingLoader } from 'react-spinners';
import secondNumberAfterDot from '../utils/SecondNumberAfterDot';
import icon from '../utils/imgIcon/favicon.png';
import { SHOP_ROUTE } from '../utils/RoutePath';
import { ADD_IN_ONE_SUIT } from '../redux/slice/SuitCaseSlice';
import { useDispatch } from 'react-redux';
import CoinWasAdded from '../components/CoinsTable/CoinItem/Modal/CoinWasAdded';
import { SET_SHOW } from '../redux/slice/CoinWasAddedSlice';
import style from './CoinPage.module.scss';
import Chart from './Chart/Chart';

const CoinPage = () => {
    const { id } = useParams<{ id: string }>() as { id: string };
    const { data, isLoading, error } = useGetOneCoinQuery(id!);
    const [range, setRange] = useState<string>('d1');
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
                <div className={style.page_of_coin}>
                    <div className={style.page_of_coin_main_title}>
                        <h1>{data.data.id}</h1>
                    </div>
                    <table className={style.page_of_coin_table}>
                        <thead>
                            <tr>
                                <th className={style.page_of_coin_table_text_center}>Изображение монеты</th>
                                <th className={style.page_of_coin_table_text_center}>Название монеты</th>
                                <th className={style.page_of_coin_table_text_center}>Символ монеты</th>
                                <th className={style.page_of_coin_table_text_center}>rank</th>
                                <th className={style.page_of_coin_table_text_center}>Supply</th>
                                <th className={style.page_of_coin_table_text_center}>Цена в USD</th>
                                <th className={style.page_of_coin_table_text_center}>Рыночная капитализация в USD</th>
                                <th className={style.page_of_coin_table_text_center}>maxSupply</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={style.page_of_coin_table_text_center}>
                                    <img src={icon} alt="Main logo" />
                                </td>
                                <td className={style.page_of_coin_table_text_center}>{data.data.id}</td>
                                <td className={style.page_of_coin_table_text_center}>{data.data.symbol}</td>
                                <td className={style.page_of_coin_table_text_center}>{data.data.rank}</td>
                                <td className={style.page_of_coin_table_text_center}>
                                    {secondNumberAfterDot(data.data.supply)}
                                </td>
                                <td className={style.page_of_coin_table_text_center}>
                                    {secondNumberAfterDot(data.data.priceUsd)}
                                </td>
                                <td className={style.page_of_coin_table_text_center}>
                                    {secondNumberAfterDot(data.data.marketCapUsd)}
                                </td>
                                <td className={style.page_of_coin_table_text_center}>
                                    {secondNumberAfterDot(data.data.maxSupply)}
                                </td>
                                <td className={style.page_of_coin_table_text_center}>
                                    <button
                                        className={style.button}
                                        type={'button'}
                                        onClick={(e) => addInSuitCase(e, data)}
                                    >
                                        Добавить в портфель
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={style.block_buttons}>
                        <div className={style.block_buttons_left_block}>
                            <p className={style.block_buttons_left_block_text}>Просмотреть график за :</p>
                            <div className={style.block_buttons_left_block_buttons}>
                                <button className={style.button} type={'button'} onClick={() => setRange('d1')}>
                                    день
                                </button>
                                <button className={style.button} type={'button'} onClick={() => setRange('m1')}>
                                    месяц
                                </button>
                            </div>
                        </div>
                        <div>
                            <button className={style.button}>
                                <NavLink to={SHOP_ROUTE} className={style.button_text_back}>
                                    Вернуться на главную страницу
                                </NavLink>
                            </button>
                        </div>
                    </div>
                    <Chart id={id} range={range} />
                    <CoinWasAdded />
                </div>
            ) : null}
        </div>
    );
};

export default CoinPage;
