import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COIN_ROUTE } from '../../../utils/RoutePath';
import secondNumberAfterDot from '../../../utils/SecondNumberAfterDot';
import icon from '../../../utils/imgIcon/favicon.png';
import { useDispatch } from 'react-redux';
import { ADD_IN_ONE_SUIT } from '../../../redux/slice/SuitCaseSlice';
import CoinWasAdded from './Modal/CoinWasAdded';
import style from './CoinItem.module.scss';

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

const CoinItem = ({ data }: { data: CoinData }) => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);

    function showPageOfCoin(e: React.MouseEvent, id: string): void {
        e.preventDefault();
        history(COIN_ROUTE + '/' + id);
    }

    function addInSuitCase(e: React.MouseEvent, data: CoinData) {
        e.stopPropagation();
        dispatch(ADD_IN_ONE_SUIT(data));
        setIsVisible(true);
    }

    return (
        <tr onClick={(e) => showPageOfCoin(e, data.id)}>
            <td className={style.text_align_center}>
                <img src={icon} alt="Изображение монеты" />
            </td>
            <td className={style.text_align_center}>{data.symbol}</td>
            <td className={style.text_align_center}>{secondNumberAfterDot(data.priceUsd)}</td>
            <td className={style.text_align_center}>{secondNumberAfterDot(data.marketCapUsd)}</td>
            <td className={style.text_align_center}>{secondNumberAfterDot(data.changePercent24Hr)}</td>
            <td className={style.text_align_center}>
                <button className={style.button} type={'button'} onClick={(e) => addInSuitCase(e, data)}>
                    Добавить в портфель
                </button>
            </td>

            {isVisible && <CoinWasAdded isVisible={isVisible} setIsVisible={setIsVisible} />}
        </tr>
    );
};

export default CoinItem;
