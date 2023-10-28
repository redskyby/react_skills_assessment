import React from 'react';
import {Container, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/route_path";

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink to={SHOP_ROUTE}>Вернуться на главную страницу</NavLink>
            </Container>
        </Navbar>
    );
};

export default NavBar;