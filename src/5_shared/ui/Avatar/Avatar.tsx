import { CSSProperties, FC, useMemo } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
}

export const Avatar: FC<AvatarProps> = (props: AvatarProps) => {
  const {
    className, src, size, alt,
  } = props

  const styles = useMemo<CSSProperties>(() => ({
    width: `${size}px`,
    height: `${size}px`,
  }), [size])

  return (
    <img
      alt={alt}
      src={src}
      style={styles}
      className={classNames(cls.avatar, {}, [className])}
    />
  )
}
