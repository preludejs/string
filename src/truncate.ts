/**
 * Truncates a string to the specified length and adds a suffix if truncated.
 * 
 * @param str - The string to truncate
 * @param length - Maximum length of the truncated string including the suffix
 * @param suffix - The suffix to add to truncated strings (default: '...')
 * @returns The truncated string with suffix if needed
 */
export default function truncate(str: string, length: number, suffix: string = '...'): string {
  if (str.length <= length) {
    return str
  }

  const truncatedLength = Math.max(0, length - suffix.length)
  return str.substring(0, truncatedLength).trimEnd() + suffix
}

export { truncate }