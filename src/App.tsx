import React from 'react';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";
import style from './App.module.css';

function App() {
    return (
        <BrowserRouter>
            <div className={style.reset}>
                <NavBar/>
                <AppRoutes/>
            </div>
        </BrowserRouter>
    );
}

export default App;
