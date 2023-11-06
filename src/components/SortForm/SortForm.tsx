import React from 'react';
import {Form} from "react-bootstrap";

const SortForm = (setSort:  React.Dispatch<React.SetStateAction<string>>, sort : string) => {

    return (
        <Form.Select>
            <option>Сортировать по:</option>
            <option value="1">цене</option>
            <option value="2">рыночной капитализации</option>
            <option value="3">изменению за 24ч</option>
        </Form.Select>
    );
};

export default SortForm;