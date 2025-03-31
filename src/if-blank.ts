import isBlank from './is-blank.js'

/**
 * Maps blank string to arbitrary value. Returns value as is if not blank.
 * @param value The string to check
 * @param thenThunk Function to call if string is blank
 * @returns The original string if not blank, or the result of thenThunk() if blank
 * @example
 * ifBlank('  ', () => 'was blank') // 'was blank'
 * ifBlank('hello', () => 'was blank') // 'hello'
 */
export function ifBlank<T>(value: string, thenThunk: () => T) {
  return isBlank(value) ? thenThunk() : value
}

export default ifBlank
