/**
 * Converts a string to camelCase.
 */
export default function camelCase(str: string): string {
  return str
    .replace(/[\s-_]+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^\p{Lu}/u, c => c.toLowerCase())
}

export { camelCase }
