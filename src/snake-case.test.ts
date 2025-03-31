import snakeCase from './snake-case.js'

describe('snakeCase', () => {
  test('converts camelCase to snake_case', () => {
    expect(snakeCase('camelCase')).toBe('camel_case')
  })

  test('converts PascalCase to snake_case', () => {
    expect(snakeCase('PascalCase')).toBe('pascal_case')
  })

  test('converts kebab-case to snake_case', () => {
    expect(snakeCase('kebab-case')).toBe('kebab_case')
  })

  test('converts space separated to snake_case', () => {
    expect(snakeCase('space separated')).toBe('space_separated')
  })

  test('handles strings with multiple separators', () => {
    expect(snakeCase('mixed_Case With-separators')).toBe('mixed_case_with_separators')
  })
})
