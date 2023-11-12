import React, { useState } from 'react';
import Suitcase from './Modal/Suitcase';
import style from './CallTheModalWindow.module.scss';

const CallTheModalWindow = () => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <div className={style.modal}>
            <button className={style.modal_button} type={'button'} onClick={() => setShow(true)}>
                Личный портфель пользователя
            </button>
            <Suitcase show={show} setShow={setShow} />
        </div>
    );
};

export default CallTheModalWindow;
