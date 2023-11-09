import React from 'react';
import { Form } from 'react-bootstrap';

const SortForm = ({ setSort }: { setSort: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <Form.Select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setSort(e.target.value);
            }}
            className={'mt-3'}
        >
            <option>Сортировать по:</option>
            <option value="1">цене</option>
            <option value="2">рыночной капитализации</option>
            <option value="3">изменению за 24ч</option>
        </Form.Select>
    );
};

export default SortForm;
