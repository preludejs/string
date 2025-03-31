/**
 * Converts a string to snake_case.
 */
export default function snakeCase(str: string): string {
  return str
    .replace(/(\p{Ll})(\p{Lu})/gu, '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toLowerCase()
}

export { snakeCase }
