import React, { useEffect } from 'react';
import style from './CoinWasAdded.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/Store';
import { SET_SHOW } from '../../../../redux/slice/CoinWasAddedSlice';

const CoinWasAdded = () => {
    const show: boolean = useSelector((state: RootState) => state.isCoinWasAddedToolkit.show);
    const dispatch = useDispatch();
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(SET_SHOW(false));
        }, 2000);

        return () => clearTimeout(timer);
    }, [show]);

    return (
        <div className={show ? style.show : style.hidden}>
            <p>Монета добавлена в портфель!</p>
        </div>
    );
};

export default CoinWasAdded;
