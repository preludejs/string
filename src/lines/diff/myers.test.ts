import myers from './myers.js'
import { test, expect } from '@jest/globals'
import * as Op from './op.js'

function t(A: string[], B: string[]) {
  const diff = myers(A, B)
  try {
    Op.verify(A, B, diff)
  } catch (err) {
    console.error(err?.['message'] ?? err)
    console.error(Op.dump(A, B, diff))
    throw err
  }
  return Op.readable(diff)
}

test('simple', () => {
  const A = ['a', 'b', 'c', 'd']
  const B = ['a', 'x', 'c', 'y', 'd']
  expect(t(A, B)).toEqual(['  a', '- b', '+ x', '  c', '+ y', '  d'])
})

test('empty sequences', () => {
  const A: string[] = []
  const B: string[] = []
  expect(t(A, B)).toEqual([])
})

test('one sequence empty', () => {
  const A = ['a', 'b', 'c']
  const B: string[] = []
  expect(t(A, B)).toEqual(['- a', '- b', '- c'])

  const A2: string[] = []
  const B2 = ['x', 'y', 'z']
  expect(t(A2, B2)).toEqual(['+ x', '+ y', '+ z'])
})

test('identical sequences', () => {
  const A = ['a', 'b', 'c']
  const B = ['a', 'b', 'c']
  expect(t(A, B)).toEqual(['  a', '  b', '  c'])
})

test('no common elements', () => {
  const A = ['a', 'b', 'c']
  const B = ['x', 'y', 'z']
  expect(t(A, B)).toEqual(['- a', '- b', '- c', '+ x', '+ y', '+ z'])
})

test('single element sequences', () => {
  expect(t(['a'], ['a'])).toEqual(['  a'])
  expect(t(['a'], ['b'])).toEqual(['- a', '+ b'])
  expect(t(['a'], [])).toEqual(['- a'])
  expect(t([], ['b'])).toEqual(['+ b'])
})

test('repeated elements', () => {
  const A = ['a', 'b', 'a', 'c']
  const B = ['a', 'x', 'a', 'y']
  expect(t(A, B)).toEqual(['  a', '- b', '+ x', '  a', '- c', '+ y'])
})

test('leading or trailing changes', () => {
  const A1 = ['x', 'a', 'b', 'c']
  const B1 = ['a', 'b', 'c']
  expect(t(A1, B1)).toEqual(['- x', '  a', '  b', '  c'])

  const A2 = ['a', 'b', 'c']
  const B2 = ['a', 'b', 'c', 'y']
  expect(t(A2, B2)).toEqual(['  a', '  b', '  c', '+ y'])
})

test('multiple changes', () => {
  const A = ['a', 'b', 'c', 'd', 'e']
  const B = ['a', 'x', 'c', 'y', 'e']
  expect(t(A, B)).toEqual(['  a', '- b', '+ x', '  c', '- d', '+ y', '  e'])
})

test('subset sequences', () => {
  const A1 = ['a', 'b', 'c']
  const B1 = ['a', 'c']
  expect(t(A1, B1)).toEqual(['  a', '- b', '  c'])

  const A2 = ['a', 'c']
  const B2 = ['a', 'b', 'c']
  expect(t(A2, B2)).toEqual(['  a', '+ b', '  c'])
})

test('special characters', () => {
  const A = ['', 'a', ' ', 'b']
  const B = ['a', '', 'b', ' ']
  expect(t(A, B)).toEqual(['- ', '  a', '-  ', '+ ', '  b', '+  '])
})

// Test Case 12: Long Unchanged Segment with Small Changes
test('long unchanged segment with small changes', () => {
  const A = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
  const B = ['a', 'b', 'x', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
  expect(t(A, B)).toEqual(['  a', '  b', '- c', '+ x', '  d', '  e', '  f', '  g', '  h', '  i', '  j', '  k'])
})

// Test Case 13: Interleaved Insertions and Deletions
test('interleaved insertions and deletions', () => {
  const A = ['a', 'b', 'c', 'd']
  const B = ['x', 'a', 'y', 'b', 'z', 'd']
  expect(t(A, B)).toEqual(['+ x', '  a', '+ y', '  b', '- c', '+ z', '  d'])
})

// Test Case 14: Alternating Pattern
test('alternating pattern', () => {
  const A = ['a', 'b', 'a', 'b', 'a', 'b']
  const B = ['b', 'a', 'b', 'a', 'b', 'a']
  expect(t(A, B)).toEqual(['- a', '  b', '  a', '  b', '  a', '  b', '+ a'])
})

// Test Case 15: Single Change in Middle of Long Sequence
test('single change in middle of long sequence', () => {
  const A = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  const B = ['1', '2', '3', '4', 'x', '6', '7', '8', '9', '10']
  expect(t(A, B)).toEqual(['  1', '  2', '  3', '  4', '- 5', '+ x', '  6', '  7', '  8', '  9', '  10'])
})

// Test Case 16: All Elements Identical Except One Insertion
test('all elements identical except one insertion', () => {
  const A = ['a', 'b', 'c', 'd']
  const B = ['a', 'b', 'x', 'c', 'd']
  expect(t(A, B)).toEqual(['  a', '  b', '+ x', '  c', '  d'])
})

// Test Case 17: Sequences with Only Whitespace Differences
test('sequences with only whitespace differences', () => {
  const A = ['hello', ' world', 'foo ']
  const B = ['hello ', 'world', ' foo']
  expect(t(A, B)).toEqual(['- hello', '-  world', '- foo ', '+ hello ', '+ world', '+  foo'])
})

// Test Case 18: Very Short vs Very Long Sequence
test('very short vs very long sequence', () => {
  const A = ['a']
  const B = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  expect(t(A, B)).toEqual(['  a', '+ b', '+ c', '+ d', '+ e', '+ f', '+ g', '+ h', '+ i', '+ j'])
})

// Test Case 19: Sequences with Duplicate Blocks
test('sequences with duplicate blocks', () => {
  const A = ['a', 'b', 'a', 'b', 'c']
  const B = ['a', 'b', 'c', 'a', 'b']
  expect(t(A, B)).toEqual(['  a', '  b', '+ c', '  a', '  b', '- c'])
})

// Test Case 20: Random Noise Between Matching Ends
test('random noise between matching ends', () => {
  const A = ['start', 'x', 'y', 'z', 'end']
  const B = ['start', 'p', 'q', 'end']
  expect(t(A, B)).toEqual(['  start', '- x', '- y', '- z', '+ p', '+ q', '  end'])
})
