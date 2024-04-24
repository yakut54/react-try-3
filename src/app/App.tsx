import React, {Suspense} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTheme} from 'app/providers/ThemeProvider'
import {AppRouter} from 'app/providers/router'
import {useTranslation} from "react-i18next";
import {Sidebar} from 'widgets/Sidebar'
import {Navbar} from "widgets/Navbar"
import './styles/index.scss'

export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="__loading__">
                <Navbar/>
                <div className={'content-page'}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
}



















