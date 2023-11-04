import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {CoinData } from "../redux/query/CoinQuery";
import secondNumberAfterDot from "../utils/secondNumberAfterDot";

const ThirdTheMostPopularCoins = () => {
    const coins = useSelector((state: RootState) => state.isCoinToolkit.coins);
    let firstThreeCoins: CoinData[] | undefined;

    if(coins.data !== undefined){
        firstThreeCoins = coins.data.slice(0 , 3);
    }

    return (
        <ListGroup>
            {
                firstThreeCoins?.map((item) =>
                    <ListGroupItem key={item.id}>{item.name} имеет цену: {secondNumberAfterDot(item.priceUsd)}$</ListGroupItem>
                )
            }
        </ListGroup>
    );
};

export default ThirdTheMostPopularCoins;