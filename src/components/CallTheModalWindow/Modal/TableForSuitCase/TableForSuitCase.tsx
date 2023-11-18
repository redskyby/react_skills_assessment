import React from 'react';
import icon from '../../../../utils/imgIcon/favicon.png';
import secondNumberAfterDot from '../../../../utils/SecondNumberAfterDot';
import { CoinData } from '../../../../redux/query/CoinQuery';
import { useDispatch } from 'react-redux';
import { REMOVE_ONE_COIN_FROM_SUIT } from '../../../../redux/slice/SuitCaseSlice';
import style from './TableForSuitCase.module.scss';

const TableForSuitCase = ({ data }: { data: CoinData }) => {
    const dispatch = useDispatch();

    return (
        <tr>
            <td className={style.text_center}>
                <img src={icon} alt="icon" />
            </td>
            <td className={style.text_center}>{data.id}</td>
            <td className={style.text_center}>{data.symbol}</td>
            <td className={style.text_center}>{data.rank}</td>
            <td className={style.text_center}>{secondNumberAfterDot(data.supply)}</td>
            <td className={style.text_center}>{secondNumberAfterDot(data.priceUsd)}</td>
            <td className={style.text_center}>{secondNumberAfterDot(data.marketCapUsd)}</td>
            <td className={style.text_center}>{secondNumberAfterDot(data.maxSupply)}</td>
            <td className={style.text_center}>
                <button
                    className={style.button}
                    type={'button'}
                    onClick={() => dispatch(REMOVE_ONE_COIN_FROM_SUIT(data))}
                >
                    Удалить из портфеля
                </button>
            </td>
        </tr>
    );
};

export default TableForSuitCase;
