import React from 'react';
import {Button, Image} from "react-bootstrap";
import icon from "../../utils/imgIcon/favicon.png";
import secondNumberAfterDot from "../../utils/secondNumberAfterDot";
import {CoinData} from "../../redux/query/CoinQuery";

const TableForSuitCase = ({data}: { data: CoinData }) => {
    return (
        <tr>
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
                    ///тут функция удаления
                >Удалить из портфеля</Button>
            </td>
        </tr>
    );
};

export default TableForSuitCase;