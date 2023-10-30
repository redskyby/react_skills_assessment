import React from 'react';
import {Image, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {COIN_ROUTE} from "../utils/route_path";
import secondNumberAfterDot from "../utils/secondNumberAfterDot";
import icon from "../utils/imgIcon/favicon.png";

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

    const history = useNavigate();

    function showPageOfCoin(e: any, id: string): void {
        e.preventDefault();
        history(COIN_ROUTE + '/' + id);

    }

    return (
        <tr onClick={e => showPageOfCoin(e, data.id)}>
            <td>
                <Image src={icon}/>
            </td>
            <td>
                {data.symbol}
            </td>
            <td>
                {secondNumberAfterDot(data.priceUsd)}
            </td>
            <td>
                {secondNumberAfterDot(data.marketCapUsd)}
            </td>
            <td>
                {secondNumberAfterDot(data.marketCapUsd)}
            </td>
            <td>
                <Button
                    type={'button'}
                >Добавить в портфель</Button>
            </td>
        </tr>

    );
};

export default CoinItem;