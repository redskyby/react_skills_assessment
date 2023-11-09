import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { COIN_ROUTE, SHOP_ROUTE } from '../utils/route_path';
import CoinsTable from './CoinsTable';
import CoinPage from '../page/CoinPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={SHOP_ROUTE} element={<CoinsTable />} />
            <Route path={COIN_ROUTE + '/:id'} element={<CoinPage />} />

            <Route path="*" element={<CoinsTable />} />
        </Routes>
    );
};

export default AppRoutes;
