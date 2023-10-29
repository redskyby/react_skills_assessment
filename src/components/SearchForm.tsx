import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const SearchForm = () => {
    const history = useNavigate();
    const [coin , setCoin] = useState('');

    return (
        <Form>
            <Form.Label>Поиск монеты по названию</Form.Label>
            <Form.Control
                type={'text'}
                placeholder={'Введите название монеты'}
                value={coin}
                
            />
        </Form>
    );
};

export default SearchForm;