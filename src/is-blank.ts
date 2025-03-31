export const isBlankRe = /^\s*$/

/**
 * Checks if provided string is blank.
 * @param value The string to check.
 * @returns `true` if provided string is blank, `false` otherwise.
 */
export function isBlank(value: string): boolean {
  return isBlankRe.test(value)
}

export default isBlank
