/**
 * Converts a string to Start Case.
 */
export default function startCase(str: string): string {
  return str
    .replace(/(\p{Ll})(\p{Lu})/gu, '$1 $2')
    .replace(/[\s-_]+(.)/g, (_, c) => ' ' + c.toUpperCase())
    .replace(/^\p{Ll}/u, c => c.toUpperCase())
    .trim()
}

export { startCase }
