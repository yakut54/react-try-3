import React from 'react';
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import './styles/index.scss';


export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOOGLE</button>

            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О проекте</Link>

            <AppRouter />
        </div>
    );
}




















