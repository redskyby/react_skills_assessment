import React, {useState} from 'react';
import Suitcase from "./modal/Suitcase";
import {Button} from "react-bootstrap";

const CallTheModalWindow = () => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <div className={'mt-3'}>
            <Button
                type={'button'}
                onClick={() => setShow(true)}
            >Личный портфель пользователя</Button>
            <Suitcase show={show} setShow={setShow}/>
        </div>
    );
};

export default CallTheModalWindow;