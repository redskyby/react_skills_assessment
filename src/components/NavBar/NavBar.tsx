import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import ThirdTheMostPopularCoins from '../ThirdTheMostPopularCoins';
import CallTheModalWindow from '../CallTheModalWindow/CallTheModalWindow';
import style from './NavBar.module.scss';

const NavBar = () => {
    return (
        // <Navbar expand="lg" className="bg-body-tertiary">
        //     <Container>
        //         <ThirdTheMostPopularCoins />
        //         <CallTheModalWindow />
        //         <SearchForm />
        //     </Container>
        // </Navbar>
        <div className={style.navbar}>
            <ThirdTheMostPopularCoins />
            <CallTheModalWindow />
            <SearchForm />
        </div>
    );
};

export default NavBar;
