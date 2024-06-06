import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import './Loader.scss'

interface LoaderProps {
    className?: string
}

export const Loader: FC<LoaderProps> = (props: LoaderProps) => {
  const { className, ...otherProps } = props

  return (
    <div
      className={classNames('lds-spinner', {}, [className])}
      {...otherProps}
    >
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
