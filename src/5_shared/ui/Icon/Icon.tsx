import {
  FC, memo, SVGProps, VFC,
} from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

interface IconProps {
    className?: string
    Svg: VFC<SVGProps<SVGSVGElement>>
}

export const Icon: FC<IconProps> = memo((props: IconProps) => {
  const { className, Svg } = props

  return (
    <Svg
      className={classNames(cls.icon, {}, [className])}
    />
  )
})

Icon.displayName = 'icon'
