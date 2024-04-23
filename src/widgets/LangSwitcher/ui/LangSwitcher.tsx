import React, {FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from "react-i18next"
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = (props: LangSwitcherProps) => {
    const {className} = props

    const {t, i18n} = useTranslation();
    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            className={classNames(cls['lang-switcher'], {}, [className])}
            onClick={toggle}
            theme={ButtonTheme.CLEAR}
        >
            {t('Перевод')}
        </Button>

    )
}