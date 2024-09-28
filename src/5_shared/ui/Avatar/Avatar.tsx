import { CSSProperties, FC, useMemo } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import AvatarJPG from '5_shared/assets/test/avatar.jpg'
import cls from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
}

export const Avatar: FC<AvatarProps> = (props: AvatarProps) => {
  const {
    className,
    src,
    size,
    alt = 'avatar',
  } = props

  const styles = useMemo<CSSProperties>(() => ({
    width: `${size}px`,
    height: `${size}px`,
  }), [size])

  const avatarSrc = src || AvatarJPG

  return (
    <img
      alt={alt}
      src={avatarSrc}
      style={styles}
      className={classNames(cls.avatar, {}, [className])}
    />
  )
}
