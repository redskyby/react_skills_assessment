import React from 'react';
import {Container, Navbar} from "react-bootstrap";
import SearchForm from "./SearchForm";
import ThirdTheMostPopularCoins from "./ThirdTheMostPopularCoins";
import CallTheModalWindow from "./CallTheModalWindow";

const NavBar = () => {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <ThirdTheMostPopularCoins/>
                <CallTheModalWindow/>
                <SearchForm/>
            </Container>
        </Navbar>
    );
};

export default NavBar;