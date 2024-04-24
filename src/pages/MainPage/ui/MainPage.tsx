import React from 'react';
import {useTranslation} from "react-i18next";

const MainPage = () => {
    const {t} = useTranslation('main');

    return (
        <div>
            <h1>{t('Главная страница')}</h1>
            {/*<p>{t('спец-ключ', {ns: 'main'})}</p>*/}
        </div>
    );
};

export default MainPage;