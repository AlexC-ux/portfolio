import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import View from "./views/view";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { initialize } from "./components/tooltip/initialize";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <div className="">
                        <Routes>
                <Route path="/portfolio/build/" element={<View />} />                                               { /*   Главная страница                                                 */}
            </Routes>
            </div>
    </BrowserRouter >
);
initialize();
