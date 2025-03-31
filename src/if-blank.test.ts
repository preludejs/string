import * as S from './index.js'

test('ifBlank', () => {
  expect(S.ifBlank('', () => false)).toBe(false)
  expect(S.ifBlank('a', () => false)).toBe('a')
})
