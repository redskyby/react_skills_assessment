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
            <td className={'align-middle text-center'}>
                <Image src={icon}/>
            </td>
            <td className={'align-middle text-center'}>
                {data.id}
            </td>
            <td className={'align-middle text-center'}>
                {data.symbol}
            </td>
            <td className={'align-middle text-center'}>
                {data.rank}
            </td>
            <td className={'align-middle text-center'}>
                {secondNumberAfterDot(data.supply)}
            </td>
            <td className={'align-middle text-center'}>
                {secondNumberAfterDot(data.priceUsd)}
            </td>
            <td className={'align-middle text-center'}>
                {secondNumberAfterDot(data.marketCapUsd)}
            </td>
            <td className={'align-middle text-center'}>
                {secondNumberAfterDot(data.maxSupply)}
            </td>

            <td className={'align-middle text-center'}>
                <Button
                    type={'button'}
                    onClick={()=> dispatch(REMOVE_ONE_COIN_FROM_SUIT(data))}
                >Удалить из портфеля</Button>
            </td>
        </tr>
    );
};

export default TableForSuitCase;