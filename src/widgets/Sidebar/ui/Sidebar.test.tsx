<<<<<<< HEAD
import { act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
=======
import { fireEvent, screen, waitFor } from '@testing-library/react'
>>>>>>> origin/master
import { Sidebar } from 'widgets/Sidebar'
import { componentRender } from 'shared/lib/tests/RenderWithRouter'

describe('Sidebar', () => {
<<<<<<< HEAD
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
=======
  test('Test Render', () => {
    componentRender(<Sidebar />, { route: '/' })
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
>>>>>>> origin/master
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
