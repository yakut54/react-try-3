import React from 'react'
import '@testing-library/jest-dom'
import { useInfinityScroll } from '5_shared/lib/hooks/useInfinityScroll/useInfinityScroll'
import { componentRender } from '5_shared/lib/tests/RenderWithRouter'
import { PageWrapper } from './PageWrapper'

jest.mock('5_shared/lib/hooks/useInfinityScroll/useInfinityScroll')
const mockedUseInfinityScroll = useInfinityScroll as jest.Mock

describe('PageWrapper', () => {
  test('calls onScrollEnd when end of scroll is reached', () => {
    const onScrollEndMock = jest.fn()

    componentRender(
      <PageWrapper onScrollEnd={onScrollEndMock}>
        <div>Content</div>
      </PageWrapper>,
    )

    // Получаем первый вызов мока и его аргументы
    const mockCall = mockedUseInfinityScroll.mock.calls[0][0]

    // Проверяем, что колбэк передан в хук
    expect(mockCall.callback).toBe(onScrollEndMock)

    // Имитация вызова колбэка
    mockCall.callback()

    // Проверяем, что колбэк был вызван
    expect(onScrollEndMock).toHaveBeenCalled()
  })
})
