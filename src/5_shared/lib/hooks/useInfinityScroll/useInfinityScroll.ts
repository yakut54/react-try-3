import { MutableRefObject, useEffect } from 'react'

export interface UseInfinityScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLDivElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfinityScroll({ callback, wrapperRef, triggerRef }: UseInfinityScrollOptions) {
  useEffect(() => {
    const triggerElement = triggerRef.current
    const wrapperElement = wrapperRef.current

    const options = {
      root: wrapperElement,
      rootMargin: '0px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (callback) {
          callback()
        }
      }
    }, options)

    if (triggerElement) {
      observer.observe(triggerElement)
    }

    return () => {
      if (observer.unobserve && triggerElement) {
        observer.unobserve(triggerElement)
      }
    }
  }, [callback, wrapperRef, triggerRef])
}
