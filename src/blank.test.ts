import * as S from './index.js'

test('blank', () => {
  expect(S.isBlank('')).toBe(true)
  expect(S.isBlank(' \t\n')).toBe(true)
  expect(S.isBlank(' a')).toBe(false)
})
