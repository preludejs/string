/**
 * @prelude/string - A TypeScript library for string manipulation
 *
 * This package provides a collection of utility functions for working with strings:
 * - String testing (is-blank)
 * - String transformation (dedent, indent, upper-first, truncate)
 * - Case conversion (kebab-case, camel-case, snake-case, start-case)
 * - Text manipulation (search-replace)
 * - Line operations (via the Lines namespace)
 * - String distance calculations
 *
 * All functions are designed with functional programming principles in mind
 * and focus on immutability and predictability.
 */

export * as L from './lines.js'
export * as Lines from './lines.js'
export * from './is-blank.js'
export * from './dedent.js'
export * from './distance.js'
export * from './first-indent.js'
export * from './if-blank.js'
export * from './indent-tail.js'
export * from './indent.js'
export * from './search-replace.js'
export * from './camel-case.js'
export * from './kebab-case.js'
export * from './snake-case.js'
export * from './start-case.js'
export * from './upper-first.js'
export * from './truncate.js'
