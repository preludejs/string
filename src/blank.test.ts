import * as S from './index.js'

test('blank', () => {
  expect(S.blank('')).toBe(true)
  expect(S.blank(' \t\n')).toBe(true)
  expect(S.blank(' a')).toBe(false)
})
