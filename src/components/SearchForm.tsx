import React, {useState} from 'react';
import {Form, FormGroup, ListGroup} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {COIN_ROUTE} from "../utils/route_path";

const SearchForm = () => {
    const history = useNavigate();
    const [coin, setCoin] = useState('');
    const coins = useSelector((state: RootState) => state.isCoinToolkit.coins);

    const filteredCoins = coin
        ? coins?.data
            ? coins.data.filter((coinSearch) => {
                const name = coinSearch.id.toLowerCase();
                return name.includes(coin.toLowerCase());
            })
            : []
        : [];


    const GoToCoinPage = (id: string): void => {
        setCoin('');
        history(COIN_ROUTE + `/${id}`);
    }

    return (
            <Form style={{'position': 'relative'}}>
                <FormGroup controlId={'searchForm'}>
                    <Form.Label>Поиск монеты по названию</Form.Label>
                    <Form.Control
                        type={'text'}
                        placeholder={'Введите название'}
                        value={coin}
                        onChange={(e) => setCoin(e.target.value)}
                    />
                </FormGroup>
                    <ListGroup style={{'position': 'absolute', 'top': '110%'}}>
                        {filteredCoins.map((coin) => (
                            <ListGroup.Item style={{cursor: 'pointer'}}
                                            key={coin.id}
                                            onClick={() => GoToCoinPage(coin.id)}
                            >{coin.name}</ListGroup.Item>
                        ))}
                    </ListGroup>
            </Form>
)
    ;
};

export default SearchForm;