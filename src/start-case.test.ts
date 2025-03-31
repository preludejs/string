import startCase from './start-case.js'

describe('startCase', () => {
  test('converts camelCase to Start Case', () => {
    expect(startCase('camelCase')).toBe('Camel Case')
  })

  test('converts PascalCase to Start Case', () => {
    expect(startCase('PascalCase')).toBe('Pascal Case')
  })

  test('converts kebab-case to Start Case', () => {
    expect(startCase('kebab-case')).toBe('Kebab Case')
  })

  test('converts snake_case to Start Case', () => {
    expect(startCase('snake_case')).toBe('Snake Case')
  })

  test('converts space separated to Start Case', () => {
    expect(startCase('space separated')).toBe('Space Separated')
  })

  test('handles strings with multiple separators', () => {
    expect(startCase('mixed_Case With-separators')).toBe('Mixed Case With Separators')
  })
})
