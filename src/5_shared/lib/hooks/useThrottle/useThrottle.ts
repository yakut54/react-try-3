import { useCallback, useRef } from 'react'

export function useThrottle(
  // eslint-disable-next-line no-unused-vars
  cb: (...args: any[]) => void,
  delay: number = 100,
) {
  const throttleRef = useRef(false)

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
