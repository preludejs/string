import levenshtein from './levenshtein.js'
import { test, expect } from '@jest/globals'

test('simple', () => {
  expect(levenshtein('kitten', 'sitting')).toBe(3)
  expect(levenshtein('sunday', 'saturday')).toBe(3)
  expect(levenshtein('cat', 'cut')).toBe(1)
  expect(levenshtein('', 'test')).toBe(4)
  expect(levenshtein('book', 'book')).toBe(0)
})
