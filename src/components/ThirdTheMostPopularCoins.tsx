import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { CoinData } from '../redux/query/CoinQuery';
import SecondNumberAfterDot from '../utils/SecondNumberAfterDot';

const ThirdTheMostPopularCoins = () => {
    const coins = useSelector((state: RootState) => state.isCoinToolkit.coins);
    let firstThreeCoins: CoinData[] | undefined;

    if (coins.data !== undefined) {
        firstThreeCoins = coins.data.slice(0, 3);
    }

    return (
        <ListGroup>
            {firstThreeCoins?.map((item) => (
                <ListGroupItem key={item.id}>
                    {item.name} имеет цену: {SecondNumberAfterDot(item.priceUsd)}$
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};

export default ThirdTheMostPopularCoins;
