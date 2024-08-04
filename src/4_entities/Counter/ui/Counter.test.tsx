import { act, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { componentRender } from '5_shared/lib/tests/RenderWithRouter'
import { Counter } from './Counter'

describe('Counter', () => {
  it('displays initial value', async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } })
    expect(screen.getByTestId('value-title').textContent).toBe('10')
  })

  it('increments on click', async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } })
    await act(() => userEvent.click(screen.getByTestId('counter-increment')))
    expect(screen.getByTestId('value-title').textContent).toBe('11')
  })

  it('decrements on click', async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } })
    await act(() => userEvent.click(screen.getByTestId('counter-decrement')))
    await waitFor(() => {
      expect(screen.getByTestId('value-title').textContent).toBe('9')
    })
  })
})
