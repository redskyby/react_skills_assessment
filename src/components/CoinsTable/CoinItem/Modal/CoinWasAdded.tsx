import React, { useEffect } from 'react';
import style from './CoinWasAdded.module.scss';

const CoinWasAdded = ({
    isVisible,
    setIsVisible,
}: {
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={isVisible ? style.show : style.hidden}>
            <p>Монета добавлена в портфель!</p>
        </div>
    );
};

export default CoinWasAdded;
