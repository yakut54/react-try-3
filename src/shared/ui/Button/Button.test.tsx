import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

describe('Button', () => {
  test('Button In The Document', () => {
    render(<Button>123</Button>)
    expect(screen.getByText('123')).toBeInTheDocument()
  })

  test('Button To Have Class', () => {
    render(<Button theme={ButtonTheme.CLEAR}>123</Button>)
    expect(screen.getByText('123')).toHaveClass('clear')
    screen.debug()
  })
})
