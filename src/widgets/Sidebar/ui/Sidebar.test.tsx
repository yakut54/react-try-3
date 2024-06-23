import { act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from 'widgets/Sidebar'
import { componentRender } from 'shared/lib/tests/RenderWithRouter'

describe('Sidebar', () => {
  test('Test Render', async () => {
    componentRender(<Sidebar />, { route: '/' })
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
  })

  test('Test Toggle Sidebar', async () => {
    componentRender(<Sidebar />, { route: '/' })
    const toggleBtn = screen.getByTestId('sidebar-toggle')

    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')

    await act(() => userEvent.click(toggleBtn))
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')

    await act(() => userEvent.click(toggleBtn))
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
  })
})
