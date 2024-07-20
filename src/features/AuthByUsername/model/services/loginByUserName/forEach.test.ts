import { Callback, forEach, ForEachProps } from './forEach'

describe('ForEachTest', () => {
  it('should call callback for each item in the array', () => {
    const mockCallback: Callback = jest.fn(() => false)
    const items = [1, 2, 3]

    const option: ForEachProps = {
      items,
      callback: mockCallback,
    }

    forEach(option)
    expect(option.callback).toHaveBeenCalledTimes(items.length)
  })

  it('Тест на вызов функции myFunction', () => {
    const myFunction = jest.fn()

    myFunction(1)

    expect(myFunction).toHaveBeenCalledTimes(1)
    expect(myFunction).toHaveBeenCalledWith(1)
  })
})
