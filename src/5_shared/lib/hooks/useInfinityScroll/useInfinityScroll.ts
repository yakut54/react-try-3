import { MutableRefObject, useEffect } from 'react'

export interface UseInfinityScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLDivElement>;
    wrapperRef: MutableRefObject<HTMLDivElement>;
}

export function useInfinityScroll({ callback, wrapperRef, triggerRef }: UseInfinityScrollOptions) {
  useEffect(() => {
    const options = {
      root: wrapperRef.current,
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

    const triggerElement = triggerRef.current

    if (triggerElement) {
      observer.observe(triggerElement)
    }

    return () => {
      if (triggerElement) {
        observer.unobserve(triggerElement)
      }
    }
  }, [callback, wrapperRef, triggerRef])
}
