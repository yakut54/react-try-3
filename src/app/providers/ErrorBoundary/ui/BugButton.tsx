import { FC, useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'

// Компонент для тестирования ErrorBoundary
export const BugButton: FC = () => {
  const [error, setError] = useState(false)

  const onThrow = () => {
    setError(true)
  }

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <Button
      onClick={onThrow}
    >
      -1-2-3-4-5-
    </Button>
  )
}
