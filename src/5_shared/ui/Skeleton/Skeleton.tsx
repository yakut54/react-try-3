import { CSSProperties, FC, memo } from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import cls from './Skeleton.module.scss'

interface SkeletonProps {
    className?: string
    height?: number | string
    width?: number | string
    borderRadius?: string
}

export const Skeleton: FC<SkeletonProps> = memo((props: SkeletonProps) => {
  const {
    className,
    borderRadius,
    width,
    height,
  } = props

  const style: CSSProperties = {
    height, width, borderRadius,
  }

  return (
    <div
      className={classNames(cls.skeleton, {}, [className])}
      style={style}
    />
  )
})

Skeleton.displayName = 'skeleton'
