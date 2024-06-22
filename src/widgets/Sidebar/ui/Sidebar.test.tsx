import { fireEvent, screen, waitFor } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { componentRender } from 'shared/lib/tests/RenderWithRouter'

describe('Sidebar', () => {
  test('Test Render', () => {
    componentRender(<Sidebar />, { route: '/' })
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
  })

  test('Test Toggle Sidebar', async () => {
    componentRender(<Sidebar />, { route: '/' })
    const toggleBtn = screen.getByTestId('sidebar-toggle')

    // Проверяем начальное состояние
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')

    // Клик для сворачивания
    fireEvent.click(toggleBtn)
    await waitFor(() => {
      expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })

    // Клик для разворачивания
    fireEvent.click(toggleBtn)
    await waitFor(() => {
      expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
    })
  })
})
