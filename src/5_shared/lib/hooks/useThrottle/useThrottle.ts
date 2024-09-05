import { useCallback, useRef } from 'react'

// eslint-disable-next-line no-unused-vars
export function useThrottle(cb: (...args: any[]) => void, delay: number = 100) {
  const throttleRef = useRef<boolean>(false)

  return useCallback((...args: any[]) => {
    if (!throttleRef.current) {
      cb(...args)
      throttleRef.current = true

      setTimeout(() => {
        throttleRef.current = false
      }, delay)
    }
  }, [cb, delay])
}
