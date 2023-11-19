import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COIN_ROUTE } from '../../utils/RoutePath';
import style from './SearchForm.module.scss';
import favicon from '../../utils/imgIcon/searchIcon.svg';
import { useGetOneCoinQuery } from '../../redux/query/CoinQuery';

const SearchForm = () => {
    const history = useNavigate();
    const [coin, setCoin] = useState('');
    const [info, setInfo] = useState(false);
    const { data } = useGetOneCoinQuery(coin);

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (data !== undefined) {
            setInfo(false);
            history(COIN_ROUTE + `/${data?.data?.id}`);
        }
        handleFormBlur();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        setCoin(e.target.value);
        if (data !== undefined) {
            setInfo(true);
        }
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
            <form
                onFocus={handleFormFocus}
                onBlur={handleFormBlur}
                className={style.form}
                onSubmit={(e) => handleSubmit(e)}
            >
                <label htmlFor={'input_search'}>Поиск монеты по названию:</label>
                <div className={style.form_input_button}>
                    <input
                        className={style.input_search}
                        type="text"
                        placeholder={'Введите название'}
                        value={coin}
                        onChange={(e) => handleChange(e)}
                    />
                    <button className={style.button} type={'submit'}>
                        <img src={favicon} alt="favicon" />
                    </button>
                </div>
            </form>
            {info && <p>монета найдена</p>}
        </div>
    );
};

export default SearchForm;
