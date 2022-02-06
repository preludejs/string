import * as S from './index.js'

test('if-blank', () => {
  expect(S.ifBlank('', false)).toBe(false)
  expect(S.ifBlank('a', false)).toBe('a')
})
