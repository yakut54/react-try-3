import { render, screen } from '@testing-library/react'
import { Button, ButtonVariant } from '5_shared/ui/Button/Button'

describe('Button', () => {
  test('Test Render', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('Test Clear Theme', () => {
    render(<Button theme={ButtonVariant.CLEAR}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
  })
})
