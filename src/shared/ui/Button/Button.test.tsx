import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

describe('Button', () => {
  test('Test Render', () => {
    render(<Button>123</Button>)
    expect(screen.getByText('123')).toBeInTheDocument()
  })

  test('Test Clear Theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>123</Button>)
    expect(screen.getByText('123')).toHaveClass('clear')
    screen.debug()
  })
})
