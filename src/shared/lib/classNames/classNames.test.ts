import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('some')).toBe('some')
  })

  test('with additional class', () => {
    const expected = 'some class1 class2'
    const result = classNames('some', {}, ['class1', 'class2'])
    expect(result).toBe(expected)
  })

  test('with mods', () => {
    const expected = 'some class1 class2 hovered scrollable'
    const result = classNames('some', { hovered: true, scrollable: true }, ['class1', 'class2'])
    expect(result).toBe(expected)
  })

  test('with mods false', () => {
    const expected = 'some class1 class2 hovered'
    const result = classNames('some', { hovered: true, scrollable: false }, ['class1', 'class2'])
    expect(result).toBe(expected)
  })

  test('with mods undefined', () => {
    const expected = 'some class1 class2 hovered'
    const result = classNames('some', { hovered: true, scrollable: undefined }, ['class1', 'class2'])
    expect(result).toBe(expected)
  })
})
