import {FC, ReactNode, useState} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {ThemeSwitcher} from 'widgets/ThemeSwitcer'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
    children?: ReactNode
}

export const Sidebar: FC<SidebarProps> = (props: SidebarProps) => {
    const {className, children, ...otherProps} = props

    const [collapsed, setCollapsed] = useState(false)
    const onToggle = () => setCollapsed((prev) => !prev)

    return (
        <div
            className={classNames(cls['sidebar'], {[cls.collapsed]: collapsed}, [className])}
            {...otherProps}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                {/*<LangSwitcher className={cls.lang} />*/}
            </div>
        </div>
    )
}



























