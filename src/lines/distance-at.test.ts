import { test, expect } from '@jest/globals'
import distanceAt from './distance-at.js'

test('distanceAt', () => {
  expect(distanceAt(['hello', 'world'], 0, ['world'])).toEqual(4)
  expect(distanceAt(['hello', 'world'], 1, ['world'])).toEqual(0)
})
