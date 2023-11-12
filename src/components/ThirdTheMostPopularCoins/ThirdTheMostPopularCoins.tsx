import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/Store';
import { CoinData } from '../../redux/query/CoinQuery';
import SecondNumberAfterDot from '../../utils/SecondNumberAfterDot';
import style from './ThirdTheMostPopularCoins.module.scss';

const ThirdTheMostPopularCoins = () => {
    const coins = useSelector((state: RootState) => state.isCoinToolkit.coins);
    let firstThreeCoins: CoinData[] | undefined;

    if (coins.data !== undefined) {
        firstThreeCoins = coins.data.slice(0, 3);
    }

    return (
        // <ListGroup>
        //     {firstThreeCoins?.map((item) => (
        //         <ListGroupItem key={item.id}>
        //             {item.name} имеет цену: {SecondNumberAfterDot(item.priceUsd)}$
        //         </ListGroupItem>
        //     ))}
        // </ListGroup>

        <ul className={style.list}>
            {firstThreeCoins?.map((item) => (
                <li key={item.id} className="your-list-item">
                    {item.name} имеет цену: {SecondNumberAfterDot(item.priceUsd)}$
                </li>
            ))}
        </ul>
    );
};

export default ThirdTheMostPopularCoins;
