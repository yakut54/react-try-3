import { useEffect } from 'react'

export function useInitialEffect(cb: () => void) {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      cb()
    }
  }, [])
}
