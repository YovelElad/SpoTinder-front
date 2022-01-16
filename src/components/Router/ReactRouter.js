import React from 'react';
import {Route,Routes} from 'react-router-dom';
import App from '../../App';

export default function ReactRouter() {
    return (
        <Routes>
            <Route exact path="/" element={<App />} />
        </Routes>
    )
}
