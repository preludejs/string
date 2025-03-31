import camelCase from './camel-case.js'

describe('camelCase', () => {
  test('converts kebab-case to camelCase', () => {
    expect(camelCase('kebab-case')).toBe('kebabCase')
  })

  test('converts PascalCase to camelCase', () => {
    expect(camelCase('PascalCase')).toBe('pascalCase')
  })

  test('converts snake_case to camelCase', () => {
    expect(camelCase('snake_case')).toBe('snakeCase')
  })

  test('converts space separated to camelCase', () => {
    expect(camelCase('space separated')).toBe('spaceSeparated')
  })

  test('handles strings with multiple separators', () => {
    expect(camelCase('mixed_Case With-separators')).toBe('mixedCaseWithSeparators')
  })
})
