import React, {Component, Suspense} from 'react';
import './index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async"

export class App extends Component {
    render() {
        return (
            <div className={'app'}>
                <Link to={'/'}>Главная</Link>
                <Link to={'/about'}>О проекте</Link>

                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={'/about'} element={<AboutPageAsync/>}/>
                        <Route path={'/'} element={<MainPageAsync/>}/>
                    </Routes>
                </Suspense>
            </div>
        );
    }
}




















