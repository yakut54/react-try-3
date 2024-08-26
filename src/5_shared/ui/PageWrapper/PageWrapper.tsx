import {
  FC, memo, MutableRefObject, ReactNode, useRef,
} from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useInfinityScroll } from '5_shared/lib/hooks/useInfinityScroll/useInfinityScroll'
import cls from './PageWrapper.module.scss'

interface PageWrapperProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const PageWrapper: FC<PageWrapperProps> = memo((props: PageWrapperProps) => {
  const { className, children, onScrollEnd } = props
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

  useInfinityScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  })

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls['page-wrapper'], {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  )
})

PageWrapper.displayName = 'PageWrapper'
