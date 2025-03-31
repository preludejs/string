import kebabCase from './kebab-case.js'

describe('kebabCase', () => {
  test('converts camelCase to kebab-case', () => {
    expect(kebabCase('camelCase')).toBe('camel-case')
  })

  test('converts PascalCase to kebab-case', () => {
    expect(kebabCase('PascalCase')).toBe('pascal-case')
  })

  test('converts snake_case to kebab-case', () => {
    expect(kebabCase('snake_case')).toBe('snake-case')
  })

  test('converts space separated to kebab-case', () => {
    expect(kebabCase('space separated')).toBe('space-separated')
  })

  test('handles strings with multiple separators', () => {
    expect(kebabCase('mixed_Case With-separators')).toBe('mixed-case-with-separators')
  })
})
