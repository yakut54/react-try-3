import {
  FC, memo, MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react'
import { classNames } from '5_shared/lib/classNames/classNames'
import { useInfinityScroll } from '5_shared/lib/hooks/useInfinityScroll/useInfinityScroll'
import { useAppDispatch, useAppSelector } from '5_shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUIScrollByPath, uiActions } from '3_features/UI'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from '5_shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useThrottle } from '5_shared/lib/hooks/useThrottle/useThrottle'
import cls from './PageWrapper.module.scss'

interface PageWrapperProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const PageWrapper: FC<PageWrapperProps> = memo((props: PageWrapperProps) => {
  const { className, children, onScrollEnd } = props
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollPosition = useAppSelector((state) => getUIScrollByPath(state, pathname))

  useInfinityScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  })

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })

  const onScroll = useThrottle((e: UIEvent<HTMLElement>) => {
    dispatch(uiActions.setScrollPosition({ path: pathname, position: e.currentTarget.scrollTop }))
  }, 200)

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls['page-wrapper'], {}, [className])}
      onScroll={onScroll}
    >
      {children}
      <div
        ref={triggerRef}
        // style={{ width: 100, height: 2, backgroundColor: 'red' }}
      />
    </section>
  )
})

PageWrapper.displayName = 'PageWrapper'
