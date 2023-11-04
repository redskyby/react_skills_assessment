import React from 'react';
import {Button, Image} from "react-bootstrap";
import icon from "../../utils/imgIcon/favicon.png";
import secondNumberAfterDot from "../../utils/secondNumberAfterDot";
import {CoinData} from "../../redux/query/CoinQuery";
import {useDispatch} from "react-redux";
import {REMOVE_ONE_COIN_FROM_SUIT} from "../../redux/slice/SuitCaseSlice";

const TableForSuitCase = ({data}: { data: CoinData }) => {
    const dispatch = useDispatch();

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
                    onClick={()=> dispatch(REMOVE_ONE_COIN_FROM_SUIT(data))}
                >Удалить из портфеля</Button>
            </td>
        </tr>
    );
};

export default TableForSuitCase;