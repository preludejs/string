import truncate from './truncate.js'

describe('truncate', () => {
  test('returns the original string if shorter than length', () => {
    expect(truncate('hello', 10)).toBe('hello')
  })

  test('returns the original string if equal to length', () => {
    expect(truncate('hello', 5)).toBe('hello')
  })

  test('truncates the string and adds suffix if longer than length', () => {
    expect(truncate('hello world', 8)).toBe('hello...')
  })

  test('uses custom suffix when provided', () => {
    expect(truncate('hello world', 7, '.')).toBe('hello.')
  })

  test('handles empty string', () => {
    expect(truncate('', 5)).toBe('')
  })

  test('handles zero length', () => {
    expect(truncate('hello', 0)).toBe('...')
  })

  test('handles negative length', () => {
    expect(truncate('hello', -5)).toBe('...')
  })

  test('handles length less than suffix length', () => {
    expect(truncate('hello', 2, '...')).toBe('...')
  })
})