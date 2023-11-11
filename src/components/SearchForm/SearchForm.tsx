import React, { useState } from 'react';
// // import { Form, FormGroup, ListGroup } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../redux/Store';
// // import { COIN_ROUTE } from '../../utils/RoutePath';
import style from './SearchForm.module.scss';
import searchIcon from '../../utils/imgIcon/searchIcon.svg';

const SearchForm = () => {
    // const history = useNavigate();
    const [coin, setCoin] = useState('');
    // const coins = useSelector((state: RootState) => state.isCoinToolkit.coins);

    const [showBackground, setShowBackground] = useState(false);

    const handleFormFocus = () => {
        setShowBackground(true);
    };

    const handleFormBlur = () => {
        setShowBackground(false);
        setTimeout(() => {
            setCoin('');
        }, 200);
    };

    // const filteredCoins = coin
    //     ? coins?.data
    //         ? coins.data.filter((coinSearch) => {
    //               const name = coinSearch.id.toLowerCase();
    //               return name.includes(coin.toLowerCase());
    //           })
    //         : []
    //     : [];
    //
    // const GoToCoinPage = (id: string): void => {
    //     setCoin('');
    //     history(COIN_ROUTE + `/${id}`);
    // };

    return (
        <div className={style.first_block}>
            {showBackground && <div className={style.second_block} />}
            {/*<Form onFocus={handleFormFocus} onBlur={handleFormBlur} className={style.form}>*/}
            {/*    <FormGroup>*/}
            {/*        <Form.Label>Поиск монеты по названию:</Form.Label>*/}
            {/*        <Form.Control*/}
            {/*            type={'text'}*/}
            {/*            placeholder={'Введите название'}*/}
            {/*            value={coin}*/}
            {/*            onChange={(e) => setCoin(e.target.value)}*/}
            {/*        />*/}
            {/*    </FormGroup>*/}
            {/*    <ListGroup className={style.listGroup}>*/}
            {/*        {filteredCoins.map((coin) => (*/}
            {/*            <ListGroup.Item*/}
            {/*                className={style.listGroup_item}*/}
            {/*                key={coin.id}*/}
            {/*                onClick={() => GoToCoinPage(coin.id)}*/}
            {/*            >*/}
            {/*                {coin.name}*/}
            {/*            </ListGroup.Item>*/}
            {/*        ))}*/}
            {/*    </ListGroup>*/}
            {/*</Form>*/}
            <form onFocus={handleFormFocus} onBlur={handleFormBlur} className={style.form}>
                <label htmlFor={'input_search'}>Поиск монеты по названию:</label>
                <input
                    className={style.input_search}
                    type="text"
                    placeholder={'Введите название'}
                    value={coin}
                    onChange={(e) => setCoin(e.target.value)}
                />
                <button className={style.button} type={'submit'}>
                    {searchIcon}
                </button>
            </form>
        </div>
    );
};

export default SearchForm;
