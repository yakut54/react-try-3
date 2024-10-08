import { MutableRefObject, useCallback, useRef } from 'react'

// eslint-disable-next-line no-unused-vars
export function useDebounce(callback: (...arg: any[]) => void, delay: number) {
  const timer = useRef() as MutableRefObject<any>

  return useCallback((...arg: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    timer.current = setTimeout(() => {
      callback(...arg)
    }, delay)
  }, [callback, delay])
}
