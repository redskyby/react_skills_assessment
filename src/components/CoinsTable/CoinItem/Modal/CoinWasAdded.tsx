import React, { useEffect } from 'react';
import style from './CoinWasAdded.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/Store';
import { SET_SHOW } from '../../../../redux/slice/CoinWasAddedSlice';
import { HIDDEN_TWICE_COIN_MODAL } from '../../../../redux/slice/SuitCaseSlice';

const CoinWasAdded = () => {
    const show: boolean = useSelector((state: RootState) => state.isCoinWasAddedToolkit.show);
    const twice = useSelector((state: RootState) => state.isSuitCaseToolkit.twice);
    const dispatch = useDispatch();
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(SET_SHOW(false));
            dispatch(HIDDEN_TWICE_COIN_MODAL(false));
        }, 2000);

        return () => clearTimeout(timer);
    }, [show]);

    return (
        <div className={show ? style.show : style.hidden}>
            {twice ? <p>Такая монета уже есть!</p> : <p>Монета добавлена в портфель!</p>}
        </div>
    );
};

export default CoinWasAdded;
